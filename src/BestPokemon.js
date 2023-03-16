import React from "react";

const BestPokemon = (props) => {
return(
    <div>
    <p className="text">
        My favorite Pokemon is Clefairy
    </p>
    <ul>
        {props.abilities.map((ability) => (
        <li key={ability}>{ability}</li>
        ))}
    </ul>
    </div>
);
};

export default BestPokemon;