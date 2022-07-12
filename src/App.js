import React, {useEffect, useState, useRef} from "react";
import "./App.css"
import useWordGame from "./hooks/useWordGames";

function App() { 
   const {inputRef, 
    textValue, 
    isRunningTime, 
    timeRemaing, 
    startGame, 
    wordValue} = useWordGame()



return (
<main>

  <h1 className="title">Fury</h1>
  <h3 className="subtitle">Speed Typing</h3>
  <textarea ref={inputRef} onChange={textValue} disabled={!isRunningTime} />
  

   <h4 className="timer">TIme Remaning: <span>{timeRemaing}</span></h4>
  <button onClick={startGame} disabled={isRunningTime} >Start</button>
  <h1 className="count">Word count: <span>{wordValue}</span></h1>

</main>
  )
 }

export default App