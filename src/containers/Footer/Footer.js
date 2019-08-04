import React from "react";
import styles from "./Footer.module.css"
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import icon from "../../images/logo.png";
import Text from "../../components/Text/Text";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons" 
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
// import {faFacebook} from "@fortawesome/free-brands-svg-icons"
// import {faFacebook} from "@fortawesome/free-brands-svg-icons"
const Footer = () =>{
    return(
        <footer className={styles.main__footer}>
            <div className={styles.footer__input}>
                {/* <div className={styles.footer__news}>
                    <Title className={styles.footer__title}>Subscribe To Our Newsletter</Title>
                    <Subtitle className={styles.footer__subtitle}>Find out about news, features and connections around our businesses</Subtitle>
                </div> */}
                <div className={styles.footer__input__search}>
                    <input type="email" placeholder="you@mail.com"/><button>Subscribe</button>
                </div>
            </div>
            <section className={styles.footer__section}>
                <div className={styles.footer__row}>
                    <div className={[styles.footer__col, styles.footer__col__1].join(" ")}>
                        <img src={icon} alt="footer logo" />
                        <div className={styles.footer__text}>
                            <Text className={styles.footer__text}>Venture Garden Group is a holding company for a group of financial technology entities dedicated to the innovative and data-driven financial technology solutions.</Text>
                            <Text className={styles.footer__text}>Transforming Africa through technology</Text>
                        </div>
                    </div>
                    <div className={[styles.footer__col, styles.footer__col__2].join(" ")}>
                        <h2>Our corporate office</h2>
                        <Subtitle>Vibranium Valley</Subtitle>
                        <p>42, Local Airport Road, Ikeja Lagos</p>
                    </div>
                    <div className={[styles.footer__col, styles.footer__col__3].join(" ")}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.463063324743!2d3.3306029147710796!3d6.589220695234721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b918cc78d3649%3A0x8d9e236e05be6717!2sLocal+Airport+Rd%2C+Lagos!5e0!3m2!1sen!2sng!4v1564783787367!5m2!1sen!2sng" frameborder="0" style={{float: "right"}}></iframe>
                    </div> 
                </div>
                <div className={styles.footer__icons}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>
                        <a href="mailto:mayowad43@gmail.com">mayowad43@gmail.com</a>
                    </span>
                    <div>
                        <div>   
                            <a href="facebook.com/dabirimayowa" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                        <div>
                            <a href="facebook.com/dabirimayowa" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                        <div>
                            <a href="facebook.com/dabirimayowa" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                        <div>
                            <a href="facebook.com/dabirimayowa" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer