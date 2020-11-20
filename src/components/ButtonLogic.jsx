import { useContext } from 'react'
import MorseContext from '../context/MorseContext'
import useSound from 'use-sound'
import audioa from './Audio/a.mp3'
import audiob from './Audio/b.mp3'
import audioc from './Audio/c.mp3'
import audiod from './Audio/d.mp3'
import audioe from './Audio/e.mp3'
import audiof from './Audio/f.mp3'
import audiog from './Audio/g.mp3'
import audioh from './Audio/h.mp3'
import audioi from './Audio/i.mp3'
import audioj from './Audio/j.mp3'
import audiok from './Audio/k.mp3'
import audiol from './Audio/l.mp3'
import audiom from './Audio/m.mp3'
import audion from './Audio/n.mp3'
import audioo from './Audio/o.mp3'
import audiop from './Audio/p.mp3'
import audioq from './Audio/q.mp3'
import audior from './Audio/r.mp3'
import audios from './Audio/s.mp3'
import audiot from './Audio/t.mp3'
import audiou from './Audio/u.mp3'
import audiov from './Audio/v.mp3'
import audiow from './Audio/w.mp3'
import audiox from './Audio/x.mp3'
import audioy from './Audio/y.mp3'
import audioz from './Audio/z.mp3'
import audio0 from './Audio/0.mp3'
import audio1 from './Audio/1.mp3'
import audio2 from './Audio/2.mp3'
import audio3 from './Audio/3.mp3'
import audio4 from './Audio/4.mp3'
import audio5 from './Audio/5.mp3'
import audio6 from './Audio/6.mp3'
import audio7 from './Audio/7.mp3'
import audio8 from './Audio/8.mp3'
import audio9 from './Audio/9.mp3'

const ButtonLogic = () => {

  // const [sound] = useSound(audio)

  const { letters, morseCode, setMorseCode, textCode, setTextCode } = useContext(MorseContext);

  // const audio = [audioa,audiob]
  const [sounda] = useSound(audioa)
  const [soundb] = useSound(audiob)
  const [soundc] = useSound(audioc)
  const [soundd] = useSound(audiod)
  const [sounde] = useSound(audioe)
  const [soundf] = useSound(audiof)
  const [soundg] = useSound(audiog)
  const [soundh] = useSound(audioh)
  const [soundi] = useSound(audioi)
  const [soundj] = useSound(audioj)
  const [soundk] = useSound(audiok)
  const [soundl] = useSound(audiol)
  const [soundm] = useSound(audiom)
  const [soundn] = useSound(audion)
  const [soundo] = useSound(audioo)
  const [soundp] = useSound(audiop)
  const [soundq] = useSound(audioq)
  const [soundr] = useSound(audior)
  const [sounds] = useSound(audios)
  const [soundt] = useSound(audiot)
  const [soundu] = useSound(audiou)
  const [soundv] = useSound(audiov)
  const [soundw] = useSound(audiow)
  const [soundx] = useSound(audiox)
  const [soundy] = useSound(audioy)
  const [soundz] = useSound(audioz)
  const [sound0] = useSound(audio0)
  const [sound1] = useSound(audio1)
  const [sound2] = useSound(audio2)
  const [sound3] = useSound(audio3)
  const [sound4] = useSound(audio4)
  const [sound5] = useSound(audio5)
  const [sound6] = useSound(audio6)
  const [sound7] = useSound(audio7)
  const [sound8] = useSound(audio8)
  const [sound9] = useSound(audio9)


  // let chooseSound = `sound${letters[0]}`


  // const chooseSound = (e) => {
  //   switch (letters[e][0]) {
  //     case "a":
  //      return sounda
  //       break;
  //     case "b":
  //      return soundb
  //       break;
  //     case "c":
  //       return soundc
  //       break;

  //     default:
  //       return ""
  //       break;
  //   }}

  const logBtns = (clickedButtonValue) => {
    if (clickedButtonValue[0] === "Space") {
      setTextCode(textCode.concat(" "))
      // setMorseCode(morseCode.concat(" "))

    } else {
      setTextCode(textCode.concat(clickedButtonValue[0]))
      // setMorseCode(morseCode.concat(clickedButtonValue[1]))
    }
  }

 
  return (
    <>
      <span>
        {letters.map((e) => (
          <button key={e} 
          // onClick={() => logBtns(e)}
          
          onClick={e[0] === "a" ? sounda : e[0] === "b" ? soundb : e[0] === "c" ? soundc :
          e[0] === "d" ? soundd : e[0] === "e" ? sounde : e[0] === "f" ? soundf :
            e[0] === "g" ? soundg : e[0] === "h" ? soundh : e[0] === "i" ? soundi :
              e[0] === "j" ? soundj : e[0] === "k" ? soundk : e[0] === "l" ? soundl :
                e[0] === "m" ? soundm : e[0] === "n" ? soundn : e[0] === "o" ? soundo :
                  e[0] === "p" ? soundp : e[0] === "q" ? soundq : e[0] === "r" ? soundr :
                    e[0] === "s" ? sounds : e[0] === "t" ? soundt : e[0] === "u" ? soundu :
                      e[0] === "v" ? soundv : e[0] === "w" ? soundw : e[0] === "x" ? soundx :
                        e[0] === "y" ? soundy : e[0] === "z" ? soundz : e[0] === "0" ? sound0 :
                          e[0] === "1" ? sound1 : e[0] === "2" ? sound2 : e[0] === "3" ? sound3 :
                            e[0] === "4" ? sound4 : e[0] === "5" ? sound5 : e[0] === "6" ? sound6 :
                              e[0] === "7" ? sound7 : e[0] === "8" ? sound8 : e[0] === "9" ? sound9 : ""}
      >
            {e[0]}<br /><br />{e[1]}
          </button>
        ))}
      </span>

    </>
  )
}

export default ButtonLogic