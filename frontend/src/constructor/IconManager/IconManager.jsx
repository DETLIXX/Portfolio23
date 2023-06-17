import React, { useState } from 'react'
import './IconManager.scss'

export default function IconManager(props) {
    const { left, top, img, title, toggleContentVisibility} = props;
    const iconStyle = {
        left: left - 60 || 'auto',
        top: top + 15 || 'auto',
      };

    const handleClick = (e) => { 
        e.stopPropagation();
        toggleContentVisibility(left, top)
    }


  return (
    <div className='icon-preset' style={iconStyle}>
        <div className="desktop-icon-image" onMouseDown={handleClick}>
          <img src={img} alt="" />
        </div>
        <div className="desktop-icon-title">
          <p>{title || 'Title'}</p>
        </div>
    </div>
  )
}
