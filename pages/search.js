import PaginateData from "../components/PaginateData";
import MovieList from "../components/MovieList";
import router from "next/router";
import PeopleList from "../components/PeopleList";
const search = ({ data }) => {
  let searchType = router?.router?.query?.type;
  console.log(searchType);
  return (
    <div>
      {searchType === "person" ? (
        <PeopleList people={data} />
        // <h2>People</h2>
      ) : (
        <MovieList movies={data} />
        // <h2>Movie</h2>
      )}
    </div>
  );
};
export const getServerSideProps = async ({ query }) => {
  const { text, type } = query;
  const page = query.page || 1;
  let res = await fetch(
    `${process.env.MOVIE_API}/search/${type}?api_key=${process.env.API_KEY}&language=en-US&query=${text}`
  );

  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

export default search;
