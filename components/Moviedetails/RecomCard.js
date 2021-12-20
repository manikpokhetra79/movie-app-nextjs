import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Movie.module.scss";
const RecomCard = ({ movie }) => {
  // console.log(movie);
  let path =
    movie.backdrop_path === null ? movie.poster_path : movie.backdrop_path;
  return (
    <Link href={`/movies/${movie?.id}`}>
      <a>
        <div className={styles.cWrapper}>
          <div>
            <Image
              src={`https://www.themoviedb.org/t/p/w276_and_h350_face${path}`}
              width={160}
              height={180}
              alt={`${movie.title}`}
            />
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
