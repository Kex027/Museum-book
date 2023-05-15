import style from "../styles/doublePage.module.scss";

const DoublePageTest = ({ pageIndex, currentPage, pageIndexStyle }) => {
  return (
    <div className={style.container}>
      <div
        className={`${style.leftPage} ${
          pageIndexStyle < currentPage && style.flippedRight
        }`}
      >
        <div className={style.contentLeft}>
          <p className={style.quote}>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
            vero."
          </p>
        </div>
        {/*<img src="/left_page_not_adjusted.webp" alt="" />*/}
      </div>
      <div
        className={`${style.rightPage} ${
          pageIndexStyle > currentPage && style.flippedLeft
        }`}
      >
        {/*<img src="/right_page.webp" alt="" />*/}
        <div className={style.contentRight}>
          <h1>Story {pageIndex}</h1>
          <div className={style.video}>that's a video placeholder</div>
          <p>
            Chrisy talks about what life was like for an Irish traveller in the
            1950s - 1990s. An activist for Irish travellers, she uncovers the
            obstacles that traveller faced and the importance of education in
            the community{" "}
          </p>
          <p>Themes:</p>
          <p>Age:</p>
        </div>
      </div>
    </div>
  );
};

export default DoublePageTest;
