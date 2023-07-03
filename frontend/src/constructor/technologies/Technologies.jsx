import React, { useState } from 'react'
import './Technologies.scss'
import WindowHeader from '../windowHeader/WindowHeader'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import IconManager from '../IconManager/IconManager';

export default function Technologies() {

  const codeString = `import React from 'react';
  const Technologies = () => {
    const technologies = [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'HTML',
      'CSS',
      'JavaScript',
      'RESTful APIs',
      'Git',
      'Authentication and Authorization',
      'Database design and management',
      'Deployment and hosting',
    ];
  
    return (
      <div className="my-technologies">
        <h1>My Technologies</h1>
        <ul>
          {technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Technologies;`;

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
          <>
              <div className="tech-folder">
                  <p>{res}</p>
              </div>
          </>
        )
      })
    )
  }

  const syntaxStyle = {
      fontSize: '10px',
      margin: 0
  };
      


return (
    <>

      <div className="tech-container window-preset black-window">
          <WindowHeader path={'Visual Studio'} text={'Technologies Knowledge'}/>
          <div className="tech-content">
              <div className="tech-sides tech-left">
              <SyntaxHighlighter  language="javascript" customStyle={syntaxStyle}>
                  {codeString}
              </SyntaxHighlighter>

              </div>
              <div className="tech-sides tech-right">
              </div>
          </div>
      </div>

    </>
  )
}
