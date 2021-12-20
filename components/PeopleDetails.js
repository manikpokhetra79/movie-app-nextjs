import React from "react";
import PeoplePageCard from "./PeopleDetails/PeoplePageCard";
const PeopleDetails = (props) => {
  return (
    <div>
      <PeoplePageCard {...props} />
    </div>
  );
};

export default PeopleDetails;
