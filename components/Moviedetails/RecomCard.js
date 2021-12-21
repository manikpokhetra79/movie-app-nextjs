import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Movie.module.scss";
const RecomCard = ({ movie }) => {

  let path = movie?.poster_path
    ? `https://www.themoviedb.org/t/p/w276_and_h350_face${movie?.poster_path}`
    : movie?.backdrop_path
    ? `https://www.themoviedb.org/t/p/w276_and_h350_face${movie?.backdrop_path}`
    : process.env.EMPTY_MOVIE_IMAGE;
  return (
    <Link href={`/movies/${movie?.id}`}>
      <a>
        <div className={styles.cWrapper}>
          <div>
            <Image src={path} width={160} height={200} alt={`${movie.title}`} />
          </div>
          <div>
            <p className={styles.mainText}>{movie.title}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default RecomCard;
