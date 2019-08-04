import React from "react";
import About from "./About/About"
import styles from "./Main.module.css"
import FocusArea from "./FocusArea/FocusArea";
import Title from "../../components/Title/Title";
import Success from "./SuccessPage/Success";
import JoinUs from "./JoinUs/JoinUs";


const Main = ()=>{
    return (
        <div style={{width: "100%", paddingTop: "70px"}}>
            <About />
            <section className={styles.section__focus}>
                <Title className={styles.section__title}>Focus Areas</Title>
                <hr className={styles.hr}/>
                <div className={styles.focus}>
                    <FocusArea />
                </div>
            </section>
            <Success />
            <JoinUs />
        </div>
    )
}

export default Main