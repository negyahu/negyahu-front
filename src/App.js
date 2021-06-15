import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import Login from './components/views/Sign/Login';
import Join from './components/views/Sign/Join';
import Header from './components/views/NavBar/Header';
import Main from './components/views/Landing/Main';
import Footer from './components/views/Footer/Footer';
import Artist from './components/views/Landing/Artist';
import ApplyArtists from './components/views/Agency/ApplyArtists';
import ApplyArtist from './components/views/Agency/ApplyArtist';

console.log(`api server : ${process.env.REACT_APP_API_SERVER}`);


function App() {
  return (
    <>
      <Header />
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/artist/:id" component={Artist} exact />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/join">
        <Join />
      </Route>
      <Route path="/agency/artists" component={ApplyArtists}/>
      <Route path="/artist/apply" component={ApplyArtist}/>
        
      <Footer />
    </>
  );
}

export default App;
