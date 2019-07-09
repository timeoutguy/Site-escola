import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header'
import './global.css';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Header>

      
    </Header>
      <Routes />
    </BrowserRouter>
    </div>
  );
}

export default App;
