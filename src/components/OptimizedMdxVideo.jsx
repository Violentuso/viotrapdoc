import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const wrapperStyle = {
  position: 'relative',
  paddingTop: '56.25%',
};

const videoStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

const OptimizedMdxVideo = ({ src, poster }) => {
  if (!src) {
    return <p>Ошибка: Не указан источник видео.</p>;
  }

  return (
    <BrowserOnly>
      {() => (
        <div style={{ marginBottom: 20 }}>
          <div style={wrapperStyle}>
            <video
              controls
              preload="metadata"
              poster={poster}
              style={videoStyle}
            >
              <source src={src} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
        </div>
      )}
    </BrowserOnly>
  );
};

export default OptimizedMdxVideo;
