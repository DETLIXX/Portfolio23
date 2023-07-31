import React, { useCallback, useState } from 'react'
import './Popup.scss'

export default function Popup({text, header}) {

    const [close, setclose] = useState(false);




  return (
    <div className={`${close ? 'hidden' : 'popup-container'}`}>
        <div className="popup-alert">
            <div className="popup-headline">
                <div className="popup-title">
                    <p>{header}</p>
                </div>
                <div className="popup-close">
                    <button className='text-red-500' onClick={() => setclose(true)}>X</button>
                </div>
            </div>

            <div className="popup-content">
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}
