import React from "react";
import styles from "./Text.module.css"


const Text = ({children, className}) =>{
    return(
        <div>
            <p className={[styles.textComponent, className].join(" ")}>{children}</p>
        </div>
    )
}

export default Text;