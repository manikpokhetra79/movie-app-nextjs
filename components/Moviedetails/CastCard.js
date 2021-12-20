import Image from "next/image";
import styles from "./styles/Movie.module.css";
const CastCard = ({ cast }) => {
  console.log(cast);
  return (
    <div className={styles.cWrapper}>
      <div className={styles.imgWrapper}> 
        <Image
          src={`https://www.themoviedb.org/t/p/w276_and_h350_face${cast.profile_path}`}
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
  );
};

export default CastCard;
