import style from '../styles/bookmark.module.scss'
import classNames from 'classnames';

const Bookmark = ({
  bookmark, 
  bookmarkIndex, 
  thisPageIndex, 
  zIndexPage, 
  changeCustomPage
}) => {
  return (
    <div 
    className={classNames(style.container)} 
    style={{
      top: (bookmarkIndex + 1) * 8 - 4 + "%",
      color: bookmark.textColor,
      backgroundColor: bookmark.color,
      transform: thisPageIndex > zIndexPage ? "rotateY(180deg)" : "",
    }}
    onClick={() => {
      changeCustomPage(thisPageIndex);
    }}
  >
    {bookmark?.name}
  </div>
  )
}

export default Bookmark;