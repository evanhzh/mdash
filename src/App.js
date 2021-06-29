import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Board from './components/Board';
import puzzleImg from './assets/thedash13.gif'
import { Image } from 'react-bootstrap'
import mdashlogo from "./assets/mdash-logo.jpg";

// import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      {/* <NavigationBar /> */}
      <div className="contentStyle">
        {/* <h2>M-Dash</h2> */}
        {/* <p>A journey of discoveries.</p> */}
        <div className="titleContainer">
          <h1>M-Dash</h1>
          <Image src={mdashlogo} className="logoStyle" fluid />
          <div className="subtitleContainer">
            <p>M-Dash is an intensive one-of-its-kind virtual race. <br /> Take control of
              your journey and decide on your #challengeofchoice!<br /> Dash forward with M-Dash!
            </p>
          </div>

        </div>

        <Board imgUrl={puzzleImg} /> {/* <input value={imgUrl} onChange={handleImageChange} /> */}
      </div>
    </div>
  );
}

export default App;
