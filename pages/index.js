import Search from "../components/Search";
import styles from "../styles/Home.module.scss";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>
          Welcome to <span>Movie Flix</span>
        </h1>
        <h2>
          A home to millions of movies and celebrities information. Explore now.
        </h2>
      </div>
      <Search />
    </div>
  );
}
