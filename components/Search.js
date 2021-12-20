import { useState, useEffect } from "react";
import styles from "../styles/Search.module.scss";
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
      <div className={styles.searchBar}>
        <div>
          {" "}
          {/* <label htmlFor="name">Search </label>&nbsp; */}
          <input
            id="search"
            type="text"
            placeholder="Search movies or people"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div>
          <select
            onChange={(e) => {
              setSearchType(e.target.value);
            }}
          >
            <option onChange={(e) => setSearchType(e.target.value)}>
              Select type
            </option>
            <option value="movie">Movies</option>{" "}
            <option value="person">Celebrities</option>
          </select>
        </div>{" "}
        <button onClick={searchQuery}>Search</button>
      </div>
    </>
  );
};

export default Search;
