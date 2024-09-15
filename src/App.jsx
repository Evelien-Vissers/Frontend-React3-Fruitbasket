import './App.css'

//Opdracht 1: State - ga aan de slag met het samenstellen van de fruitmand
import {useState} from 'react'

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

            <div>
                <h3>Aardbeien: {strawberries}</h3>
                <button onClick={() => increase(setStrawberries, strawberries)}>+</button>
                <button onClick={() => decrease(setStrawberries, strawberries)}>-</button>
            </div>

            <div>
                <h3>Appels: {apples}</h3>
                <button onClick={() => increase(setApples, apples)}>+</button>
                <button onClick={() => decrease(setApples, apples)}>-</button>
            </div>

            <div>
                <h3>Kiwi&apos s: {kiwis}</h3>
                <button onClick={() => increase(setKiwis, kiwis)}>+</button>
                <button onClick={() => decrease(setKiwis, kiwis)}>-</button>
            </div>

            <div>
                <button onClick={reset}>Reset alles</button>
            </div>
        </div>
    </>
  )
}
export default App
