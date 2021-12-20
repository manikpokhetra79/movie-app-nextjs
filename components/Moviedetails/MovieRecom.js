import styles from "./styles/Movie.module.scss";
import RecomCard from "./RecomCard";
const MovieRecom = ({ recom }) => {
  console.log(recom.results);
  let { results } = recom;
  return (
    <div className={styles.rCardsWrapper}>
      {results.map((people) => (
        <RecomCard key={people.id} movie={people} />
      ))}
    </div>
  );
};

export default MovieRecom;
