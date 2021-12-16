import PeopleCard from "./PeopleCard";
import listStyles from "../styles/People.module.css";
const PeopleList = ({ people }) => {
  return (
    <div className={listStyles.list}>
      {people.results?.map((person) => (
        <PeopleCard key={person.id} person={person} />
      ))}
    </div>
  );
};

export default PeopleList;
