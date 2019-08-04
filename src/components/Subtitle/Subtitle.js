import React from "react";
import styles from "./Subtitle.module.css"


const Subtitle = ({className, children}) =>{
    return(
        <div>
            <p className={[styles.subtitle__text, className].join(" ")}>{children}</p>
        </div>
    )
}

export default Subtitle