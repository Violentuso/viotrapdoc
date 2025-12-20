export default OptimizedMdxVideo = ({ src, poster, title = 'Видео-инструкция' }) => {
  if (!src) {
    return <p>Ошибка: Не указан источник видео (src).</p>;
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <ReactPlayer
          url={src}
          controls
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
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
};
