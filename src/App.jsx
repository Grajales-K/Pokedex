import React from "react";
import ReactDOM from "react-dom";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";


function App() {
  const logWhenClicked = () => {
    console.log("hello ladies");
};
  return(
    <div className="final-div">
      <Logo handleclick = {logWhenClicked} appName = "Karla's"/>
      <BestPokemon abilities = {["Anticipation", "Adaptability", "Run-Away", "flying", "dance"]}/>
      <CaughtPokemon date = {new Date().toLocaleDateString()} />
    </div>
  );
}


ReactDOM.render(<App />, document.querySelector("#root"));
export default App;

