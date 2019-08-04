import React from "react";
import styles from "./Anchor.module.css"

const Anchor = ({hrefName, children, onClick})=> {

    
    return(
        <a href={hrefName} className={styles.AnchorLink} onClick={onClick}>{children}</a>
    )
}


export default Anchor