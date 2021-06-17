import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from './store';
import Header from './components/Header';
import Routes from './components/Routes';

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <HashRouter>
          <header>
            <Header />
          </header>
          <div className="app-sub-container">
            <Routes />
          </div>
        </HashRouter>
      </div>
    </Provider>
  );
};

export default App;
