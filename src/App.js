import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Routes from './components/Routes';

function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_URL_BASENAME}>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;