import React, { createContext, useContext, useState, useRef, ReactNode, useEffect } from "react";

interface MusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  audioLevel: number;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const animationFrameRef = useRef<number>();

  // Initialiser l'audio seulement côté client
  useEffect(() => {
    if (typeof window !== "undefined" && !audioRef.current) {
      audioRef.current = new Audio("/music/audio.mp3");
      audioRef.current.crossOrigin = "anonymous";

      // Créer le contexte audio et l'analyseur
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      // FFT plus large pour meilleure résolution dans les basses
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = .6; // Lissage pour des transitions fluides

      const source = audioContext.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Analyser l'audio en temps réel
  useEffect(() => {
    if (!isPlaying || !analyserRef.current || !audioContextRef.current) {
      setAudioLevel(0);
      return;
    }

    const analyser = analyserRef.current;
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    const sampleRate = audioContextRef.current.sampleRate;

    // Calculer les bins pour les kicks (40-120 Hz)
    const frequencyPerBin = sampleRate / analyser.fftSize;
    const kickStartBin = Math.floor(40 / frequencyPerBin);
    const kickEndBin = Math.floor(120 / frequencyPerBin);

    let previousLevel = 0;

    const updateAudioLevel = () => {
      analyser.getByteFrequencyData(dataArray);

      // Focus sur les fréquences kick/basse (40-120 Hz)
      let sum = 0;
      let max = 0;
      for (let i = kickStartBin; i <= kickEndBin; i++) {
        sum += dataArray[i];
        max = Math.max(max, dataArray[i]);
      }

      // Moyenne pondérée : 70% moyenne + 30% pic pour capturer les kicks
      const average = sum / (kickEndBin - kickStartBin + 1) / 255;
      const peak = max / 255;
      let level = average * 0.7 + peak * 0.3;

      // Détection de pic : boost si forte augmentation (kick détecté)
      const delta = level - previousLevel;
      if (delta > 0.15) {
        level = Math.min(level * 1.5, 1); // Boost les kicks
      }

      previousLevel = level;
      setAudioLevel(level);
      animationFrameRef.current = requestAnimationFrame(updateAudioLevel);
    };

    updateAudioLevel();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    if (!audioRef.current || !audioContextRef.current) return;

    // Reprendre le contexte audio si suspendu (requis par certains navigateurs)
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic, audioLevel }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);

  if (context === undefined) {
    throw new Error("useMusic must be used within a MusicProvider");
  }

  return context;
}