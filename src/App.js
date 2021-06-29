import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Board from './components/Board';
import { updateURLParameter } from './components/helpers';
import puzzleImg from './assets/thedash13.gif'
import { Navbar, Container } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      {/* <NavigationBar /> */}
      <div className="contentStyle">
        {/* <h2>M-Dash</h2> */}
        {/* <p>A journey of discoveries.</p> */}
        <div className="titleContainer">
          <h1>M-Dash</h1>
        </div>

        <Board imgUrl={puzzleImg} /> {/* <input value={imgUrl} onChange={handleImageChange} /> */}
      </div>
    </div>
  );
}

export default App;
