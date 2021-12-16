import Image from "next/image";
import listStyles from "../styles/Movie.module.css";
const MovieCard = ({ movie }) => {
  // console.log(movie.poster_path);
  return (
    <div className={listStyles.mcard}>
      <div className={listStyles.mcardimage}>
        <Image
          src={`https://www.themoviedb.org/t/p/w1280${movie.poster_path}`}
          width={280}
          height={300}
          alt={`${movie.title}`}
        />
      </div>
      <div className={listStyles.mcardinfo}>
        <div>
          <p>{movie.title}</p>
        </div>
        <div className={listStyles.mcardrating}>
          <b>Rating</b> : {movie.vote_average}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
