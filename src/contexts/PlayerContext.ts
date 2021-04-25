import { createContext } from 'react';

interface Episode {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  durationAsString: string;
  url: string;
}

interface PlayerContextData {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  togglePlay: () => void;
  playFromKeyboard: (isPlayingProp: boolean) => void;
}

export const PlayerContext = createContext({} as PlayerContextData);
