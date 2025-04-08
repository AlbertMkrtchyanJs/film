import { NavLink } from "react-router-dom";
import { imgUrl } from "../../../constant/constant";

const Slider = ({ el }) => {
  return (
    <NavLink to={`movies/movie/${el.id}`} style={{textDecoration : 'none'}}>
      <img src={imgUrl + '/w300' + el.backdrop_path} />
      <h2 style={{ color: "orange" }}>{el.title}</h2>
    </NavLink>
  );
};

export default Slider;
