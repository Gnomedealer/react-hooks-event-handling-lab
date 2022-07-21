import React from "react";
// import Keypad from "./Keypad";
// Code EyesOnMe Component Here

function EyesOnMe (){
    function focusEyes (event) {
        event.preventDefault()
        console.log('Good!')
    }
    function blurEyes (event) {
        console.log('Hey! Eyes on me!')
    }
    return (
        <div>
            <button onFocus={focusEyes} onBlur={blurEyes} > 
                'Good!'
                'Hey! Eyes on me!'
            </button>
            
        </div>
    )
}



export default EyesOnMe