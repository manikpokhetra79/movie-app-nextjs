import router from "next/router";
import { useState, useEffect } from "react";
import styles from "../styles/Paginate.module.css";
const PaginateData = () => {
  const [ifLeft, setIfLeft] = useState(false);
  // check if page is first or not
  useEffect(() => {
    // console.log(router?.query?.page);
    if (router?.query?.page === undefined || router?.query?.page === 1) {
      setIfLeft(false);
    } else if (router?.query?.page > 1) {
      setIfLeft(true);
    }
  }, []);
  function updateRoute(path, page) {
    router.push({
      pathname: path,
      query: { page },
    });
  }
  function handleNextPage() {
    if (!ifLeft) {
      setIfLeft(true);
    }
    const currentPath = router.pathname;
    let page = router?.query?.page ? Number(router.query.page) + 1 : 2;
    // update route params
    updateRoute(currentPath, page);
  }
  function handlePreviousPage() {
    const currentPath = router.pathname;
    //get the previous page number and push it to url for data fetching
    let page =
      router?.query?.page && router?.query?.page > 1
        ? Number(router.query.page) - 1
        : 0;
    console.log(page);
    if (page === 1) {
      setIfLeft(false);
    }
    if (page === 0) {
      return;
    }
    // update route params
    updateRoute(currentPath, page);
  }
  return (
    <div className={styles.btnContainer}>
      <button onClick={handlePreviousPage} disabled={!ifLeft}>
        &laquo; Previous
      </button>
      <button onClick={handleNextPage}>Next &raquo;</button>
    </div>
  );
};

export default PaginateData;
