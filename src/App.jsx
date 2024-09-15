import './App.css'
import React, {useSate, useState} from 'react'

function App() {
    //useState hooks voor elk type fruit
    const [bananas, setBananas] = useState(0);
    const [strawberries, setStrawberries] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    //Functies om de hoeveelheid aan te passen
    const increase = (setter, current) => setter(current + 1);
    const decrease = (setter, current) => setter(Math.max(0, current -1));

    //Functie om alles te resetten
    const reset = () => {
        setBananas(0);
        setStrawberries(0);
        setApples(0);
        setKiwis(0);
    };

    return (
    <>
        <div>
        <h1>Fruitmand bezorgservice</h1>
            <div>
            <h3>Bananen: {bananas}</h3>
            <button onClick={() => increase(setBananas, bananas)}>+</button>
            <button onClick={() => decrease(setBananas, bananas)}>-</button>
            </div>
        </div>
    </>
  )
}

export default App
