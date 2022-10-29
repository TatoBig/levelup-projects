import '@styles/Four.css'
import { useEffect, useState } from 'react'

type DisplayPokemon = {
  name: string
  image: string
}

const URL = 'https://pokeapi.co/api/v2/pokemon'

const Four = () => {
  const [pokemons, setPokemons] = useState<any>([])
  let fetchOnce = true

  useEffect(() => {
    if (fetchOnce) {
      fetchOnce = false
      getPokemons()
    }
  }, [])

  const getPokemons = async () => {
    const pokemonData = []
    for (let i = 0; i < 6; i++) {
      const response = await fetch(`${URL}/${Math.floor(Math.random() * 906)}`)
      const data = await response.json()
      const pokemon = {
        name: data.name,
        image: data.sprites.other['official-artwork'].front_default
      }
      pokemonData.push(pokemon)
    }
    console.log(pokemonData)
    setPokemons(pokemonData)
  }

  return (
    <div>
      <h1># Cuarto proyecto</h1>
      <h2>## PokeAPI</h2>
      <p>
        En este proyecto, se conecta con la API de PokeAPI para obtener 6
        pokemones de manera aleatoria cada vez que se actualiza la página, y
        solamente nos mostrará su imagen y nombre
      </p>
      <div className="four-container">
        <div className="four-pokemons">
          {pokemons.length === 6 &&
            pokemons.map((pokemon: DisplayPokemon, index: number) => (
              <div key={index} className="four-pokemon__card">
                <h2>
                  *{' '}
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h2>
                <img src={pokemon.image} className="four-pokemon__image" />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Four
