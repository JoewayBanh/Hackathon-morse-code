import { useState, useContext } from 'react'
import Input_output from './input-output'
import MorseContext from '../context/MorseContext'

const ButtonLogic = () => {

  const { letters, morseCode, setMorseCode, textCode, setTextCode } = useContext(MorseContext);

  const logBtns = (clickedButtonValue) => {
    setTextCode(textCode.concat(clickedButtonValue[0]))
    setMorseCode(morseCode.concat(clickedButtonValue[1]))
    // console.log("THIS IS CLICKEDBUTTONCVALUE " + clickedButtonValue);
    // console.log("THIS IS morseCode: " + morseCode);

    // console.log(textCode);
    // console.log(`This is alpha: ${val[0]}`);
    // console.log(`This is morse: ${val[1]}`);
  }
  
  return (
    <>
      <span>
        {letters.map((e) => (
          <button onClick={() => logBtns(e)} >
            {e[0]}<br /><br />{e[1]}
          </button>
        ))}
      </span>
    </>
  )
}

export default ButtonLogic