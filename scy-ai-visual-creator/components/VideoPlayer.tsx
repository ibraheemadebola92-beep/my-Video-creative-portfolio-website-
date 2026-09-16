'use client';

import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  title: string;
  autoplay?: boolean;
}

export function VideoPlayer({ src, title, autoplay = false }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && autoplay) {
      videoRef.current.play();
    }
  }, [autoplay]);

  return (
    <div className="w-full bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        title={title}
        controls
        className="w-full h-auto"
        poster=""
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}