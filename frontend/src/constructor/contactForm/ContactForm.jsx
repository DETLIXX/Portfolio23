import React from 'react'
import './ContactForm.scss'
import WindowHeader from '../windowHeader/WindowHeader'
import IconManager from '../IconManager/IconManager';

import apple_img from '../../resources/apple_email.avif'
import { useState } from 'react';

export default function ContactForm() {
    const [isVisible, setisVisible] = useState(true);

    const style = { 
        top: 0,
        left: -100,
    }
    
    const toggleContentView = () => { 
        setisVisible(!isVisible)
    }

    return (
        <>
        <IconManager img={apple_img} title={'Mail'} left={style.left} top={style.top} toggleContentVisibility={toggleContentView}/>
        <div style={style} className={`contact-form window-preset ${isVisible ? 'visible' : 'hidden'}`}>
            <WindowHeader path={'Contact / Draft'} text={'Send Mail'}/>
            <div className="flex items-center justify-center flex-col p-10 gap-5">
                <div className="">
                    <p className='font-normal text-[12px] text-center'>*Because of own privacy, i didnt make contact form, but u can contact me by clicking on Send Mail</p>
                </div>
                <div className="">
                    <a className='bg-custom-Green w-[100px] p-2 rounded-md text-custom-White font-thin text-[12px]' href='mailto:balicky.matus17@gmail.com'>Send Mail</a>
                </div>
            </div>
        </div>
        </>
    );
        
}
