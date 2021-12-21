import styles from "./styles/Movie.module.scss";
import RecomCard from "./RecomCard";
const MovieRecom = ({ recom }) => {
  let { results } = recom;
  return (
    <div className={styles.rCardsWrapper}>
      {results?.length > 0 ? (
        results.map((people) => <RecomCard key={people.id} movie={people} />)
      ) : (
        <h4>No Recommendations...</h4>
      )}
    </div>
  );
};

export default MovieRecom;
