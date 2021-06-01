import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header';
import Main from './components/main/Main';


function App() {
  return (
    <>
      <Header />
      <Route exact path="/">
        <Main />
      </Route>
    </>
  );
}

export default App;
