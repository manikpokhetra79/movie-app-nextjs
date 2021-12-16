import PeopleList from "../components/PeopleList";
import PaginateData from "../components/PaginateData";
import Link from "next/link";
import peopleStyles from "../styles/People.module.css";
const celebs = ({ people }) => {
  console.log(people);
  return (
    <div>
      {people?.errors ? (
        <div className={peopleStyles.heading}>
          <PaginateData /> <h1>No more results</h1>
          <Link href="/movies">Go back to start</Link>
        </div>
      ) : (
        <div>
          <h1 className={peopleStyles.heading}>Popular People</h1>
          <PaginateData />
          <PeopleList people={people} />
        </div>
      )}
    </div>
  );
};
export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const res = await fetch(
    `${process.env.MOVIE_API}/person/popular?page=${page}&api_key=${process.env.API_KEY}`
  );
  const people = await res.json();
  return {
    props: {
      people,
    },
  };
};

export default celebs;
