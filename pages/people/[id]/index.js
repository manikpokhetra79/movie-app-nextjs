import axios from "axios";
import PeopleDetails from "../../../components/PeopleDetails";
const index = (props) => {
  return (
    <div>
      <PeopleDetails {...props} />
    </div>
  );
};
export const getServerSideProps = async (context) => {
  let { id } = context.params;

  const { data: pesonDetails } = await axios.get(
    `${process.env.MOVIE_API}/person/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const { data: personMovies } = await axios.get(
    `${process.env.MOVIE_API}/person/${id}/movie_credits?api_key=${process.env.API_KEY}&language=en-US`
  );
  const { data: personSocials } = await axios.get(
    `${process.env.MOVIE_API}/person/${id}/external_ids?api_key=${process.env.API_KEY}&language=en-US`
  );

  return {
    props: {
      details: pesonDetails,
      movies: personMovies,
      socials: personSocials,
    },
  };
};

export default index;
