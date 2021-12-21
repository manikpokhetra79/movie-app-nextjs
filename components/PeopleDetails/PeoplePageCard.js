import React from "react";
import twitterLogo from "../../assets/icons/twitter.png";
import instagramLogo from "../../assets/icons/instagram.png";
import Image from "next/image";
import styles from "./styles/People.module.scss";
import Link from "next/link";
const PeoplePageCard = ({ details, socials, movies }) => {
  
  let gender = details.gender === 1 ? "Female" : "Male";
  let castArray = movies?.cast?.slice(0, 10);
  let peopleImageUrl = details?.profile_path
    ? `https://www.themoviedb.org/t/p/w1280${details?.profile_path}`
    : process.env.EMPTY_PERSON_IMAGE;

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div>
          <Image
            src={peopleImageUrl}
            width={300}
            height={400}
            alt={`${details?.name}`}
            className={styles.profileimg}
          />
          <div className={styles.socialsWrapper}>
            <Link
              href={`https://twitter.com/${
                socials.twitter_id === null ? "" : socials.twitter_id
              }`}
            >
              <a>
                <Image
                  src={twitterLogo}
                  width={35}
                  height={35}
                  alt="twitter-logo"
                  className={styles.img}
                />
              </a>
            </Link>{" "}
            <Link
              href={`https://www.instagram.com/${
                socials.instagram_id === null ? "" : socials.instagram_id
              }`}
            >
              <a>
                {" "}
                <Image
                  src={instagramLogo}
                  width={35}
                  height={35}
                  alt="insta-logo"
                  className={styles.img}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <div>
            {" "}
            <h2>Personal Info</h2>
          </div>
          <p>
            <b>Known for :</b>{" "}
            {details.known_for_department === null
              ? "NA"
              : details.known_for_department}
          </p>
          <p>
            <b>Gender :</b> {gender}
          </p>
          <p>
            <b>Birthdate :</b>{" "}
            {details.birthday === null ? "NA" : details.birthday}
          </p>
          <p>
            <b>Place of Birth :</b>{" "}
            {details.place_of_birth === null ? "NA" : details.place_of_birth}
          </p>
          <div>
            <h4>Also known as :</h4>{" "}
            {details?.also_known_as.length === 0 ? (
              <p>NA</p>
            ) : (
              details?.also_known_as?.map((data, index) => (
                <p key={index}>{data}</p>
              ))
            )}
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div>
          <h1>{details.name}</h1>
          <h2>Biography</h2>
          <p>
            {details.biography === "" ? (
              <span>Information not available</span>
            ) : (
              details.biography
            )}
          </p>
        </div>
        {/* movies list */}
        <h2>Known For</h2>
        <div className={styles.moviesList}>
          {castArray.length > 0 ? (
            castArray?.map((movie) => (
              <Link href={`/movies/${movie?.id}`} key={movie.id}>
                <a>
                  <div className={styles.cWrapper}>
                    <div>
                      <Image
                        src={
                          movie?.backdrop_path
                            ? `https://www.themoviedb.org/t/p/w276_and_h350_face${movie?.backdrop_path}`
                            : process.env.EMPTY_MOVIE_IMAGE
                        }
                        width={160}
                        height={200}
                        alt={`${movie.title}`}
                      />
                    </div>

                    <p className={styles.mainText}>{movie.name}</p>
                  </div>
                </a>
              </Link>
            ))
          ) : (
            <h4>No Information available</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeoplePageCard;
