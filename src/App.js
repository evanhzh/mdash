import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Board from './components/Board';
import puzzleImg from './assets/thedash13.gif'
import { Image } from 'react-bootstrap'
import mdashlogo from "./assets/mdashlogo.png";

// import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      {/* <NavigationBar /> */}
      <div className="contentStyle">
        {/* <h2>M-Dash</h2> */}
        {/* <p>A journey of discoveries.</p> */}
        <div className="titleContainer">
          <Image src={mdashlogo} className="logoStyle" fluid />
          <div className="subtitleContainer">
            <h1>Dashers!  <br />This is your next challenge.</h1>
            <p>Start the DASH now and unscramble the puzzle below to reveal the next step of your M-Dash journey.
              <br />
              All the best, Dashers!
            </p>

          </div>

        </div>

        <Board imgUrl={puzzleImg} /> {/* <input value={imgUrl} onChange={handleImageChange} /> */}
      </div>
    </div>
  );
}

export default App;
