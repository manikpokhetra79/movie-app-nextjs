import { useState, useEffect } from "react";
import styles from "../styles/Paginate.module.css";
import { useRouter } from "next/router";
const Search = (props) => {
  const [text, setText] = useState("");
  const [searchType, setSearchType] = useState("");
  const router = useRouter();
  const searchQuery = () => {
    if (text === "" || searchType === "") {
      return;
    }
    router.push({
      pathname: "/search",
      query: { text: text, type: searchType, page: 1 },
    });
  };
  return (
    <>
      <div>
        <label htmlFor="name">Search </label>&nbsp;
        <input
          id="search"
          type="text"
          placeholder="search "
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            setSearchType(e.target.value);
          }}
        >
          <option onChange={(e) => setSearchType(e.target.value)}>None</option>
          <option value="movie">Movies</option>{" "}
          <option value="person">Celebrities</option>
        </select>
        <button onClick={searchQuery}>Search</button>
      </div>
    </>
  );
};

export default Search;
