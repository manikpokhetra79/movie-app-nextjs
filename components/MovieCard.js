import Image from "next/image";
import listStyles from "../styles/Movie.module.css";
import Link from "next/link";
const MovieCard = ({ movie }) => {
  let path = movie?.poster_path
    ? `https://www.themoviedb.org/t/p/w1280${movie?.poster_path}`
    : movie?.backdrop_path
    ? `https://www.themoviedb.org/t/p/w1280${movie?.backdrop_path}`
    : process.env.EMPTY_MOVIE_IMAGE;
  return (
    <Link href={`/movies/${movie?.id}`}>
      <a>
        {" "}
        <div className={listStyles.mcard}>
          <div className={listStyles.mcardimage}>
            <Image src={path} width={260} height={340} alt={`${movie.title}`} />
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
      </a>
    </Link>
  );
};

export default MovieCard;
