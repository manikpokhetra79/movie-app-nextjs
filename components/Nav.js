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
            <Link href="/movies">Browse Movies</Link>
          </li>
          <li>
            <Link href="/people">Browse People</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
