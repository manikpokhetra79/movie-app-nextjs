import React from "react";
import MovieCast from "./Moviedetails/MovieCast";
import MovieRecom from "./Moviedetails/MovieRecom";
import MovieHeader from "./Moviedetails/MovieHeader";
import styles from "../styles/MovieDetails.module.css";
const MovieDetails = (props) => {
  const { details, recommendations, credits } = props;
  return (
    <>
      <main className={styles.main}>
        <section id="movie-header">
          <h2>Movie Details</h2>
          <MovieHeader details={details} />
        </section>
        <section id="movie-cast">
          <h2>Top Movie Cast</h2>
          <MovieCast credits={credits} />
        </section>
        <section id="movie-recom">
          <h2>Recommendations</h2>
          <MovieRecom recom={recommendations} />
        </section>
      </main>
    </>
  );
};

export default MovieDetails;
