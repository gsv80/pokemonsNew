import React from 'react'
import MenuHeader from '../../components/Header/MenuHeader';

const GamePage = ({onChangePage}) => {

    const handleClick =() =>{
        onChangePage &&onChangePage('app');
    }

    return (
        <div>
            {/* <MenuHeader /> */}
            <h3>Game Page is here</h3>
            <button onClick={handleClick}>Back to HomePage</button>
        </div>
    )
}

export default GamePage
