import { useState } from 'react'
import '@styles/Two.css'

const Two = () => {
  const [counter, setCounter] = useState<number>(0)

  const handleColor = () => {
    if (counter === 0) {
      return 'black'
    }
    if (counter > 0) {
      return 'green'
    }
    if (counter < 0) {
      return 'red'
    }
  }

  return (
    <div>
      <h1># Segundo proyecto</h1>
      <h2>## Contador</h2>
      <p>
        Este proyecto tiene contador que puede incrementar o decrementar
        dependiendo de la opción que se elija, y el color del número va a variar
        dependiendo del número actual que posea
      </p>
      <div className="two-container">
        <div className="two-counter" style={{ color: handleColor() }}>
          <h1>{counter}</h1>
        </div>
        <div className="two-buttons">
          <button
            className="two-button"
            onClick={() => setCounter(counter - 1)}
          >
            Decrementar
          </button>
          <button className="two-button" onClick={() => setCounter(0)}>
            Reiniciar
          </button>
          <button
            className="two-button"
            onClick={() => setCounter(counter + 1)}
          >
            Incrementar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Two
