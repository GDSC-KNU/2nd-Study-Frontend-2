import React, { useState, useEffect } from "react";
import music3 from "./audios/10_유예근-My Victory.mp3";
import music4 from "./audios/Story of the queen.mp3";
import "./Music.css";

import imgE from "./image/play.png";
import imgF from "./image/start.png";

const useMultiAudio = (urls) => {
  urls = { music: [music4] };

  const [sources] = useState(
    urls.music.map((url) => {
      return {
        url,
        audio: new Audio(url),
      };
    })
  );

  const [players, setPlayers] = useState(
    urls.music.map((url) => {
      return {
        url,
        playing: false,
      };
    })
  );

  const toggle = (targetIndex) => () => {
    const newPlayers = [...players];
    const currentIndex = players.findIndex((p) => p.playing === true);
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = true;
      newPlayers[targetIndex].playing = true;
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false;
    } else {
      newPlayers[targetIndex].playing = true;
    }
    setPlayers(newPlayers);
  };

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause();
    });
  }, [sources, players]);

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener("ended", () => {
        const newPlayers = [...players];
        newPlayers[i].playing = true;
        setPlayers(newPlayers);
      });
    });
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener("ended", () => {
          const newPlayers = [...players];
          newPlayers[i].playing = false;
          setPlayers(newPlayers);
        });
      });
    };
  }, []);

  return [players, toggle];
};

const Music = ({ urls }) => {
  const [players, toggle] = useMultiAudio(urls);

  return (
    <>
      {players.map((player, i) => (
        <Player key={i} player={player} toggle={toggle(i)} />
      ))}
    </>
  );
};

const Player = ({ player, toggle }) => (
  <>
    <div className="soundBadge" onClick={toggle}>
      {player.playing ? (
        <img src={imgF} width="40" height="40" alt="scoreBadge" />
      ) : (
        <img src={imgE} width="40" height="40" alt="scoreBadge" />
      )}
    </div>
  </>
);

export default Music;
