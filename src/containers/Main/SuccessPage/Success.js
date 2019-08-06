import React from "react";
import Title from "../../../components/Title/Title";
import styles from "./Success.module.css"
import Subtitle from "../../../components/Subtitle/Subtitle";
import image from "../../../images/image.png"

const Success = ()=> {
    return(
        <section className={styles.main__success}>
            <div className={styles.main__section}>
                <Title className={styles.success__title}>Our Success Stories</Title>
                <hr className={styles.hr}/>
                <div>
                    <Subtitle className={styles.success__subtitle}>Success means different things to everyone. For us, success is using technology to transform the world around us. Here are some of our transformative partnerships and investments</Subtitle>
                </div>
                <div className={styles.success__img__container}>
                    <img src={image} alt="Success" className={styles.success__img} />
                </div>
            </div>
        </section>
    )
}

export default Success