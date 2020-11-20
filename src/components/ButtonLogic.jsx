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

  const { letters, textCode, setTextCode } = useContext(MorseContext);

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

  let soundOn = [sounda, soundb, soundc, soundd, sounde, soundf,
    soundg, soundh, soundi, soundj, soundk, soundl,
    soundm, soundn, soundo, soundp, soundq, soundr,
    sounds, soundt, soundu, soundv, soundw, soundx,
    soundy, soundz, sound0, sound1, sound2, sound3,
    sound4, sound5, sound6, sound7, sound8, sound9]

  const logBtns = (clickedButtonValue) => {
    if (clickedButtonValue[0] === "Space") {
      setTextCode(textCode.concat(" "))
    } else {
      setTextCode(textCode.concat(clickedButtonValue[0]))
    }
  }

  const twoFunc = (e) => {
    switch (letters[e[2]][0]) {
      case 'a':
        return soundOn[e[2]]()
      case 'b':
        return soundOn[e[2]]()
      case 'c':
        return soundOn[e[2]]()
      case 'd':
        return soundOn[e[2]]()
      case 'e':
        return soundOn[e[2]]()
      case 'f':
        return soundOn[e[2]]()
      case 'g':
        return soundOn[e[2]]()
      case 'h':
        return soundOn[e[2]]()
      case 'i':
        return soundOn[e[2]]()
      case 'j':
        return soundOn[e[2]]()
      case 'k':
        return soundOn[e[2]]()
      case 'l':
        return soundOn[e[2]]()
      case 'm':
        return soundOn[e[2]]()
      case 'n':
        return soundOn[e[2]]()
      case 'o':
        return soundOn[e[2]]()
      case 'p':
        return soundOn[e[2]]()
      case 'q':
        return soundOn[e[2]]()
      case 'r':
        return soundOn[e[2]]()
      case 's':
        return soundOn[e[2]]()
      case 't':
        return soundOn[e[2]]()
      case 'u':
        return soundOn[e[2]]()
      case 'v':
        return soundOn[e[2]]()
      case 'w':
        return soundOn[e[2]]()
      case 'x':
        return soundOn[e[2]]()
      case 'y':
        return soundOn[e[2]]()
      case 'z':
        return soundOn[e[2]]()
      case '1':
        return soundOn[e[2]]()
      case '2':
        return soundOn[e[2]]()
      case '3':
        return soundOn[e[2]]()
      case '4':
        return soundOn[e[2]]()
      case '5':
        return soundOn[e[2]]()
      case '6':
        return soundOn[e[2]]()
      case '7':
        return soundOn[e[2]]()
      case '8':
        return soundOn[e[2]]()
      case '9':
        return soundOn[e[2]]()
    }
  }

  return (
    <>
      <span>
        {letters.map((e) => (
          <button key={e}
            onClick={() => {
              twoFunc(e)
              logBtns(e)
            }}
          >
            {e[0]}<br /><br />{e[1]}
          </button>
        ))}
      </span>
    </>
  )
}
export default ButtonLogic