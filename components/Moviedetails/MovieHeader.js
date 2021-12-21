import React from "react";
import Image from "next/image";
import styles from "./styles/Movie.module.scss";
const MovieHeader = ({ details }) => {
  let percent = details.vote_average * 10;
  let color = percent > 40 ? (percent > 60 ? "green" : "orange") : "red";
  
  let path = details?.poster_path
    ? `https://www.themoviedb.org/t/p/w1280${details?.poster_path}`
    : details?.backdrop_path
    ? `https://www.themoviedb.org/t/p/w1280${details?.backdrop_path}`
    : process.env.EMPTY_MOVIE_IMAGE;
  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${details.backdrop_path})`,
        }}
      >
        <div className={styles.innerContainer}>
          {" "}
          <div className={styles.leftSide}>
            <Image
              className={styles.profileimg}
              src={path}
              width={300}
              height={400}
              alt={`${details?.title}`}
            />
          </div>
          {/* right */}
          <div className={styles.rightSide}>
            {/* movie info */}
            <h1>
              {details?.title ? details?.title : "No Title Found"} &#40;
              {details?.release_date
                ? details?.release_date.substr(0, 4)
                : "NA"}
              &#41;
            </h1>
            <p>
              <i>{details?.tagline ? details?.tagline : "No tagline"}</i>
            </p>
            <p>
              Rating :&nbsp;
              <span
                style={{
                  backgroundColor: `${color}`,
                  padding: "6px",
                  borderRadius: "50%",
                }}
                className={styles.rating}
              >
                {percent}&nbsp;
              </span>
              %
            </p>
            <div>
              <h3>Overview</h3>
              <p>
                {details?.overview ? details?.overview : "No information found"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieHeader;
