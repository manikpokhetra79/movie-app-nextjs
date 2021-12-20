import Image from "next/image";
import Link from "next/link";
import listStyles from "../styles/People.module.css";
const PeopleCard = ({ person }) => {
  return (
    <Link href={`/people/${person?.id}`}>
      <a>
        <div className={listStyles.pcard}>
          <div className={listStyles.pcardimage}>
            <Image
              src={`https://www.themoviedb.org/t/p/w1280${person.profile_path}`}
              width={260}
              height={320}
              alt={`${person.name}`}
            />
          </div>
          <div className={listStyles.pcardinfo}>
            <div>
              <h4>{person?.name}</h4>
            </div>
            <div>
              {person?.known_for?.map((movie, index) => (
                <span className={listStyles.pcardcaption} key={movie.id}>
                  {(index ? ", " : "") +
                    (movie.original_title === undefined
                      ? movie.original_name
                      : movie.original_title)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PeopleCard;
