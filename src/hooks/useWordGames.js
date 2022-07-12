import { useState, useEffect, useRef } from "react";


function  useWordGame() {
     const start_game = 10
  const [text, setText] = useState("")
  const [timeRemaing, setTimeRemaining] = useState(start_game)
  const [isRunningTime, setIsRunningTime] = useState(false)
  const [wordValue, setWordValue] = useState(0)
  const inputRef = useRef(null)

  function textValue(e) {
    const {value} = e.target
    setText(value)
  }

  function wordCount(text) {
    const wordArr = text.trim().split(" ")
    return wordArr.filter(word => word !== "").length
  }

  function startGame() {
    setIsRunningTime(true)
  setWordValue(0)
  setTimeRemaining(start_game)
  inputRef.current.disabled = false
  inputRef.current.focus()
      setText("")
  }

  function endGame() {
setIsRunningTime(false)
setWordValue(wordCount(text))
  }

  useEffect(()=> {
    if(isRunningTime && timeRemaing > 0){
      
      setTimeout(()=> {
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    } else if (timeRemaing === 0){
endGame()
    }

  }, [isRunningTime, timeRemaing])

  return {inputRef, textValue, isRunningTime, timeRemaing, startGame, wordValue}
}

export default useWordGame

