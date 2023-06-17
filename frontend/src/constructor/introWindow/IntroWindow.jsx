import React from 'react'
import './IntroWindow.scss'
import intro_video from '../../resources/intro_video.gif'
import WindowControl from '../windowControl/WindowControl'
import WindowHeader from '../windowHeader/WindowHeader'

export default function IntroWindow() {

    const style = { 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 50%)',
    }


  return (
    <div style={style} className='intro-container window-preset'>
        <WindowHeader path={'About This'} text={"User"}/>
        <div className="intro-profile-headline">
            <div className="intro-headline-round">
               <img src={intro_video} alt="intro_headline" />
            </div>
        </div>
        <div className="intro-profile-info">
            <div className="intro-profile-name">
                <p>Alias: detlixx</p>
                <h1>Matúš Balicky</h1>
            </div>
            <div className="intro-profile-position">
                <p>Full Stack Web Developer</p>
            </div>
            <div className="intro-profile-desc">
                <h3>Crafting Custom Online Solutions: Join Forces with a Web Developer on a Mission to Help You Achieve Your Web Design Goals.</h3>
            </div>
        </div>
        <div className="intro-profile-additional">
            <div className="intro-profile-socials">
                <div className="intro-social">
                    <a target='_blank' rel="noreferrer" href="https://www.instagram.com/detlixx/"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div className="intro-social">
                    <a target='_blank' rel="noreferrer" href="https://discord.gg/8Y3TAua9dA"><i class="fa-brands fa-discord"></i></a>
                </div>
                <div className="intro-social">
                    <a target='_blank' rel="noreferrer"  href="https://www.linkedin.com/in/detlixx/"><i class="fa-brands fa-linkedin"></i></a>
                </div>
                <div className="intro-social">
                    <a target='_blank' rel="noreferrer" href="https://github.com/DETLIXX"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
        <div className="intro-profile-footer">
            <p>© {new Date().getFullYear()} Matúš Balicky. All rights reserved.</p>
        </div>
    </div>
  )
}
