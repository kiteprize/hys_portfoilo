import logo from './logo.svg';
import {BrowserView, MobileView} from 'react-device-detect'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserView>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            help me
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React!
          </a>
        </BrowserView>
        <MobileView>

        </MobileView>
      </header>
    </div>
  );
}

export default App;
