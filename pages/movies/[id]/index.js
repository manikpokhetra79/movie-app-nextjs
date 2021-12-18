import axios from "axios";
import MovieDetails from "../../../components/MovieDetails";
const index = (props) => {
  return (
    <div>
      <MovieDetails {...props} />
    </div>
  );
};
export const getServerSideProps = async (context) => {
  let { id } = context.params;

  const { data: movieDetails } = await axios.get(
    `${process.env.MOVIE_API}/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );
  //   const movie = await res.json();
  const { data: movieCredits } = await axios.get(
    `${process.env.MOVIE_API}/movie/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );
  const { data: movieRecommendations } = await axios.get(
    `${process.env.MOVIE_API}/movie/${id}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  return {
    props: {
      details: movieDetails,
      credits: movieCredits,
      recommendations: movieRecommendations,
    },
  };
};

export default index;
