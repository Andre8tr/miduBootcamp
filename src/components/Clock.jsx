import { useState } from 'react'

const Clock = () => {
  console.log('Se carga de nuevo el componente')
  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador + 1)
  }

  const esPar =  contador % 2 === 0;
  
  /*setInterval(() => {
    sumar()
  }, 10000) */

  return (
    <>
      <div>Clock</div>
      <div>{contador}</div>
      <div>{esPar ? 'Es par' : 'Es impar'}</div>
      <button onClick={sumar}>Aumentar</button>
    </>
  )
}

export default Clock