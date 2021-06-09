import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import Login from './components/views/Sign/Login';
import Join from './components/views/Sign/Join';
import Header from './components/views/NavBar/Header';
import Main from './components/views/Landing/Main';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './modules/user';
import Footer from './components/views/Footer/Footer';
import ArtistPage from './pages/ArtistPage';

console.log(`api server : ${process.env.REACT_APP_API_SERVER}`);


function App() {
  const { data, error } = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUser());
  }, [dispatch]);

  if (error) return alert('유저 정보를 가져오지 못했습니다')
  
  return (
    <>
      <Header data={data} />
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/artist/:id" component={ArtistPage} exact />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/join">
        <Join />
      </Route>
      <Footer />
    </>
  );
}

export default App;
