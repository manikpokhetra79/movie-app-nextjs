import Link from "next/link";
import Search from "./Search";
import navStyles from "../styles/Nav.module.scss";
const Nav = () => {
  return (
    <>
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/movies"> Movies</Link>
          </li>
          <li>
            <Link href="/people"> People</Link>
          </li>
          <li>
            <Link href="https://developers.themoviedb.org/3">Api </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
