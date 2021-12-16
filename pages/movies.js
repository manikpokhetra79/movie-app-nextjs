import MovieList from "../components/MovieList";
import PaginateData from "../components/PaginateData";
import movieStyles from "../styles/Movie.module.css";
import Link from "next/link";
const movies = ({ movies }) => {
  return (
    <div>
      {movies?.errors ? (
        <div className={movieStyles.heading}>
          <PaginateData /> <h1>No more results</h1>
          <Link href="/movies">Go back to start</Link>
        </div>
      ) : (
        <div>
          <h1 className={movieStyles.heading}>Popular Movies</h1>
          <PaginateData />
          <MovieList movies={movies} />
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const res = await fetch(
    `${process.env.MOVIE_API}/discover/movie?sort_by=popularity.desc&page=${page}&api_key=${process.env.API_KEY}`
  );
  const movies = await res.json();
  return {
    props: {
      movies,
    },
  };
};

export default movies;
