import logo from './logo.svg';
import {BrowserView, MobileView} from 'react-device-detect'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserView>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            시발
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React!
          </a>
        </header>
      </BrowserView>
      <MobileView>

      </MobileView>
    </div>
  );
}

export default App;
