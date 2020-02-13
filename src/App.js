import React from 'react';
import Header from './templates/header';
import Main from './templates/main';
import Footer from './templates/footer';
import './App.css';

const App = () => {
  return (
    <div className="wrapper">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;