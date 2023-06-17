import React from 'react'
import WindowControl from '../windowControl/WindowControl'
import './WindowHeader.scss'

export default function WindowHeader(props) {
  const {path, text} = props;


  return (
    <div>
        <div className="intro-top-filename">
            <WindowControl/>
            <p><strong>{path}</strong> / {text} </p>
        </div>
    </div>
  )
}
