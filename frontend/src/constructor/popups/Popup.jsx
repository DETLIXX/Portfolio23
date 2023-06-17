import React from 'react'
import './Popup.scss'

export default function Popup() {

  return (
    <div className='popup-container'>
        <div className="popup-alert">
            <div className="popup-headline">
                <div className="popup-title">
                    <p>MESSAGE</p>
                </div>
                <div className="popup-close">
                    <p>X</p>
                </div>
            </div>

            <div className="popup-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis, dolorem eius sicing elit. Cupiditate omnis, dolorem ei</p>
            </div>
        </div>
    </div>
  )
}
