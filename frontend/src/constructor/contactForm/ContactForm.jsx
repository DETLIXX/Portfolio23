import React from 'react'
import './ContactForm.scss'
import WindowHeader from '../windowHeader/WindowHeader'
import IconManager from '../IconManager/IconManager';

import apple_img from '../../resources/apple_email.avif'
import { useState } from 'react';

export default function ContactForm() {
    const [isVisible, setisVisible] = useState(false);

    const style = { 
        top: 900,
        left: 100,
    }
    
    const toggleContentView = () => { 
        setisVisible(!isVisible)
    }
    
    const allowInput = (e) => {
        e.stopPropagation();
    }

    return (
        <>
        <IconManager img={apple_img} title={'Email'} left={style.left} top={style.top} toggleContentVisibility={toggleContentView}/>
        <div style={style} className={`contact-form window-preset ${isVisible ? 'visible' : 'hidden'}`}>
            <WindowHeader path={'Contact / Draft'} text={'Send Mail'}/>
            <div className={`contact-form-container`}>
                <form className='contact-form-inputs' action="">
                    <input type="text" placeholder='Name:' onMouseDown={allowInput} />
                    <input type="email" placeholder='Your email:' onMouseDown={allowInput}/>
                    <input type="text" placeholder='Subject:' onMouseDown={allowInput}/>
                    <textarea name="content" id="" cols="30" placeholder='' onMouseDown={allowInput} spellCheck={false} rows="10"></textarea>
                </form>
                <div className="contact-send">
                    <button><i className="fa-solid fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
        </>
    );
        
}
