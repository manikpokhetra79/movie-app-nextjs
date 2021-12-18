import Image from "next/image";
import listStyles from "../styles/Movie.module.css";
import Link from "next/link";
const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movies/${movie?.id}`}>
      <a>
        {" "}
        <div className={listStyles.mcard}>
          <div className={listStyles.mcardimage}>
            <Image
              src={`https://www.themoviedb.org/t/p/w1280${movie.poster_path}`}
              width={260}
              height={340}
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
      </a>
    </Link>
  );
};

export default MovieCard;
