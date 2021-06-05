import React from 'react';
import { HashRouter } from 'react-router-dom';

import './App.scss';
import Routes from './components/Routes';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes />
      </HashRouter>
    </div>
  );
};

export default App;
