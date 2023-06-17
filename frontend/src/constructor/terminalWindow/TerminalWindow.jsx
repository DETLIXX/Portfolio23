import React, { useState } from 'react'
import './TerminalWindow.scss'
import WindowHeader from '../windowHeader/WindowHeader'
import TypeWriterEffect from 'react-typewriter-effect';
import IconManager from '../IconManager/IconManager';
import apple_img from '../../resources/apple_terminal.png'

export default function TerminalWindow() {
  const [isVisible, setisVisible] = useState(false);

  const style = { 
    left: 300,
    top: -450
}

const toggleContentView = () => { 
    setisVisible(!isVisible)
}

  return (
    <>
      <IconManager img={apple_img} title={'Terminal'} left={style.left} top={style.top} toggleContentVisibility={toggleContentView}/>
      <div style={style} className={`terminal-window window-preset ${isVisible ? 'visible' : 'hidden'}`}>
          <WindowHeader path={'Terminal'} text={'Hacking'}/>
          <div className="terminal-window-container">
            <div className="terminal-dummy-text">
            <p>matus.balicky@Macbook % ls </p> 
            <p>$ Desktop | About This | secret</p>
            <p>matus.balicky@Macbook % cd Desktop </p> 
            <p>matus.balicky@Macbook Desktop % cd <a target='blank_' href="https://bit.ly/43m2rB2">secret</a></p> 
            <p>matus.balicky@Macbook secret % ls </p> 
            <p>$ all-projects</p>

            <p>matus.balicky@Macbook secret % rm -r all-projects</p>
            <p>$ No permission, try again</p>
            <br />
            <TypeWriterEffect
              startDelay={100}
              cursorColor="black"
              text={`matus.balicky@Macbook secret %`}
              typeSpeed={30}
              />
            </div>
          </div>
      </div>
    </>
  )
}