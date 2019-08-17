import React from "react";
import Title from "../../../components/Title/Title";
import Text from "../../../components/Text/Text"
import Subtitle from "../../../components/Subtitle/Subtitle"
import styles from "./About.module.css";


const About = () =>{
    return(
        <section className={styles.main__section}>
            <Title className={styles.title}>About Us</Title>
            <hr className={styles.hr}/>
            <Subtitle className={styles.subtitle}>As a company, we feel a deep sense of purpose and pride in 
                    knowing that through our work we have the power to change Africa and the world.</Subtitle>
            <Text className={styles.desc}>Venture Garden Group (VGG) is a leading provider of innovative, data-driven, end-to-end technology platforms addressing reconciliation and payment processing inefficiencies across multiple sectors of the African economy. Our <strong style={{opacity: 1}}>mission</strong>  is to transform Africa by using innovative technologies to
             solve real socio-economic challenges in impact sectors critical to sustainable economic development.</Text>
             <Text className={styles.desc}>We have extensive experience in serving both in public and private sectors and primarily operate through our multi-sector strategic business units. We are in energy, healthcare, education, aviation, financial services and social services. We help our customers
              reach new levels of efficiency, reliability and sustainability by providing industry-leading technology solutions and expertise.</Text>
        </section>
    )
}

export default About