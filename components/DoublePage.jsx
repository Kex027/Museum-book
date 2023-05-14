import style from "../styles/doublePage.module.scss";

const DoublePageTest = () => {
  return (
    <div className={style.content}>
      <div className={style.leftPage}>
        <img src="/left_page_not_adjusted.webp" alt="" />
      </div>
      <div className={style.rightPage}>
        <img src="/right_page.webp" alt="" />
      </div>
    </div>
  );
};

export default DoublePageTest;
