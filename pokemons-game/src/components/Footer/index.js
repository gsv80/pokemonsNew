import React from 'react';
import s from './style.module.css';

const Footer = ({title, desc}) => {
    return (
        <div className={s.flex} >
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default Footer;
