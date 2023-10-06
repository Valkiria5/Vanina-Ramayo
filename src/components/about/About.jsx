import React from "react";
import Carousel from "../carousel/Carousel";
import style from "./about.module.css"
const About = () => {
    return (
        <div className={style.aboutcontainer}>
            <div  className={style.leftsection}>
        <h4>FullStack Developer, con experiencia en desarrollo Front End y Back End. Manejo tecnologías como React, Redux, Node JS, PostgreSQL y Express.
             También trabajo en mis conocimientos en metodologías ágiles como Trello, figma y jira. 
             Soy proactiva en aprender y mejorar en todo lo que hago, y además, siempre me esfuerzo por dar lo mejor y asegurar que cada aspecto esté cuidadosamente revisado.
        🚀 Actualmente estoy ampliando mis habilidades en Typescript y Phyton.
                      Si quieres saber más de mi, contactame!</h4>
            </div>
            <div className={style.rightsection}>
            <Carousel/>
            </div>
      </div>
    )
}
export default About; 
