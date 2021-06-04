import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import Login from './components/views/LoginPage/Login';
import Join from './components/views/RegisterPage/Join';
import Header from './components/views/NavBar/Header';
import Main from './components/views/LandingPage/Main';

function getUserInformation() {
  // 앱구동시 유저정보 모두 불러오기
  return []
}

function getArtists() {
  // 앱 구동시 등록된 아티스트정보(소속사) 모두 불러오기
  return []
}

function App() {
  useEffect(getUserInformation, []);
  useEffect(getArtists, []);
  
  return (
    <>
      <Header />
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/join">
        <Join />
      </Route>
    </>
  );
}

export default App;
