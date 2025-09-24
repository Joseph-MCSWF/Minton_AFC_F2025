import React from "react";
import {diceArray} from "../javascript/helper.js";

function Dice({ number }) {
    const diceName = diceArray[number];


    const wrap = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
        height: "200px",
    };

    const icon = {
        display: "block",
        fontSize: "6rem",
        lineHeight: 1,
    };


    return (
        <div style={wrap}>
            <i className={`fa-solid fa-dice-${diceName}`} style={icon} />
        </div>
    );
}

export default Dice;
