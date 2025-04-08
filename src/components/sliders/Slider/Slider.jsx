const Slider = ({ el }) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w300/${el.backdrop_path}`} />
      <h2 style={{ color: "orange" }}>{el.title}</h2>
    </>
  );
};

export default Slider;
