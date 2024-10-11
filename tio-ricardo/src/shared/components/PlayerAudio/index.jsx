import React, { useState, useRef, useEffect } from "react";
import { ContainerPlayerAudio, Carousel, Track, Controls } from "./style";
import {
  MdPlayArrow,
  MdPause,
  MdStop,
  MdRepeat,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";

//Midias
import capaCd from "../../assets/imgs/capa-cd.png";
import petEstimacao from "../../assets/audios/cora-e-theo-pet-de-estimacao.mp3";
import withOrWithout from "../../assets/audios/cora-e-theo-with-or-without.mp3";

const PlayerAudio = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState("00:00");
  const audioRef = useRef(null);

  const tracks = [
    {
      title: "Pet de Estimação",
      author: "Cora e Theo",
      src: petEstimacao,
      cover: capaCd,
    },
    {
      title: "With or Without",
      author: "Cora e Theo",
      src: withOrWithout,
      cover: capaCd,
    },
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;

      const updateDuration = () => {
        const audioDuration = audioRef.current.duration;
        if (!isNaN(audioDuration)) {
          const minutes = Math.floor(audioDuration / 60)
            .toString()
            .padStart(2, "0");
          const seconds = Math.floor(audioDuration % 60)
            .toString()
            .padStart(2, "0");
          setDuration(`${minutes}:${seconds}`);
        }
      };

      audioRef.current.addEventListener("loadedmetadata", updateDuration);
    }
  }, [volume, currentTrack]);

  const handlePlay = (index) => {
    setCurrentTrack(index);
    if (audioRef.current) {
      audioRef.current.src = tracks[index].src;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
  };

  const handleNextTrack = () => {
    const nextTrack = (currentTrack + 1) % tracks.length;
    handlePlay(nextTrack);
  };

  const handlePreviousTrack = () => {
    const previousTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    handlePlay(previousTrack);
  };

  return (
    <ContainerPlayerAudio>
      <Carousel>
        {tracks.map((track, index) => (
          <Track key={index}>
            <LazyLoadImage
              src={track.cover}
              alt={`Capa do álbum ${track.title}`}
              width="100%"
            />
            <div className="text">
              <h3>{track.title}</h3>
              <p>{track.author}</p>
              <p>
                Tempo da música:{" "}
                {currentTrack === index && isPlaying ? duration : "00:00"}
              </p>
            </div>
            {currentTrack === index && isPlaying ? (
              <MdPause onClick={handlePause} aria-label="Pausar música" />
            ) : (
              <MdPlayArrow
                onClick={() => handlePlay(index)}
                aria-label="Tocar música"
              />
            )}
          </Track>
        ))}
      </Carousel>
      <audio ref={audioRef} />
      <Controls>
        <button onClick={handlePreviousTrack} aria-label="Música anterior">
          <MdSkipPrevious />
        </button>
        <button onClick={handleStop} aria-label="Parar música">
          <MdStop />
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          aria-label="Controle de volume"
        />
        <button onClick={handleNextTrack} aria-label="Próxima música">
          <MdSkipNext />
        </button>
        <button
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.loop = !audioRef.current.loop;
            }
          }}
          aria-label="Repetir música"
        >
          <MdRepeat />
        </button>
      </Controls>
    </ContainerPlayerAudio>
  );
};

export default PlayerAudio;
