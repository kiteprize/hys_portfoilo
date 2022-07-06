import {BrowserView, MobileView} from 'react-device-detect'
import './App.css';
import IntroduceLine  from './Introduce';
function App() {
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
