import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import s from './style.module.css';

import PokemonCard from '../../components/PokemonCard';
import Pokemons from '../../data/pokemonCards.json';


const GamePage = () => {
    const history = useHistory();
    const handleClick =() =>{
        history.push('/home');
    };
    
    const padStyle={
        paddingTop: '70px',
    };

    const [pokemons, setPokemons]=useState(Pokemons.slice(0,5));
    
    const handleCardClick = (id) => {
            setPokemons(prev => {
                return Array.from(prev, (item) => {
                    if (item.id === id) {
                        item.active = true;
                    }
                    return item;
                });
            });    

    };

                    
    return (
        <div className={s.flex}>
            <div style={padStyle} className={s.flex}  >
                {
                    pokemons.map(({name, img, id, type, values, active}) => (
                    
                    <PokemonCard                     
                        key={id}
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
