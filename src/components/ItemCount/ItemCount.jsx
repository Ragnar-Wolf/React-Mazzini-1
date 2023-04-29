import React, { useState } from 'react'

const ItemCount = () => {
    const [contador, setContador] = useState(1);

    const incrementar = () => {
        setContador(contador + 1);
    }
    
    const decrementar = () => {
        setContador(contador - 1);
    }
  return (
    <div>
      <button onClick={decrementar}> - </button>
      <p>{contador}</p>
      <button onClick={incrementar}> + </button>
    </div>
  )
}

export default ItemCount
