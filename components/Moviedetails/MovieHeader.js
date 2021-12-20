import React from "react";
import Image from "next/image";
import styles from "./styles/Movie.module.css";
const MovieHeader = ({ details }) => {
  console.log(details);
  // );
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
          {/* left */}
          <div className={styles.leftSide}>
            <Image
              src={`https://www.themoviedb.org/t/p/w1280${details.poster_path}`}
              width={300}
              height={400}
              alt={`${details.title}`}
            />
          </div>
          {/* right */}
          <div className={styles.rightSide}>
            {/* movie info */}
            <h1>
              {details.title} &#40;{details?.release_date.substr(0, 4)}&#41;
            </h1>
            <p>
              <i>{details.tagline}</i>
            </p>
            <p>Rating : {details.vote_average*10}%</p>
            <div>
              <h3>Overview</h3>
              <p>{details.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieHeader;
