// /src/components/OptimizedMdxVideo.jsx

import React from 'react';
import ReactPlayer from 'react-player';

// Стили для адаптивного плеера (важно для light prop)
const playerWrapperStyle = {
  position: 'relative',
  paddingTop: '56.25%', // Соотношение 16:9
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
    <div className="optimized-video-component" style={{ marginBottom: '20px' }}>
      <div className="player-wrapper" style={playerWrapperStyle}>
        <ReactPlayer
          url={src}
          
          // Ленивая загрузка: загружает только постер (или плейсхолдер) до клика.
          light={poster ? poster : true} 
          
          width='100%'
          height='100%'
          controls={true}
          style={playerInnerStyle}
          aria-label={title}
          
          // Для MP4 файлов, если нужно начать с заданного момента
          config={{
            file: {
              attributes: {
                poster: poster // Постер также можно указать здесь
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default OptimizedMdxVideo;