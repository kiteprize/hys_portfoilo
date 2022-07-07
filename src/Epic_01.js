import { useEffect } from 'react';
import {BrowserView, MobileView} from 'react-device-detect'
import './App.css';
import IntroduceLine  from './Introduce';

function App() {
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    window.addEventListener('resize', () => setScreenSize());
  });
  return (
    <div className="App">
      <BrowserView>
        <div className="App-header">
          <IntroduceLine/>
            <div className="Underline"></div>
          개발자 황연상 입니다.
        </div>
      </BrowserView>
      <MobileView>
        <div className="App-header">
          <IntroduceLine/>
            <div className="Underline"></div>
          개발자 황연상 입니다.
        </div>
      </MobileView>
    </div>
  );
}

export default App;
