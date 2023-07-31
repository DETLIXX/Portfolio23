import React, { useState } from 'react'
import './Technologies.scss'
import WindowHeader from '../windowHeader/WindowHeader'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import vscode_img from '../../resources/vscode.png' 


import IconManager from '../IconManager/IconManager';

export default function Technologies() {

  const codeString = `import React from 'react';
  const Knowladge = () => {
    const knowladgeList = [
      'React',
      'NextJS',
      'Node.js',
      'MongoDB',
      'Express.js',
      'HTML',
      'CSS',
      'JavaScript',
      'REST API',
      'Git',
      'Figma',
      'Photoshop',
      'Blender'
    ];
  
    return (
      <div className="my-knowladge">
        <h1>My Knowladge</h1>
        <ul>
          {knowladgeList.map((knowladge, index) => (
            <p key={index}>{knowladge}</p>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Knowladge;`;

  const folders = [
    {
      mainFolder: 'frontend',
      subFolder: {
        node_modules: 'node_modules',
        public: "public",
        src: 'src',
      },
      gitIgnore: '.gitignore',
      packageL: 'package-lock.json',
      package: 'package.json'
    }
  ]

  const GenerateFolders = () => { 
    return ( 
      folders.map((res, index) => { 
        return ( 
              `<div className="tech-folder">
                  <p>{res}</p>
              </div>`
        )
      })
    )
  }

  const syntaxStyle = {
      fontSize: '10px',
      margin: 0
  };
      
  const [isVisible, setisVisible] = useState(true);

  const style = { 
      top: 1000,
      left: -100,
  }
  
  const toggleContentView = () => { 
      setisVisible(!isVisible)
  }


return (
    <>
      <IconManager img={vscode_img} title={'VS Code'} left={style.left} top={style.top} toggleContentVisibility={toggleContentView}/>
      <div style={style}  className={`tech-container window-preset black-window ${isVisible ? 'visible' : 'hidden'}`}>
          <WindowHeader path={'Visual Studio'} text={'Technologies Knowledge'}/>
          <div className="tech-content">
              <div className="tech-sides tech-left">
              <SyntaxHighlighter  language="javascript" customStyle={syntaxStyle}>
                  {codeString}
              </SyntaxHighlighter>

              </div>
              {/* <div className="tech-sides tech-right">
              </div> */}
          </div>
      </div>

    </>
  )
}
