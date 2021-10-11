import React, {useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import s from './style.module.css';
import PokemonCard from '../../../../components/PokemonCard';

import { FirebaseContext } from '../../../../context/firbaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';


const StartPage = () => {
    const padStyle={
        paddingTop: '80px',
    };
    const firebase = useContext(FirebaseContext);
    console.log('#### firebaseContext', firebase);
    const pokemonContext = useContext(PokemonContext);
    console.log('#### pokemonContext ', pokemonContext);

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

        return () => firebase.offPokemonsSocket();
    },[]);


    
    const handleCardSelected = (key) => {
        setPokemons(prev => ({
            ...prev,
            [key]: {
                ...prev[key], 
                selected : !prev[key].selected, 
            }
        }))
    };

    const moveToBoard =() => {
        history.push('/game/board')
    }
                    
    return (
        <div className={s.flex}>
            <div className={s.buttonWrap}> 
                <button style={padStyle}
                    onClick={moveToBoard}
                >
                    Start Game
                </button>
            </div>
            <div  className={s.grid}  >
                {
                    Object.entries(pokemons).map(([key, {name, img, id, type, values, selected}]) => (
                    
                    <PokemonCard                     
                        key={key}
                        id={id}
                        name={name}
                        values={values}
                        type={type}
                        img={img}
                        isActive={true}
                        isSelected = {selected}
                        onClickCard={() => handleCardSelected(key)}
                        className={s.card}
                        minimize={false}


                    />)) 
                }  

            </div>
            <button onClick={handleClick}>Back to HomePage</button>
        </div>
    )
}

export default StartPage;
