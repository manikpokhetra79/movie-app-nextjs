import CastCard from "./CastCard";
import styles from "./styles/Movie.module.scss";
const MovieCast = ({ credits }) => {
  let cast = credits.cast.slice(0, 12);
  return (
    <div className={styles.cardsWrapper}>
      {cast.map((people) => (
        <CastCard key={people.id} cast={people} />
      ))}
    </div>
  );
};
0;
export default MovieCast;
