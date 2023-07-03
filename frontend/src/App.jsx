import { useEffect, useState } from 'react';
import './App.scss';
import IntroWindow from './constructor/introWindow/IntroWindow';
import Popup from './constructor/popups/Popup';
import DummyLog from './constructor/dummyLog/DummyLog';
import TerminalWindow from './constructor/terminalWindow/TerminalWindow';
import FilesContainer from './constructor/filesContainer/FilesContainer';
import ContactForm from './constructor/contactForm/ContactForm';
import SpotifyWindow from './constructor/spotifyWindow/SpotifyWindow';
import NotesWindow from './constructor/notesWindow/NotesWindow';
import Technologies from './constructor/technologies/Technologies';
import TopBar from './constructor/topBar/TopBar';
import IconBar from './constructor/IconBar/IconBar';

function App() {

  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const [onInput, setOnInput] = useState(false);

  const [cursorStatus, setCursorStatus] = useState('default');

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    // console.log({offsetX: offsetX, offsetY: offsetY});
  }, [offsetX, offsetY]);
  

  const handleMouseDown = (e) => { 
    e.preventDefault();


    // Uložíme počiatočné súradnice myši
    if (!isDragging) {
      setStartX(e.clientX - offsetX);
      setStartY(e.clientY - offsetY);
    }

    // Nastavíme stav, že sa aktuálne ťahá
    setIsDragging(true);
  }

  const handleMouseMove = (e) => { 
    e.preventDefault();
    // console.log(e.target.nodeName);

    if(e.target.nodeName === 'INPUT') { 
      return
    }


    // Ak nedrzime lave return
    if(!isDragging) {
      // console.log(
      //   {
      //     DRAGGING: false,
      //     X: e.clientX, 
      //     Y: e.clientY
      //   });
      return;
    };

    setCursorStatus('grab')
    // Vypocitame rozdiel medzi suradnicami
    const newOffsetX = e.clientX - startX;
    const newOffsetY = e.clientY - startY;
    // Ulozime offset
    setOffsetX(newOffsetX)
    setOffsetY(newOffsetY)

  }

  const handleMouseUp = (e) => {
    e.preventDefault();
    // Zastavíme ťahanie a resetujeme stavy súradníc a offsetu
    setIsDragging(false);
    setCursorStatus('default')
  };
  return (
    <div
     style={{cursor: cursorStatus }}
      className="desktop"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <TopBar/>
      <DummyLog/>
      {/* <IconBar/> */}
      {/* <Popup/> */}
      <div className="desktop-content" style={{ transform: `translate(${offsetX}px, ${offsetY}px)`}}>
        <ContactForm/>
        <IntroWindow/>
        <TerminalWindow/>
        <FilesContainer/>
        {/* <SpotifyWindow/> */}
        <NotesWindow/>
        <Technologies/>
        {/* {window.location.pathname === '/secret' ? console.log('secret') : ""} */}
      </div>
    </div>
  );
};

export default App;
