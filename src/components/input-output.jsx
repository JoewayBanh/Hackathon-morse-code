import React, { useState, useEffect, useContext } from 'react';
import MorseContext from '../context/MorseContext'

export default function Input_output() {

    const { letters, morseCode, setMorseCode, textCode, setTextCode } = useContext(MorseContext);
    const allowedText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';
    const allowedMorse = '.- ';

    const handleInputText = (e) => {
        const textInserted = (e.target.value).charAt((e.target.value).length-1)
        if (allowedText.includes((textInserted).toUpperCase())) {
            setTextCode(textCode.concat(textInserted))
        }
    }

    const handleInputMorse = (e) => {
        const textInserted = (e.target.value).charAt((e.target.value).length-1)
        if (allowedMorse.includes((textInserted))) {
            setMorseCode(morseCode.concat(textInserted))
        }
    }

    // setTextCode(textCode.concat(clickedButtonValue[0]))
    // const textToMorseApi = 'http://www.morsecode-api.de/encode?string=daute'

    return (
        <>

            <form className="searchForm">

                {/* Text input */}
                <input className="textInput"
                    type="text"
                    placeholder="Enter text..."
                    value={textCode}
                    // onChange={e => setSearch(e.target.value)} />
                    onChange={handleInputText} />

                {/* Morse input */}
                <input className="morseInput"
                    type="text"
                    placeholder="Enter morse code..."
                    value={morseCode}
                    onChange={handleInputMorse} />

            </form>

        </>
    )
}
