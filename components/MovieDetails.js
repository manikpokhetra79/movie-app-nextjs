import React from "react";
import MovieCast from "./Moviedetails/MovieCast";
import MovieRecom from "./Moviedetails/MovieRecom";
import MovieHeader from "./Moviedetails/MovieHeader";
const MovieDetails = (props) => {
  const { details, recommendations, credits } = props;
  return (
    <>
      <h2>Movie Details</h2>
      <section id="movie-header">
        <MovieHeader details={details} />
      </section>
      <section id="movie-cast">
        <h4>Top Cast</h4>
        <MovieCast credits={credits} />
      </section>
      {/* <section id="movie-recom">
        <h4>Recommendations</h4>
        <MovieRecom recom={recommendations} />
      </section> */}
    </>
  );
};

export default MovieDetails;
