import React from 'react';
import Lottie from 'react-lottie';
import animation from '../animations/46472-lurking-cat.json';

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    </div>
  );
}

export default Loading;
