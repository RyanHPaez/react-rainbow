//Bring in all exports by importing them here
import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';
import './App.css';

function App() {
  let [colors, setColors] = useState([
    'violet', 'blue', 
    'lightblue', 'green', 
    'greenyellow', 'yellow', 
    'orange', 'red'
  ])

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color} />
    )
  })

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div className="App">
      <h1> Add Colors of the Rainbow with REACT</h1>
      <div className="colorBlock">
        {colorMap}
      </div>
      <ColorForm addColor={addColor} />
      <h4>Nice! What color are you going to type next?</h4>
    </div>
  );
}

export default App;



// import { useState } from 'react'

// function Form(){
//     let [ color, setColor ] = useState('blue')
//     return (
//         <div style={{backgroundColor: color}} >
//             <select value={color} onChange ={(e) => {setColor(e.target.value)}}    >
//                 <option>blue</option>
//                 <option>red</option>
//                 <option>green</option>
//                 <option>purple</option>
//             </select>
//         </div>
//     )
// }