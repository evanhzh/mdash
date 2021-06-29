import React, { useState } from "react";
import Tile from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants"
import { canSwap, shuffle, swap, isSolved } from "./helpers"
import { Button } from 'react-bootstrap';
import useSound from 'use-sound';
import startSound from '../assets/race-start-1.mp3';
import clickSound from '../assets/button-click-3.mp3';
import playingSound from '../assets/happy-groovy-bass-drums.mp3'
import playingSound2 from '../assets/groovy-2.mp3'
import endSound from '../assets/happy-effect.mp3'

function Board({ imgUrl }) {

  const [startSoundHook] = useSound(startSound, { volume: 0.1 });
  const [clickSoundHook] = useSound(clickSound, { volume: 0.1 });
  const [playingSoundHook] = useSound(playingSound, { volume: 0.1 });
  const [playingSoundHook2] = useSound(playingSound2, { volume: 0.1 });
  const [endSoundHook] = useSound(endSound, { volume: 0.1 });

  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);

  // const [runWonSoundEffect, wonSoundEffect] = useState(false);

  console.log('is started:', isStarted)

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles)
    setTiles(shuffledTiles);
  }

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
      setTiles(swappedTiles)
    }
  }

  const handleTileClick = (index) => {
    clickSoundHook();
    swapTiles(index)
  }

  const handleShuffleClick = () => {
    startSoundHook();
    shuffleTiles()
  }

  const handleStartClick = () => {
    startSoundHook();
    shuffleTiles()
    setIsStarted(true)
    playingSoundHook2();
  }

  const handleWonSound = () => {
    endSoundHook();
  }

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const hasWon = isSolved(tiles)

  return (
    <>
      <div className="boardStyle" >
        <ul style={style} className="board">
          {tiles.map((tile, index) => (
            <Tile
              key={tile}
              index={index}
              imgUrl={imgUrl}
              tile={tile}
              width={pieceWidth}
              height={pieceHeight}
              handleTileClick={handleTileClick}
            />
          ))}
        </ul>
      </div>
      {hasWon && isStarted &&
        <div className="hasWonDiv">
          <span>{handleWonSound()}</span>
          <h2>Congratulations, puzzle solved! 🧠 🎉
          </h2>
          <h2>
            You are now invited to join our Discord channel for your next instructions.
          </h2>
          <br />
          <Button variant="warning" onClick="https://www.instagram.com/myroaringcareers/?hl=en">Join Our Discord Channel</Button>
        </div>}
      {!isStarted ?
        (<Button className="startBtn" variant="success" onClick={() => handleStartClick()}>Start Game</Button>) :
        (<Button className="restartBtn" variant="danger" onClick={() => handleShuffleClick()}>Restart Game</Button>)}

    </>
  );
}


export default Board;
