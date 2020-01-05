import React, {useState, useEffect, useContext} from 'react'
import './App.css'
import Header from './components/Header/Header'
import Boxes from './components/Boxes/Boxes'
import {DATA_BOXES} from './api/api'
import BoxContext from "./context/BoxesContext";

function App() {
  const {boxes, setBoxes} = useContext(BoxContext)

  const getDataBoxes = () => {
    setBoxes(DATA_BOXES)
  }

  useEffect(getDataBoxes,[])

  return (
    <div className="App">
      <Header/>
      <Boxes boxes={boxes}/>
    </div>
  );
}

export default App;
