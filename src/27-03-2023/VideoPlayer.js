import Video from './Video';
import { useState } from 'react';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoOptions = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <button onClick={handleVideoOptions}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <Video
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={isPlaying}
      />
    </>
  );
};

export default VideoPlayer;
