import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ToDosProvider from './context';
import GlobalStyles from './components/GlobalStyles';
ReactDOM.render(
  <React.StrictMode>
    <ToDosProvider>
      <App />
      <GlobalStyles />
    </ToDosProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
