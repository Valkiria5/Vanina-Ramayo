import React from "react"
import javascript from '../../assets/skills/javascript.svg'
import light from '../../assets/skills/light.svg'
import postgresql from '../../assets/skills/postgresql.svg'
import css from '../../assets/skills/css.svg'
import react from '../../assets/skills/react.svg'
import redux from '../../assets/skills/redux.svg'
import sequelize from '../../assets/skills/sequelize.svg'
import trello from '../../assets/skills/trello.svg'
import figma from '../../assets/skills/figma.png'
import express from '../../assets/skills/express.svg'
import style from './skill.module.css'
const Skills = () => {
    return (
        <div className={style.skillcontainer} >
            <div className={style.leftsection}>
            <h1>Skills</h1>
            </div>
            <div className={style.rigthsection} >
                <div className={style.container}>
                <h2>Tech</h2>
                <img src={javascript} className={style.imagen}/>
                <img src={light} className={style.imagen}/>
                <img src={postgresql} className={style.imagen}/>
                <img src={css} className={style.imagen}/>
                <img src={react} className={style.imagen}/>
                <img src={redux} className={style.imagen}/>
                <img src={express} className={style.imagen}/>
                <img src={sequelize} className={style.imagen}/>
                <h2>Metodologìas Àgiles</h2>
                <img src={trello} className={style.imagen}/>
                <img src={figma} className={style.imagen}/>
                </div>
            </div>
        </div>
    )
}
export default Skills;