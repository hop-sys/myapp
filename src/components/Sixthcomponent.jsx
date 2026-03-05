import { useState } from "react";

const Sixthcomponent =()=>{
    const[weight, setNumber]=useState(50);
    return(
        <div className="Sixthcomponent">
            <h1>Welcome to my sixth component</h1>
            <h2>Current weight is: {weight} kgs</h2>

            <button onClick={ () => setNumber(55)}>Click to update weight</button>
        </div>
    )
}

export default Sixthcomponent;
// Create a Sixthcomponent.jsx. Inside of it, have the useState with the initial value of weight being 50Kgs, have a button to update the weight to 55kgs when the button is clicked. Render the component on App.js.
// Research on routing in Reactjs.