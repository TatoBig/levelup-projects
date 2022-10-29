import '@styles/One.css'
import { useEffect, useState } from 'react'

const One = () => {
  const keysAndValues = (obj: { [key: string]: any }) => [
    [...Object.keys(obj).map((key) => key)].sort(),
    [...Object.keys(obj).map((key) => key)].sort().map((key) => obj[key])
  ]

  const format = (input: string): { [key: string]: any } => {
    const clean = input
      .trim()
      .replaceAll(' ', '')
      .replaceAll('{', '')
      .replace('}', '')
    console.log(clean)

    const keys = []
    const values = []

    let key = ''
    let value = ''
    let isValue = false

    for (let i = 0; i < clean.length; i++) {
      if (!isValue) {
        if (clean[i] !== ':') {
          key = key += clean[i]
        } else {
          keys.push(key)
          key = ''
          isValue = true
        }
      } else {
        if (clean[i] !== ',') {
          value = value += clean[i]
        } else {
          values.push(value)
          value = ''
          isValue = false
        }
      }
    }

    values.push(value)
    isValue = false

    let constructedObject = {}

    for (let i = 0; i < keys.length; i++) {
      constructedObject = {
        ...constructedObject,
        [keys[i]]: values[i]
      }
    }

    return constructedObject
  }

  const [input, setInput] = useState('{ b: 1, c: 4, a: 3 }')
  const [output, setOutput] = useState(keysAndValues(format(input)))

  useEffect(() => {
    setOutput(keysAndValues(format(input)))
  }, [input])

  const handleChange = (e: any) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <h1># Primer proyecto</h1>
      <h2>## Llaves y valores</h2>
      <p>
        En este proyecto se creó una función que toma un objeto y devuelve las
        llaves y sus valores en matrices separadas.
      </p>
      <p>
        Este programa formatea la entrada del usuario para que se adapte a la
        función y se puedan ingresar valores dinámicamente
      </p>
      <div className="one-container__codebox">
        <pre>
          <h2>### Código de la función</h2>
          <code className="one-codebox">
            <span>
              {'const keysAndValues = (obj: { [key: string]: any }) => ['}
            </span>
            <span>{'    [...Object.keys(obj).map((key) => key)].sort(),'}</span>
            <span>
              {
                '    [...Object.keys(obj).map((key) => key)].sort().map((key) => obj[key])'
              }
            </span>
            <span>{']'}</span>
          </code>
          <code className="one-codebox">
            <span>
              Entrada:{' '}
              <input
                type="text"
                defaultValue={'{ b: 1, c: 4, a: 3 }'}
                onChange={handleChange}
              />{' '}
              Salida: [{output[0].map((key) => key).join(', ')}], [
              {output[1].map((key) => key).join(', ')}]
            </span>
          </code>
        </pre>
      </div>
    </div>
  )
}

export default One
