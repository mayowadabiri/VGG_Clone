import React, {useReducer, useEffect} from "react";
import Anchor from "../../components/Anchor/Anchor";
import Toggle from "../../components/Toggle/Toggle"

import icon from "../../images/logo.png";
import styles from "./Header.module.css";


const showReducer = (state, action) =>{
    console.log(action, state)
    switch(action.type){
        case "SHOW":
            return true;
        case "CLOSE":
            return false;
        default:
            throw new Error("Error")
    }
}

const Header = () =>{
    const [mobileNav, dispatchMobileNav] = useReducer(showReducer, false)

    const handleClick = () =>{
        dispatchMobileNav({type: !mobileNav ? "SHOW" : "CLOSE" })
    }

    return(
        <div className={styles.main__container}>
            <header className={styles.main__container__header}>
                <a href="#home" className={styles.header__icon}>
                    <img src={icon} alt={"VGG"} className={styles.header__image}/>
                </a>
                <button className={styles.toggle__button} onClick={handleClick}>
                    <span className={styles.toggle__button__bar}></span>
                    <span className={styles.toggle__button__bar}></span>
                    <span className={styles.toggle__button__bar}></span>
                </button>
                <div style={{width: "100%"}} className={styles.main__anchor}>
                    <ul className={styles.header__lists}>
                        <li className={styles.header__list}>
                            <Anchor hrefName="#home">Home </Anchor>
                        </li>
                        <li className={styles.header__list}>
                            <Anchor hrefName="#aboutus">About Us</Anchor>
                        </li>
                        <li className={styles.header__list}>
                            <Anchor hrefName="#focus">Focus Area</Anchor>
                        </li>
                        <li className={styles.header__list}>
                            <Anchor hrefName="#joinus">Join us</Anchor>
                        </li>
                        <li className={styles.header__list}>
                            <Anchor hrefName="#blog">Blog</Anchor>
                        </li>
                    </ul>
                </div> 
            </header>
            <div className={mobileNav ? styles.mobile__nav : styles.close__nav}>
                <ul className={styles.mobile__nav__lists}>
                    <li className={styles.mobile__nav__list}>
                        <Anchor hrefName="#home">Home </Anchor>
                    </li>
                    <li className={styles.mobile__nav__list}>
                        <Anchor hrefName="#aboutus">About Us</Anchor>
                    </li>
                    <li className={styles.mobile__nav__list}>
                        <Anchor hrefName="#focus">Focus Area</Anchor>
                    </li>
                    <li className={styles.mobile__nav__list}>
                        <Anchor hrefName="#joinus">Join us</Anchor>
                    </li>
                    <li className={styles.mobile__nav__list}>
                        <Anchor hrefName="#blog">Blog</Anchor>
                    </li>
                </ul>
            </div> 
        </div>
    )
}

export default Header