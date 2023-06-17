import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import './DummyLog.scss'

export default function DummyLog() {
  return (
    <div className='dummy-terminal'>
         <TypeWriterEffect
            startDelay={100}
            cursorColor="black"
            text={`$ Last login: ${new Date().toLocaleString()} \\ $ Successfully breached user Macbook \\ $ Logged in as matus.balicky@Macbook`}
            typeSpeed={30}
          />
    </div>
  )
}
