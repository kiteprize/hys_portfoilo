import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Epic01 from './Epic_01';
import Epic02 from './Epic_02';
import Epic03 from './Epic_03';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Epic01 />
    <Epic02 />
    <StyledEngineProvider injectFirst>
      <Epic03 />
    </StyledEngineProvider>
  </React.StrictMode>
);
