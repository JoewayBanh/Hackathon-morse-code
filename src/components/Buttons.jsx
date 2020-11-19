import ButtonLogic from './ButtonLogic'
import { useState, useContext } from 'react'
import MorseContext from '../context/MorseContext'


const ShowButtons = (  ) => {
    // const [search, setSearch] = useState([]);
    const {letters, morseCode, setMorseCode, textCode, setTextCode} = useContext(MorseContext);

    // const getValueFromChild = (valueFromChild) => {
    //     setSearch(valueFromChild)
    //     console.log("THIS IS SEARCH: " + search);
    // }

    return (
        <>
            {/* {letters.map((e) => (
                <ButtonLogic key={e} val={e}  />
            ))} */}
        </>
    )
}

export default ShowButtons