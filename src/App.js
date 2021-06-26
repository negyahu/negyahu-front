import React from 'react';
import { Route } from 'react-router-dom';
import jwt from 'jwt-decode';

import './App.scss';
import Login from './components/views/Sign/Login';
import Join from './components/views/Sign/Join';
import Header from './components/views/NavBar/Header';
import Main from './components/views/Landing/Main';
import Footer from './components/views/Footer/Footer';
import Artist from './components/views/Landing/Artist';
import ApplyArtist from './components/views/Agency/ApplyArtist';
import Landing from './components/views/Admin/Landing';
import AgencyLanding from './components/views/Agency/AgencyLanding';
import { useEffect } from 'react';
import { getCookie, getCookieValue } from './utils/cookies';
import { useDispatch } from 'react-redux';
import { KEEP_USER_INFO } from './_actions/keepInformation';
import Payment from './components/views/Landing/Payment';
import Subscribe from './components/views/Common/Subscribe';
import CreateOfficial from './components/views/Agency/CreateOfficial';

console.log(`api server : ${process.env.REACT_APP_API_SERVER}`);


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getCookie("user")) {
      dispatch({ type: KEEP_USER_INFO, data: jwt(getCookieValue("user")) })
    }
  }, [dispatch])

  return (
    <>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/join" component={Join} />
      <Route path="/agency" exact component={AgencyLanding} />
      
      <Route path="/agency/:agencyId/artist/" exact component={ApplyArtist}/>
      <Route path="/agency/:agencyId/artist/:artistId" component={ApplyArtist}/>
      <Route path="/agency/official" component={CreateOfficial}/>

      <Route path="/feed/agency/:agencyId/artist/:artistId" component={Artist} exact />
      <Route path="/subscribe/agency/:agencyId/artist/:artistId" component={Subscribe}/>
      <Route path="/admin" component={Landing}/>
      <Route path="/payment" component={Payment}/>
      <Footer />
    </>
  );
}

export default App;
