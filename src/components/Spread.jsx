import { useState } from 'react'

/* Se puede crear una constante para tener valores iniciales de un estado */
const INITIAL_STATE = {
  color: 'Rojo',
  edad: 25
}

const Spread = () => {
  const [objeto, setObjeto] = useState({
    color: 'Rojo',
    edad: 23
  })

  const handleReset = () => {
    setObjeto(INITIAL_STATE)
  }

  const handleObjeto = () => {
    console.log('Hola');
    setObjeto({
      ...objeto,
      color: 'Azul'
    })
  }
  return (
    <>
      <div>{objeto.color}</div>
      <div>{objeto.edad}</div>
      <button onClick={handleObjeto}>Objeto</button>
      <button onClick={handleReset}>Resetear</button>
    </>
  )
}

export default Spread