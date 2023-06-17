import React from 'react'
import './SpotifyWindow.scss'
import WindowHeader from '../windowHeader/WindowHeader'

export default function SpotifyWindow() {
  return (
    <div className='spotify-window window-preset'>
        <WindowHeader path={'Spotify'} text={'Listening to'}/>
        <iframe
            title='spotify'
            className='spotify'
            src="https://open.spotify.com/embed/playlist/4sfSa33DyplxQhDBLjOuwD?utm_source=generator&theme=0"
        ></iframe>
    </div>
  )
}
