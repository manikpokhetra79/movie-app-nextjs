import Head from "next/head";
import styles from "../styles/Home.module.css";
import PN from "../components/PaginateData";
export default function Home() {
  return (
    <div className={styles.container}>
      {/* search component */}
      <PN />
    </div>
  );
}
