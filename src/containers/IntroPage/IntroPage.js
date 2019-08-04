import React from "react";
import styles from "./IntroPage.module.css"


const IntroPage = ()=>{
    return(
        <div className={styles.IntroPage__main}>
            <div className={styles.IntroPage__back}>
            <div className={styles.IntroPage__main__div}>
                <h2>Transforming Africa Through Technology </h2>
            </div>
            </div>
        </div>
    )
}

export default IntroPage;