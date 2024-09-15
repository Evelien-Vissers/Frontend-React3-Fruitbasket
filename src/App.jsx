import './App.css'

//Opdracht 1: State - ga aan de slag met het samenstellen van de fruitmand
import {useState} from 'react'

function App() {
    //useState hooks voor elk type fruit
    const [bananas, setBananas] = useState(0);
    const [strawberries, setStrawberries] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    //Opdracht 2: Formulier bouwen
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [postcode, setPostcode] = useState('');
    const [deliveryFrequency, setDeliveryFrequency] = useState('iedere week');
    const [timeSlot, setTimeSlot] = useState('overdag');
    const [comment, setComment] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

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

    //Functie voor het versturen van het formulier
    const handleSubmit = (e) => {
        e.preventDefault(); //Voorkomt het herladen van de pagina
        //
    }

    return (
        <form onSubmit={handleSubmit} className="order-form">
    <>
        <div className="fruit-container">
        <h1>Fruitmand bezorgservice</h1>
            <div className="fruit-box">
            <h3>🍌 Bananen: {bananas}</h3>
            <button onClick={() => increase(setBananas, bananas)}>+</button>
            <button onClick={() => decrease(setBananas, bananas)}>-</button>
            </div>

            <div className="fruit-box">
                <h3>🍓 Aardbeien: {strawberries}</h3>
                <button onClick={() => increase(setStrawberries, strawberries)}>+</button>
                <button onClick={() => decrease(setStrawberries, strawberries)}>-</button>
            </div>

            <div className="fruit-box">
                <h3>🍏 Appels: {apples}</h3>
                <button onClick={() => increase(setApples, apples)}>+</button>
                <button onClick={() => decrease(setApples, apples)}>-</button>
            </div>

            <div className="fruit-box">
                <h3>🥝 Kiwi&apos;s: {kiwis}</h3>
                <button onClick={() => increase(setKiwis, kiwis)}>+</button>
                <button onClick={() => decrease(setKiwis, kiwis)}>-</button>
            </div>

            <div>
                <button className="reset-button" onClick={reset}>Reset alles</button>
            </div>

            <label>
                Voornaam:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
            </label>

            <label>
                Achternaam:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
            </label>

            <label>
                Leeftijd:
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    />
            </label>

            <label>
                Postcode:
                <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    />
            </label>

            <label>
                Bezorgfrequentie:
                <select
                    value={deliveryFrequency}
                    onChange={(e) => setDeliveryFrequency(e.target.value)}
                    >
                    <option value="iedere week">Iedere week</option>
                    <option value="om de week">Om de week</option>
                    <option value="iedere maand">Iedere maand</option>
                </select>
            </label>

            <fieldset>
                <legend>Tijdvak:</legend>
                <label>
                    <input
                        type="radio"
                        value="overdag"
                        checked={timeSlot === 'overdag'}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        />
                    Overdag
                </label>
                <label>
                    <input
                        type="radio"
                        value=" 's avonds"
                        checked={timeSlot === 's avonds'}
                        onChange={(e) => setTimeSlot(e.target.value)}
                    />
                    &apos;s Avonds
                </label>
            </fieldset>

            <label>
                Opmerking:
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
            />
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.value)}
                    defaultChecked={false}
                />
                Ik ga akkoord met de voorwaarden
            </label>

            <button type="submit">Verzend</button>
        </div>
    </>
    </form>
  )
}
export default App
