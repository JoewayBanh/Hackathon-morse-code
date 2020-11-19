import React, { useState, useEffect, useContext } from 'react';
import MorseContext from '../context/MorseContext'

export default function Input_output() {

    const { letters, morseCode, setMorseCode, textCode, setTextCode } = useContext(MorseContext);

    const handleInputText = (e) => {
        setTextCode(e.target.value.replace(/[^a-zA-Z0-9\s]/,''))
    }

    const handleInputMorse = (e) => {
        setMorseCode(e.target.value.replace(/[^.-\s]/,''))
    }

    return (
        <>

            <form className="searchForm">

                {/* Text input */}
                <input className="textInput"
                    spellcheck="false"
                    type="text"
                    placeholder="Enter text..."
                    value={textCode}
                    onChange={handleInputText}
                />

                {/* Morse input */}
                <input className="morseInput"
                    spellcheck="false"
                    type="text"
                    placeholder="Enter morse code..."
                    value={morseCode}
                    onChange={handleInputMorse}
                />

            </form>

        </>
    )
}
