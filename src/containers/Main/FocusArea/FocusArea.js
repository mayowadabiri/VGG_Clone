import React, {Fragment} from "react";
import styles from "./FocusArea.module.css";
import Subtitle from "../../../components/Subtitle/Subtitle";
import Text from "../../../components/Text/Text";

import img1 from "../../../images/img1.jpg"
import img2 from "../../../images/img2.jpeg"
import tech from "../../../images/tech.jpg"

const FocusArea = () =>{
    return(
        <div className={styles.main__row}>
            <div className={styles.main__col}>
                <p className={styles.main__col__topic}>Knowledge</p>
                <div className={styles.main__col__story}>
                    <img className={styles.main__col__img} src= {img1} alt="VGG PIC" />
                    <div  className={styles.main__col__body}>
                        <div className={styles.main__col__b}>
                            <Subtitle className={styles.main__col__subtitle}>Do More Data</Subtitle>
                            <Text className={styles.main__col__text}>Our business intelligence and research teams provide data solutions that are tailored to meet specific decision-making needs for the various sectors we work in. The solutions are characterised by intelligence dashboards for real-time access to useful insights reporting, analytics to drive actionable insights based on patterns in data, monitoring and evaluation tools to achieve transparency in public sector initiatives</Text>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.main__col}>
                <p className={styles.main__col__topic}>Investment</p>
                <div className={styles.main__col__story}>
                    <img src= {img2} alt="VGG Pic"  className={styles.main__col__img} />
                    <div className={styles.main__col__body}>
                        <div className={styles.main__col__b}>
                            <Subtitle className={styles.main__col__subtitle}>Investing in the Next</Subtitle>
                            <Text className={styles.main__col__text}>We are proud to support initiatives that grow the African technology ecosystem and have the potential to change the world. Through GreenHouse Capital, the investment arm of VGG, we support Africa’s next generation of high growth technology startups and entrepreneurs. We offer investment services and resources to passionate entrepreneurs who find opportunities in the midst of challenges and are poised to transform emerging markets in a fundamental way.</Text>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.main__col}>
                <p  className={styles.main__col__topic}>Technology</p>
                <div className={styles.main__col__story}>
                <img src= {tech} alt="VGG PIC"  className={styles.main__col__img}/>
                <div  className={styles.main__col__body}>
                    <div className={styles.main__col__b}>
                        <Subtitle className={styles.main__col__subtitle}>Transformative Tech</Subtitle>
                        <Text className={styles.main__col__text}>Our products and platforms address the most challenging inefficiencies in reconciliation and payment processing across multiple industries including financial services, education, aviation,as well as power. We offer technology solutions to drive efficiency, transparency and productivity in governments and private sector organisations, and are changing the way our societies and nations work, trade and learn.x</Text>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )

}

export default FocusArea