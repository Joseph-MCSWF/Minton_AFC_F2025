import React, { useState } from "react";
import Dice from "./components/Dice.jsx";
import {getRandomInt} from "./javascript/helper.js";

function App() {
    const [diceNumber, setDiceNumber] = useState(0);

    const rollDice = () => setDiceNumber(getRandomInt());


    const rollerStyle = {
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    };

    const buttonStyles = {
        marginTop: "24px",
        padding: "10px 20px",
        fontSize: "18px",
        cursor: "pointer",
    };

    return (
        <div style={rollerStyle}>
            <Dice number={diceNumber} />
            <button style={buttonStyles} onClick={rollDice}>Roll Dice</button>
        </div>
    );
}

export default App;
