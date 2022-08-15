import React, { useState, useEffect } from "react";
import Pokemon from '../models/pokemon';
import mockPokemon from '../models/mock-pokemon';


const usePokemons = (type: string) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
 
    useEffect(() => {
        setPokemons(mockPokemon);
    }, []);

    return pokemons;
}

export default usePokemons;