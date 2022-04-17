import React, { useState } from "react";

function ColorForm(props) {
    let [input, setInput] = useState('Test')

    const handleSubmit = (e) => {
        //we still want to eliminate default behavior of our form submittal
        e.preventDefault()
        //addColor, the function we built, should be available with props
        props.addColor(input)
        //e.target.value 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="color" type="text"
                    onChange={(e) => setInput(e.target.value)} required />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm