import React, { useState } from 'react';

export const Browser = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    const video = document.getElementById('browser-video') as HTMLVideoElement;
    if (video) {
      isPlaying ? video.pause() : video.play();
    }
  };

  return (
    <div className="max-w-7xl w-full mx-auto my-8">
      <div className="rounded-lg overflow-hidden shadow-lg border">
        <div className="bg-gray-200 dark:bg-[#29282B] px-4 py-2 flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        <div className="relative bg-gray-200 dark:bg-[#29282B]">
          <video
            id="browser-video"
            className="w-full h-auto"
            src="/assets/demo.mp4"
            poster="/assets/demo.jpg"
            onClick={handlePlayPause}
          />

          {!isPlaying && (
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 dark:bg-[#29282B] rounded-full p-4 text-white"
              onClick={handlePlayPause}
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
