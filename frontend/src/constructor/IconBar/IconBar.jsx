import React from 'react'
import './IconBar.scss'

import apple_img from '../../resources/apple_email.avif'

export default function IconBar() {
  return (
    <div className='icon-bar'>
      <div className="icon-bar-container">
        <div className="icon-bar-content">
          <div className="icon-bar-item">
            <img src={apple_img} alt="" />
          </div>
          <div className="icon-bar-item">
            <img src={apple_img} alt="" />
          </div>
          <div className="icon-bar-item">
            <img src={apple_img} alt="" />
          </div>
          <div className="icon-bar-item">
            <img src={apple_img} alt="" />
          </div>
          <div className="icon-bar-item">
            <img src={apple_img} alt="" />
          </div>
          <div className="icon-bar-item">
            <img src={apple_img} alt="" />
          </div>
          <div className="icon-bar-item">
            <img src={apple_img} alt="" />
          </div>
          <div className="icon-bar-item">
            <img src={apple_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
