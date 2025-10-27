import { MusicIcon } from "@/components/icons";
import { useMusic } from "@/contexts/MusicContext";
type LaunchMusicProps = {
  size?: number;
};
export default function LaunchMusic({ size = 42 }: LaunchMusicProps) {
  const { isPlaying, toggleMusic, audioLevel } = useMusic();

  // Calculer la taille dynamique basée sur l'audio (kicks)
  // Scale entre 1.0 et 1.8 pour un effet visible
  const dynamicScale = isPlaying
    ? audioLevel * 1.2 < 1
      ? 1
      : audioLevel * 1.2
    : 1;

  return (
    <>
      <button
        className={`icon-nav cursor-pointer items-center flex`}
        onClick={toggleMusic}
      >
        <MusicIcon
          className={`icon mt-[4px] hover:text-red-500 transition-all ${isPlaying ? "!text-red-500" : "text-default-500"}`}
          size={size}
          style={{
            transform: `scale(${dynamicScale})  `,
            transition: "transform 0.1s ease-out",
          }}
        />
      </button>
    </>
  );
}
