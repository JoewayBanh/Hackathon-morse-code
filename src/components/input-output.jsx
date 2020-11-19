import Axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function Input_output () {

    const [morseCode, setMorseCode] = useState('')
    const [textCode, setTextCode] = useState('')

    const getMorse = () => {
    //     // Get the API data
    //     Axios.get(urlToSearch)
    //     .then(console.log(`Getting url: ${urlToSearch}`))
    //     .then(element => { setMorseCode(element.data.results) })
    }

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