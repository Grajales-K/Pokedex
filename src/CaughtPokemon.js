import React, { useState } from "react";

const list = ["karla", "andriana"];

const CaughtPokemon = (props) => {
    const [caught, setCaught] = useState([]);
    const catchPokemon = () => {
        let randomList =  Math.floor(Math.random() * list);
        let pokitem = list[randomList];
        return setCaught(caught.concat(pokitem));
    };
    return (
        <div>
            <p>Caught {caught.length} Pokemon on {props.date}</p>
            <ul>{caught.map((items, index) => {
                return <li key={index}>{items}</li>;
            })}
            </ul>
            <button onClick={catchPokemon}>Catch</button>
        </div>
        );
};

export default CaughtPokemon;

// Math.floor(Math.random() * max)