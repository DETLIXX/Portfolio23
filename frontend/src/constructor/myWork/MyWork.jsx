import React, { useState } from 'react'
import './MyWork.scss'
import WindowHeader from '../windowHeader/WindowHeader';

import Gearbox from '../../resources/GEARBOX-blue.png'
import thiss from '../../resources/thiss.png'
import freelancer from '../../resources/programming.png'
import magnifier from '../../resources/magnifier.png'


export default function MyWork() {
  const jobs = [
    {
      jobName: 'Freelancer',
      workTime: '2019 - 2021',
      img: freelancer,
      jobDescripion: "Worked as freelancer for few local companies"
    },
    {
      jobName: 'GearBox s.r.o',
      workTime: '2021 - 2022',
      img: Gearbox,
      jobDescripion: "I created a Car Repair site for them, where their customers were able to register, manage their reservations, and check their history."
    },
    {
      jobName: 'thiss s.r.o',
      workTime: '2022 - 2023',
      img: thiss,
      jobDescripion: "Was working here as a Full Stack Web Developer, I was am involved in large-scale projects",
    },
    {
      jobName: 'Looking for new job',
      workTime: 'Currently',
      img: magnifier,
      jobDescripion: "Currently looking for new job",
    }
  ]


  const GenerateJobs = () => { 
    return ( 
      jobs.map((res, index) => { 
        const isLastJob = index === jobs.length - 1;

        return ( 
          <>
            <div key={index} className="my-work-container">
              <div className="my-work-img">
                <img src={res.img} alt='Job Image' />
              </div>
              <div className="my-work-text">
                <h3>{res.jobName}</h3>
                <p><strong>{res.workTime}</strong></p>
                <p>{res.jobDescripion}</p>
              </div>
            </div>

            {!isLastJob && (
              <svg className="line" height="100%" width="100%" viewBox="0 0 100 10">
                <line x1="50" y1="0" x2="50" y2="50" className="connector" />
              </svg>
            )}
          </>
        )
      })
    )
  }


    return (
      <div className="my-work window-preset">
        <WindowHeader path={'Expiriences'} text={'Jobs'}/>
        <div className="flex items-center justify-center py-2">
          <p className='text-[12px] font-thin'>
            *Most of my work cant be public because of contracts
          </p>
        </div>
        <div className="my-work-roadmap">
          <GenerateJobs/>
        </div>
      </div>
    );
};