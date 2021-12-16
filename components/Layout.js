import Nav from "./Nav";
import Meta from './Meta'
const Layout = ({ children }) => {
  return (
    <>
    <Meta />
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
