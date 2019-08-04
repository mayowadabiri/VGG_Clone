import React from "react";
import Anchor from "../../components/Anchor/Anchor"
import icon from "../../images/logo.png";
import styles from "./Header.module.css"


const Header = () =>{
    const handleClick = e => console.log(e.target);


    return(
        <div className={styles.main__container}>
            <header className={styles.main__container__header}>
                <a href="#home" className={styles.header__icon}>
                    <img src={icon} alt={"VGG"} className={styles.header__image}/>
                </a>
                <div style={{width: "100%"}}>
                    <ul className={styles.header__lists}>
                        <li className={styles.header__list}>
                            <Anchor hrefName="#home" onClick={handleClick}>Home </Anchor>
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
        </div>
    )
}

export default Header