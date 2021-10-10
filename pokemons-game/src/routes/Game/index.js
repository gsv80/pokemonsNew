import React, {useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import s from './style.module.css';

import PokemonCard from '../../components/PokemonCard';
import Pokemons from '../../data/pokemonCards.json';
import fire from '../../services/firebase';
import database from '../../services/firebase';
import { FirebaseContext } from '../../context/firbaseContext';

const data = Pokemons[0];


const GamePage = () => {
    const firebase = useContext(FirebaseContext);
    const [pokemons, setPokemons]=useState({});

    console.log('#### : firebaseCont', firebase);

    const history = useHistory();
    const handleClick =() =>{
        history.push('/home');
    };
    
    useEffect(() =>{
        firebase.getPokemonsSocket((pokemons) =>{
            setPokemons(pokemons);
        });
    },[])

    const padStyle={
        paddingTop: '80px',
    };

    
    const handleCardClick = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                };
                acc[item[0]] = pokemon;

                firebase.postPokemon(item[0], pokemon);
                // database.ref('pokemons/'+ item[0]).set(pokemon);

                return acc;
            }, {});
        });
    };

    const addPokemon =()=>{
        firebase.addPokemon(data);
    }
                    
    return (
        <div className={s.flex}>
            <button style={padStyle} onClick={addPokemon}>ADD NEW POKEMON</button>
            <div  className={s.flex}  >
                {
                    Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) => (
                    
                    <PokemonCard                     
                        key={key}
                        id={id}
                        name={name}
                        values={values}
                        type={type}
                        img={img}
                        isActive={active}
                        onClickCard={handleCardClick}

                    />)) 
                }  

            </div>
            <button onClick={handleClick}>Back to HomePage</button>
        </div>
    )
}

export default GamePage;
