import React from "react";
import Title from "../../../components/Title/Title";
import styles from "./JoinUs.module.css"
import Subtitle from "../../../components/Subtitle/Subtitle";

const JoinUs = () =>{
    return (
        <section className={styles.main__section}>
            <div className={styles.main__section__div}>
                <Title className={styles.main__title}>Join Us</Title>
                <hr className={styles.hr}/>
                <div className={styles.main__section__subtitle}>
                    <Subtitle className={styles.section__desc}>Our team is made up of smart and driven people who want to use technology to make a big difference in the world. We’re always in search of partners and volunteers with that same vision. If that sounds like you, find your fit in our team.</Subtitle>
                </div>
            </div>
        </section>
    )
}

export default JoinUs