import {  useContext } from 'react'
import MorseContext from '../context/MorseContext'
import useSound from 'use-sound'
import a from './a.mp3'

const ButtonLogic = () => {

  const [play] = useSound(a);
  

  // const soundbtn = () => {
  //   const [play] = useSound(a);
  //   return <button onClick={play}>Boop!</button>;
  // };
  
  const { letters, morseCode, setMorseCode, textCode, setTextCode } = useContext(MorseContext);

  const logBtns = (clickedButtonValue) => {
    if (clickedButtonValue[0] === "Space") {
      setTextCode(textCode.concat(" "))
      // setMorseCode(morseCode.concat("/"))
    } 
    else if(clickedButtonValue[0] === "Separate letters") {
      // setTextCode(textCode.concat(""))
      // setMorseCode(morseCode.concat("\\"))
    }
      else {
      setTextCode(textCode.concat(clickedButtonValue[0]))
      // setMorseCode(morseCode.concat(clickedButtonValue[1]))
    }
  }

  return (
    <>
    <button onClick={play}>Boop!</button>
      <span>
        {letters.map((e) => (
          <button onClick={() => logBtns(e)} >
            {e[0]}<br /><br />{e[1]}
          </button>
        ))}
      </span>

      
      {/* < div >
        <button onClick={start}>Play</button>
      </div > */}
    </>
  )
}

export default ButtonLogic