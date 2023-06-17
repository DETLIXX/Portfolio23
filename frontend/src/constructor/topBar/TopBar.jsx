import React from 'react'
import './TopBar.scss'

import apple_logo from '../../resources/apple_logo.svg'

export default function TopBar() {
  return (
    <div className='top-bar'>
        <div className="top-bar-container">
            <div className="top-bar-logo">
                <img src={apple_logo} alt="" />
            </div>
            <div className="top-bar-buttons">
                <p>Desktop</p>
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>History</p>
                <p>Something</p>
            </div>
        </div>
    </div>
  )
}
