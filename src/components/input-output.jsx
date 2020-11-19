import Axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function Input_output () {

    // const allowedText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 '
    // const allowedMorse = '.- '

    const textToMorseApi = 'http://www.morsecode-api.de/encode?string=daute'

    const [morseCode, setMorseCode] = useState('')
    const [textCode, setTextCode] = useState('')

    const getMorse = () => {
        // Get the API data
        // Axios.get(textToMorseApi)
        // .then(e => (console.log(e.data)))
        // .then(console.log(e => {e}))
        // .then(element => { setMorseCode(element.data.results) })
    }


    // useEffect(() => { getMorse() }, [textCode]);

    return (
        <>
       
            <form className="searchForm" onSubmit={(e) => getMorse(e)}>

                {/* Text input */}
                <input className="textInput"
                    type="text"
                    placeholder="Enter text..."
                    value={textCode}
                    onChange={e => setTextCode(e.target.value)} />

                {/* Morse input */}
                <input className="morseInput"
                    type="text"
                    placeholder="Enter morse code..."
                    value={morseCode}
                    onChange={e => setMorseCode(e.target.value)} />


            </form>

        </>
    )
}
