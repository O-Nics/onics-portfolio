import {MusicIcon} from "@/components/icons";
import {useState} from "react";

export default function LaunchMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(
    typeof Audio !== "undefined"
      ? new Audio("/music/lc.mp3") // chemin vers ton fichier
      : null
  );

  const handleClick = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0; // remet au début
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <button
      className="icon-nav cursor-pointer items-center flex "
      onClick={handleClick}
    >
      <MusicIcon
        className={`icon   hover:text-red-500 ${isPlaying ? "!text-red-500 animate-blink" : "text-default-500"}`}
        size={42}
      />
    </button>
  );
}
