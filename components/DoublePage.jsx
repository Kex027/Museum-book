import style from "../styles/doublePage.module.scss";

const DoublePage = ({
  currentPage,
  pageIndex,
  pagesLength,
  pageIndexStyle,
  id,
  heading,
  description,
  video,
  image,
  category,
}) => {
  return (
    <div
      key={id}
      className={style.content}
      style={{
        zIndex: pagesLength - Math.abs(currentPage - pageIndex),
      }}
    >
      <div
        className={`${style.pageLeft}  ${
          pageIndexStyle < currentPage && style.flippedRight
        }`}
      >
        <div className={`${style.pageContent}`}>
          <div className={style.bookmark}>
            <h2>{category}</h2>
          </div>
          <img src={image.fields.file.url} alt={image.fields.title} />
        </div>
      </div>
      <div
        className={`${style.pageRight} ${
          pageIndexStyle > currentPage && style.flippedLeft
        } `}
      >
        <div className={`${style.pageContent}`}>
          <h1>{heading}</h1>
          <video controls={false}>
            <source src={video.fields.file.url} type="video/mp4" />
          </video>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DoublePage;
