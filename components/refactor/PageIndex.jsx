import style from '../../styles/refactor/pageIndex.module.scss'
import classNames from 'classnames';

const PageIndex = ({side, thisPageIndex}) => {
  return (
    <span className={classNames(style.container)} style={
      side === "left" ? 
      {
        left: '2%'
      } : 
      {
        right: '2%'
      }
    }>
      {
        side === "left" ? 
        (thisPageIndex + 1) * 2 - 1 : 
        (thisPageIndex + 1) * 2
      }
    </span>
  )
}

export default PageIndex;