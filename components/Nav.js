import Link from "next/link";
import Search from "./Search";
import navStyles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <>
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
            <Link href="/movies">Movies</Link>{" "}
            <Link href="/people">People</Link>
          </li>
          {/* <li>
            <Link href="/movies">Movies</Link>
          </li> */}

          <li>
            <Search />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
