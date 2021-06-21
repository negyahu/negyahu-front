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
import Landing from './components/views/Admin/Landing';

console.log(`api server : ${process.env.REACT_APP_API_SERVER}`);


function App() {
  return (
    <>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/join" component={Join} />
      <Route path="/agency/:agencyId/artists" component={ApplyArtists}/>
      <Route path="/agency/:agencyId/artist/" component={ApplyArtist}/>
      <Route path="/agency/:agencyId/artist/:artistId" component={ApplyArtist}/>
      <Route path="/feed/agency/:agencyId/artist/:artistId" component={Artist} exact />
      <Route path="/admin" component={Landing}/>
      <Footer />
    </>
  );
}

export default App;
