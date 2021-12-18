import React from "react";
import CastCard from "./CastCard";
import styles from "./styles/Movie.module.css";
const MovieCast = ({ credits }) => {
  let cast = credits.cast.slice(0, 10);
  // console.log(cast);
  return (
    <div className={styles.cardsWrapper}>
      {cast.map((people) => (
        <CastCard key={people.id} cast={people} />
      ))}
    </div>
  );
};

export default MovieCast;
