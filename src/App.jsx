import './App.css'
import Button from './components/ButtonComponent.jsx'
import {useState} from 'react'
import Counter from "./components/CounterComponent.jsx";
import TextInput from "./components/TextInputComponent.jsx";
import RadioGroup from "./components/RadioGroupComponent.jsx";
import Checkbox from "./components/CheckboxComponent.jsx";

function App() {

    //useState hooks voor elk type fruit
    const [bananas, setBananas] = useState(0);
    const [strawberries, setStrawberries] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    //Functies om de hoeveelheid aan te passen
    const increase = (setter, current) => setter(current + 1);
    const decrease = (setter, current) => setter(Math.max(0, current - 1));

    //Functie om alles te resetten
    const reset = () => {
        setBananas(0);
        setStrawberries(0);
        setApples(0);
        setKiwis(0);
    };

    //Opdracht 2: Formulier bouwen
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [postcode, setPostcode] = useState('');
    const [deliveryFrequency, setDeliveryFrequency] = useState('iedere week');
    const [timeSlot, setTimeSlot] = useState('overdag');
    const [comment, setComment] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    //Functie voor het versturen van het formulier
    const handleSubmit = (e) => {
        e.preventDefault(); //Voorkomt het herladen van de pagina
        console.log({
            firstName,
            lastName,
            age,
            postcode,
            deliveryFrequency,
            timeSlot,
            comment,
            termsAccepted,
            bananas,
            strawberries,
            apples,
            kiwis
        });
    };
    return (
        <div className="fruit-container">
            <form onSubmit={handleSubmit} className="order-form">
                <div className="section fruit-section">
                    <h1>Fruitmand bezorgservice</h1>
                    <Counter
                        label="🍌 Bananen"
                        value={bananas}
                        onIncrease={() => setBananas(bananas + 1)}
                        onDecrease={() => setBananas(Math.max(0, bananas - 1))}
                    />
                    <Counter
                        label="🍓 Aardbeien"
                        value={strawberries}
                        onIncrease={() => setStrawberries(strawberries + 1)}
                        onDecrease={() => setStrawberries(Math.max(0, strawberries - 1))}
                    />
                    <Counter
                        label="🍏 Appels"
                        value={apples}
                        onIncrease={() => setApples(apples + 1)}
                        onDecrease={() => setApples(Math.max(0, apples - 1))}
                    />
                    <Counter
                        label="🥝 Kiwi&apos;s"
                        value={kiwis}
                        onIncrease={() => setKiwis(kiwis + 1)}
                        onDecrease={() => setKiwis(Math.max(0, kiwis + 1))}
                    />
                    <Button text="Reset alles" onClick={reset}>Reset alles</Button>
                </div>


                <div className="section order-form-section">
                    <TextInput
                        label="Voornaam:"
                        value={firstName}
                        onChange={setFirstName}
                    />
                    <TextInput
                        label="Achternaam:"
                        value={lastName}
                        onChange={setLastName}
                    />
                    <TextInput
                        label="Leeftijd:"
                        value={age}
                        onChange={setAge}
                        type="number"
                    />
                    <TextInput
                        label="Postcode:"
                        value={postcode}
                        onChange={setPostcode}
                    />

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

                    <RadioGroup
                        label="Tijdvak:"
                        options={[
                            {value: 'overdag', label: 'Overdag'},
                            {value: 's avonds', label: 's Avonds'}
                        ]}
                        selectedValue={timeSlot}
                        onChange={setTimeSlot}
                    />

                    <label>
                        Opmerking:
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </label>

                    <Checkbox
                        label="Ik ga akkoord met de voorwaarden"
                        checked={termsAccepted}
                        onChange={setTermsAccepted}
                    />

                    <Button text="Verzend" type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default App
