import React from 'react';

const Loading = () => {
  return (
    <div className="loading">
      <img src="https://pngimage.net/electronics-images-png/" alt="caregando" />
      <h1>
        Carregando <span className="dot">.</span>{' '}
      </h1>
    </div>
  );
};

export default Loading;
