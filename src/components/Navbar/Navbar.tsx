//@ts-nocheck
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {

    const [isMenu, setMenu] = useState(false);

    function toggleMenu() {
        setMenu(!isMenu);
    }

    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous"></link>
            <div className={style.navbar} >
                <div onClick={toggleMenu} className={style.menu} >
                        <span className={isMenu ? `${style.btn_active}` 
                        : `${style.btn}`}
                        ></span>
                </div>
                <div className={isMenu ? style.navlink_active : style.navlink}>
                    <NavLink to='/prejunior' activeClassName={style.active}>PreJunior</NavLink>
                    <NavLink to='/junior' activeClassName={style.active}>Junior</NavLink>
                    <NavLink to='/juniorplus' activeClassName={style.active}>JuniorPlus</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar;