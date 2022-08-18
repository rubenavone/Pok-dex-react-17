import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PokemonAdd from './pages/pokemon-add';

const App: FunctionComponent = () => {

    return (
        <BrowserRouter>
            <div>
                {/*Barre de navigation pour toutes les page */}
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center"> Pokédex</Link>
                    </div>
                </nav>
            </div>
            {/* Système de gestion des routes de notre application */}
            <Routes>
                <Route path="/" element={<PokemonList />} />
                <Route path="/pokemons" element={<PokemonList />} />
                <Route path="/pokemons/:id" element={<PokemonsDetail />} />
                <Route path="/pokemons/edit/:id" element={<PokemonEdit />}></Route>
                <Route path="/pokemons/add" element={<PokemonAdd />}></Route>
                <Route path="*" element={<PageNotFound />} />  
            </Routes>
        </BrowserRouter>
    )
}

export default App;