import React from 'react';
import ReactDOM from 'react-dom';
import Epic01 from './Epic_01';
import Epic02 from './Epic_02';
import Epic03 from './Epic_03';
// import Epic04 from './Epic_04';

ReactDOM.render(
  <React.StrictMode>
    <Epic01 />
    <Epic02 />
    <Epic03 />
    {/* <Epic04 /> */}
  </React.StrictMode>
  ,document.getElementById('root')
);
