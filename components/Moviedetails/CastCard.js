import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Movie.module.scss";
const CastCard = ({ cast }) => {
  let imageUrl = cast?.profile_path
    ? `https://www.themoviedb.org/t/p/w276_and_h350_face${cast.profile_path}`
    : process.env.EMPTY_PERSON_IMAGE;
  return (
    <Link href={`/people/${cast?.id}`}>
      <a>
        <div className={styles.cWrapper}>
          <div className={styles.imgWrapper}>
            <Image
              src={imageUrl}
              width={160}
              height={180}
              alt={`${cast.title}`}
            />
          </div>
          <div>
            <p className={styles.mainText}>{cast.name}</p>
            <p className={styles.subText}>{cast.character}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CastCard;
