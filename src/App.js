// import React, { useState } from 'react'
import './App.css';
import ColorBlock from "./components/ColorBlock"

function App() {
  let colors = ['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} key={i} />
    )
  })
  return (
    <div className="App">
      {colorMap}
    </div>
  );
}

export default App;
