import CastCard from "./CastCard";
import styles from "./styles/Movie.module.scss";
const MovieCast = ({ credits }) => {
  let cast = credits.cast.slice(0, 12);
  return (
    <div className={styles.cardsWrapper}>
      {cast?.length > 0 ? cast.map((people) => (
        <CastCard key={people.id} cast={people} />
      )) : <h4>No Cast info...</h4>}
    </div>
  );
};
0;
export default MovieCast;
