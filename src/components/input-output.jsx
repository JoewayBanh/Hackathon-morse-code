import React, { useEffect, useContext } from 'react';
import MorseContext from '../context/MorseContext'

export default function Input_output() {

    // This is Context variables defined in App.js
        const { letters, morseCode, setMorseCode, textCode, setTextCode } = useContext(MorseContext);

    // This will handle the alphanumeric box onChange
        const handleInputText = (e) => {
            setTextCode(e.target.value.replace(/[^a-zA-Z0-9\s]/, ''))
        }

    // When textCode is modified, then it is translated into morse 
        useEffect(() => {

            // If the user cleans the textInput box, then morseCode is also cleared
                if (textCode.length === 0) {setMorseCode('')}

            // This will translate all textCode into morse
            // I bet it can be simplified
                let translation = ''
                for (let i = 0; i < textCode.length; i++) {

                    // If user inserts a space, then 3 spaces are inserted
                    // in morseCode, as a word division
                    if (textCode[i] === ' ') {
                        translation = translation+'   '
                    }

                    for (let j = 0; j < letters.length; j++) {
                        if (letters[j].includes(textCode[i])) {
                            translation = translation+(letters[j][1]+' ')
                        }
                    }
                setMorseCode(translation)
                }
                }, [textCode]);


    return (
        <>
            {/* Text input */}
            <input className="textInput"
                spellCheck="false"
                type="text"
                placeholder="Enter text..."
                value={textCode}
                onChange={handleInputText}
            />

            {/* Morse box */}
            <input className="morseInput"
                spellCheck="false"
                type="text"
                value={morseCode}
            />
        </>
    )
}