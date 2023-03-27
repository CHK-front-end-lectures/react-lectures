import { useRef, useEffect } from 'react';

const Video = ({ src, isPlaying }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }); // thirret ne qdo renderim

  return <video ref={videoRef} src={src} loop playsInline />;
};

export default Video;
