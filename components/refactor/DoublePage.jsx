import classNames from "classnames";
import style from '../../styles/refactor/doublePage.module.scss'
import Curl from "./Curl";
import Bookmark from "./Bookmark";
import PageIndex from "./PageIndex";

const DoublePage = ({
  thisPageIndex, 
  currentPage, 
  pagesLength, 
  zIndexPage,
  changePage,
  changeCustomPage,
  bgLeft,
  bgRight,
  page,
  bookmark,
  bookmarkIndex
}) => {
	return (
		<div 
			className={classNames(style.container)} 
			style={{
				zIndex: pagesLength - Math.abs(zIndexPage - thisPageIndex)
			}}
		>

{/* LEFT PAGE */}
			<div className={classNames(style.leftPage, {
				[style.flippedRight]: thisPageIndex > currentPage,
			})} style={{
				backgroundImage: bgLeft
			}} >
				<div className={classNames(style.content)}>

          {bookmark && 
            <Bookmark 
              bookmark={bookmark}
              bookmarkIndex={bookmarkIndex}
              thisPageIndex={thisPageIndex}
              zIndexPage={zIndexPage}
              changeCustomPage={changeCustomPage}
            />
          }

          <PageIndex side='left' thisPageIndex={thisPageIndex} />
				</div>
				<Curl side="left" changePage={changePage} />
			</div>

{/* RIGHT PAGE */}
			<div className={
				classNames(style.rightPage, {
          [style.flippedLeft]: thisPageIndex < currentPage,
        })
			} style={{
				backgroundImage: bgRight
			}} >
				<div className={classNames(style.content)}>


          <PageIndex side='right' thisPageIndex={thisPageIndex} />
				</div>
				{thisPageIndex !== pagesLength - 1 && (
            <Curl side="right" changePage={changePage} />
          )}
			</div>


		</ div>
	)
}

export default DoublePage;