import React from 'react'
import './WindowControl.scss'

export default function WindowControl(props) {
  
  return (
    <div className='window-controls'>
        <div className="window-contorl-close"></div>
        <div className="window-contorl-minimize"></div>
        <div className="window-contorl-maximize"></div>
    </div>
  )
}
