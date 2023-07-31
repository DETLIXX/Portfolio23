import React from 'react'
import './FilesContainer.scss'
import folder_icon from '../../resources/icon_folder.svg'
import MyWork from '../myWork/MyWork'
import { useState } from 'react'
import { useEffect } from 'react'


export default function FilesContainer() {
    const folders = [
        {
            handleClickName: 'myWork',
            img: folder_icon,
            folderName: "My Work",
            isOpen: false
        },
        {
            handleClickName: 'secrets',
            img: folder_icon,
            folderName: "Secret",
            isOpen: false
        },
    ]

    const FolderGenerate = () => { 
        const [isActive, setisActive] = useState(true);
        console.log(isActive);
      
        return ( 
          folders.map((res, index) => { 
            return ( 
              <div key={index} className="file">
                <img src={folder_icon} alt="folder" onClick={() => setisActive(prev => !prev)} />
                <p>{res.folderName}</p>
              </div>
            )
          })
        )
      }


  return (
    <>
    <MyWork/>
    <div className='files-container'>
        {/* <FolderGenerate/> */}
    </div>
    </>
  )
}