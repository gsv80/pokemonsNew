import { useState } from "react";

import Menu from "./Menu";
import NavBar from "./NavBar";


const MenuHeader = ({bgActive}) => {

    const [menu, setMenu] = useState(null);
    
    const handleMenu = () => {
        setMenu(prevState => !prevState);
    }

    return (
        <>
            <Menu   
                menu = {menu}
                
            />
            <NavBar 
                menu = {menu}
                bgActive={bgActive}
                handleClickMenu = {handleMenu}

            />
        </>
    )
}

export default MenuHeader;
