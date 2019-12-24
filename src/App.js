import React from 'react';
import './App.scss';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';

const App = () => {

  

  return (
    <div className="App">
      <img className="Background-Image"/>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
