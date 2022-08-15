import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import mockPockemon from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';

const PokemonList: FunctionComponent = () => {
    const [pokemons, setPokemon] = useState<Pokemon[]>([])

    useEffect(()=>{
        setPokemon(mockPockemon);
    }, []);

    return(
        <div>
            <h1 className="center">Pokédex</h1>
            <div className="container">
                <div className="row">
                    {pokemons.map(pokemon=>(
                       <PokemonCard key={pokemon.id} pokemon={pokemon} /*borderColor = "red"*/ />
                       
                    ))}
                </div>
            </div>
        </div>
    )
}

  

export default PokemonList;