import React, { useEffect,useState } from 'react'
import './NotesWindow.scss'
import WindowHeader from '../windowHeader/WindowHeader'
import IconManager from '../IconManager/IconManager';

import apple_img from '../../resources/apple_notes.avif' 


export default function NotesWindow() {

    const [isVisible, setisVisible] = useState(true);
    const [windowPosition, setWindowPosition] = useState({});

    const style = { 
        left: 0,
        top: -800
    }


    const toggleContentView = (result) => { 
        console.log(result);
        setisVisible(!isVisible)
    }

    const data = [
        {
            title: 'Who am i ?',
            active: true
        },
        {
            title: <p><i class="fa-solid fa-lock"></i> Locked</p>,
        }
    ]

    const GeneratePanel = () => { 
        return ( 
            data.map((res, index) => { 
                return ( 
                    <div key={index} className={res.active ? "notes-panel-content notes-active" : 'notes-panel-content'}>
                        <div className="notes-panel-title">
                            <p>{res.title}</p>
                        </div>
                        <div className="notes-panel-date">
                            <p>{new Date().toDateString()}</p>
                        </div>
                    </div>
                )
            })
        )
    }

  return (
    <>
    <IconManager 
    title={'Notes'} 
    left={style.left} 
    top={style.top} 
    img={apple_img} 
    toggleContentVisibility={toggleContentView}/>


    <div style={style} className={`notes-window window-preset ${isVisible ? 'visible' : 'hidden'}`}>
        <WindowHeader path={'Notes'} text={'Know me'} toggleContentVisibility={toggleContentView}/>
        <div className="notes-window-container">
            <div className="notes-left-panel">
                <div className="notes-show-year">
                    <p>{new Date().getFullYear()}</p>
                </div>
                <GeneratePanel/>
            </div>
            <div className="notes-right-content">
                <h1>Who am i ?</h1>
                <p>Name: Matúš</p>
                <p>Age: 21</p>
                <p></p>
                <br />
                <p>My name is Matúš, an 21 years old guy from Slovakia, and I have big dreams and ambitions. One of my main goals is to work for a company in the <strong>United States</strong>. I am passionate about technology and coding, and I believe that the American tech industry offers exciting opportunities for growth and innovation. I want to be part of cutting-edge projects and make a meaningful impact in the field.</p>
                <br />
                <p>Aside from my professional aspirations, I also have a sweet tooth and a love for confectionery. I dream of opening my own business (Candy Shop). I believe that I can create a successful and memorable brand.</p>
                <br />
                <p>When I'm not focused on my career and entrepreneurial endeavors, I enjoy indulging in my love for <strong>motorcycles</strong>. Speed and adrenaline are my passions, and I currently ride a Yamaha. However, I have my sights set on owning a <strong>BMW M5 / BMW M3 G80</strong> in the future (My dream cars 🌟). The thrill of riding motorcycles fuels my adventurous spirit and adds excitement to my life.</p>
                 <br />
                <p>Overall, I'm Matúš, a driven individual with a vision for success in both my professional and personal endeavors.</p>
                <br />
                <h3>Story Line</h3>
                <p>I have a background in C# programming where I focused on creating window and console applications. However, I eventually found myself drawn to game development, dedicating about 3 years to working with Unity and Unreal Engine. More recently, I transitioned into web development, with a particular focus on React and Node.js."</p>
            </div>
        </div>
    </div>
    </>
  )
}
