import { IMG_CDN_URL } from "../Utils/Constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className=" w-48 rounded-lg flex pr-4 ">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};
export default MovieCard;
