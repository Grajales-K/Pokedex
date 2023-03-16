import React from "react";


const Logo = (props)  => {
return(
<header className="div-image">
    <h1>Welcome to {props.appName} Pokedex</h1>
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" onClick={props.handleclick} alt="pokemon Clefair"></img>
</header>
);
};

export default Logo;
