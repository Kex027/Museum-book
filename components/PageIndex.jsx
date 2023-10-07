import React from "react";
import style from '../styles/doublePage.module.scss'

const PageIndex = ({index, side}) => {
  const getPageIndex = (side = 'left' || 'right') => {
    if (index !== 0 && !index)
        return ""

    if (side === 'left') 
      return (index + 1) * 2 - 1
    else if (side === 'right') 
      return (index + 1) * 2
    else 
      return ""
  }

  return (
    <div 
      className={style.pageIndex} 
      style={{
        left: side === "left" ? "3%" : "96%"
      }} 
    >
      {getPageIndex(side)}
    </div>
  )
}

export default PageIndex;