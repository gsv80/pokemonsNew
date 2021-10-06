import React from 'react';
import s from './style.module.css';
// import MenuHeader from './MenuHeader';

const Header = ({desc, title, onClickButton }) => {

    const handleClick = () => {
        console.log("#### <Header/>");
        onClickButton  && onClickButton('game');
    }

    
    return (
        <header className={s.root} >

            {/* <MenuHeader /> */}

            <div className={s.forest}> </div>
            
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{desc}</p>
                <button onClick={handleClick} >Start Game</button>
            </div>
        </header>
    )
}

export default Header;
