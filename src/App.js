<<<<<<< HEAD
import './App.css';
import React, { useState, useContext } from 'react';
import Input_output from './components/input-output';
import ButtonLogic from './components/ButtonLogic'
import MorseContext from './context/MorseContext'


const App = () => {

  const letters = [
    ["a", ".-"], ["b", "-..."], ["c", "-.-."], ["d", "-.."],
    ["e", "."], ["f", "..-."], ["g", "--."], ["h", "...."],
    ["i", ".."], ["j", ".---"], ["k", "-.-"], ["l", ".-.."],
    ["m", "--"], ["n", "-."], ["o", "---"], ["p", ".--."],
    ["q", "--.-"], ["r", ".-."], ["s", "..."], ["t", "-"],
    ["u", "..-"], ["v", "...-"], ["w", ".--"], ["x", "-..-"],
    ["y", "-.--"], ["z", "--.."], ["1", ".----"], ["2", "..---"],
    ["3", "...--"], ["4", "....-"], ["5", "....."], ["6", "-...."],
    ["7", "--..."], ["8", "---.."], ["9", "----."], ["0", "-----"], 
    ["Space", "/"],["Separate letters","\\"]
  ]

  const [morseCode, setMorseCode] = useState('')
  const [textCode, setTextCode] = useState('')
=======
// import './components/StyleContent.css';
import Content from './components/Content';
import Btn from './components/Btn';
import './components/StyleBtn.css';
>>>>>>> 669b308d7b3b72030fc3510cbd87a01cc7d38eb8

  return (
    <div className="App">
<<<<<<< HEAD
    

      <MorseContext.Provider value={{ letters, morseCode, setMorseCode, textCode, setTextCode }}>
        <Input_output />
        <ButtonLogic />
      </MorseContext.Provider>

=======
      {/* <Content /> */}
      <Btn />
>>>>>>> 669b308d7b3b72030fc3510cbd87a01cc7d38eb8
    </div>
  );
}

export default App;
