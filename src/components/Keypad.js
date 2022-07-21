import React from "react";
// import EyesOnMe from "./EyesOnMe";
// Code Keypad Component Here

function Keypad (){
    function handleChange(event){
        event.preventDefault()
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={handleChange}>
            
            </input>
        </div>
    )
}

export default Keypad;