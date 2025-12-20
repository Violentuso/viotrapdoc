import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const playerWrapperStyle = {
  position: 'relative',
  paddingTop: '56.25%',
};

const playerInnerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
};

const OptimizedMdxVideo = ({ src, poster, title = 'Видео-инструкция' }) => {
  if (!src) {
    return <p>Ошибка: Не указан источник видео (src).</p>;
  }

  return (
    <BrowserOnly fallback={<div>Загрузка видео…</div>}>
      {() => {
        const ReactPlayer = require('react-player').default;

        return (
          <div style={{ marginBottom: 20 }}>
            <div style={playerWrapperStyle}>
              <ReactPlayer
                url={src}
                controls
                width="100%"
                height="100%"
                style={playerInnerStyle}
                light={poster || false}
                config={{
                  file: {
                    attributes: {
                      poster,
                    },
                  },
                }}
              />
            </div>
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default OptimizedMdxVideo;
