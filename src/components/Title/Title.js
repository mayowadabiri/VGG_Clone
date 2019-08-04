import React from "react";
import styles from "./Title.module.css"



const Title = ({className, children}) =>{
    return(
        <div className={styles.main__title}>
            <h2 className={[styles.main__title__name, className].join(" ")}>{children}</h2>
        </div>
    )
}

export default Title