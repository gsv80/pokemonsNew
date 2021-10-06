import {useState} from 'react';

import s from './style.module.css';
import cn from 'classnames';

const NavBar = ({handleClickMenu, bgActive =false,  menu}) => {

    
      
    return (
        <nav className={cn(s.navbar, {
                [s.bgActive]: bgActive
            })}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div className={cn(
                        s.menuButton, 
                        {[s.active] : menu }
                        )}
                        onClick = {handleClickMenu}
                >
                    <span />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
