import React from 'react';

import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
