import { useState } from 'react'
import '../index.css'

export const Fetching = () => {
  const [notes, setNotes] = useState([])
  const [newNotes, setNewNote] = useState("")

  const obtenerData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/lanturn")
      .then(response => response.json())
      .then(data => console.log(data))
  }
  return (
    <div>
      <button className='button_light' onClick={obtenerData}>Fetching data</button>
    </div>
  )
}
