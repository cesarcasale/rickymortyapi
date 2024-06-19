import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import Gallery from '../../components/gallery/Gallery';
import Pagination from '../../components/Pagination/Pagimation';
import Buscador from '../../components/Buscador/Buscador';
import { AppContext } from '../../shared/AppContext';



export default function CharactersPage () {
    const [characters, setCharacters] = useState([]);
    const [charactersFiltered, setCharactersFiltered] = useState([]);
    const {search} = useContext(AppContext);
        
    const getCharacters = async (newPage) => {
            const {data: {results}} = await axios(`https://rickandmortyapi.com/api/character/?name=${search}&page=${newPage}`);
            setCharacters(results)
            setCharactersFiltered(results);

        };
        useEffect(()=>{
        getCharacters(1);
    }, [search]);
    const searchCharacters = (name) => {
        const filtered = characters.filter((character) =>
        character.name.toLowerCase().includes(name.toLowerCase())
        );
        setCharactersFiltered(filtered);
    };
    return <div className='character-page'>
        <Buscador setSearch={searchCharacters} />
        <Pagination onChangePage={getCharacters}/>
        <Gallery data={charactersFiltered}/>
        <Pagination onChangePage={getCharacters}/>
    </div>
}