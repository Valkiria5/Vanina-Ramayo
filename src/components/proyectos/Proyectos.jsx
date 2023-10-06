import React from "react";
import NatureXtreme from '../../assets/videos/NatureXtreme.mp4'
import dogs from '../../assets/videos/dogs.mp4'
import rickandmorty from '../../assets/videos/rickandmorty.webm'
import style from "./proyectos.module.css"
const Proyectos = () => {
    return(
        <main id='projects'> 
            
         
         <div className={style.proyectoscontainer}>
          <article className={style.project}> 
          <h4>NatureXtreme</h4> 
            <video src={NatureXtreme} controls/> 
            <p>
            E-Commerce de ropa para actividades al aire Libre. 
            Cuenta con un perfil de usuario para ver productos, agregarlos a favoritos y realizar compras y un perfil de administrador para controlar stock de productos, modificar y crear nuevos articulos y ver los usuarios registrados en la página.
            Además cuenta con un blog con información sobre sitios en los cuales podes realizar este tipo de actividades.
            En este proyecto grupal utilizamos tecnologías tales como Chacra UI, Typescript, Express, TypeORM, entre otras.
            </p>
            </article>
            
          <article className={style.project}>
            <h4>Henry Dogs</h4> 
           <video src={dogs} controls/>
           <p>
            Single Page creada utilizando React, Redux, Node Js, Express, Sequelize, PostgreSQL, entre otras herramientas.
            En este proyecto puedes ver a los perros, buscarlos por nombre, ver su descripción, filtrarlos temperamento, ordenarlos por peso y de la A-Z.
           También puedes crear tu propio perro!
           </p>
           </article>
           
          <article className={style.project}>
            <h4>Rick and Morty</h4> 
           <video src={rickandmorty}controls/>
           
           <p>Single Page con temática de Rick and Morty. Las Técnologias que se utilizaron para crear esta página fueron React, Redux, Html, Css, Node Js, Express, Sequelize y PostgreSQL. 
            Permite buscar personajes al azar, por nombre y agregarlos a favoritos. 
            </p>
            </article>
            </div>
            </main>
       
    )
}
export default Proyectos;