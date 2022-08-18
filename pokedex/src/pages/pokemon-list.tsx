import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import PokemonService from '../service/pokemon-service';
import { Link } from 'react-router-dom';

const PokemonList: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
    }, []);

    return (
        <div>

            <h1 className="center">Pokédex</h1>

            <div className="container">
                <div className="row">
                    {pokemons.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} /*borderColor = "red"*/ />

                    ))}



                    <div className="col s6 m4">
                        <div className="card horizontal">
                            <h4 className="center">Ajouter un pokémon</h4>
                            <Link to={`/pokemons/add/`} className="btn-large btn-floating center halfway-fab waves-effect waves-light">
                                <i className="material-icons">add</i>
                            </Link>


                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}



export default PokemonList;