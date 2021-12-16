import MovieCard from "./MovieCard";
import listStyles from "../styles/Movie.module.css";
const MovieList = ({ movies }) => {
  return (
    <div className={listStyles.list}>
      {movies.results?.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
