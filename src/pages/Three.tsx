import { useState } from 'react'
import '@styles/Three.css'

const Three = () => {
  const [color, setColor] = useState<string>('rgb(245, 245, 220)')
  const [colorName, setColorName] = useState<string>('Beige')

  const randInt = () => Math.floor(Math.random() * 256)
  const randomColor = async () => {
    const generatedColor = `rgb(${randInt()},${randInt()},${randInt()})`
    const link = `https://www.thecolorapi.com/id?rgb=${generatedColor}`
    try {
      const response = await fetch(link)
      const data = await response.json()
      setColor(generatedColor)
      setColorName(data.name.value)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1># Tercer proyecto</h1>
      <h2>## Cambio de color de fondo con nombre</h2>
      <p>
        Para este ejercicio se utilizó la API de &quot;TheColorApi&quot; para
        obtener el nombre de cada color que se genera de manera completamente
        aleatoria
      </p>
      <p>
        Para comenzar, presione el botón de cambiar de color para obtener
        colores nuevos
      </p>
      <div
        className="three-background"
        style={{
          backgroundColor: color
        }}
      />
      <div className="three-container">
        <h1>{colorName}</h1>
        <button className="three-button" onClick={() => randomColor()}>
          Cambiar de color
        </button>
      </div>
    </div>
  )
}

export default Three
