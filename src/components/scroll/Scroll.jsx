import {React, useState} from "react";
import InfiniteScroll from 'react-infinite-scroll-component'
import style from './scroll.module.css'
import About from "../about/About";
import Proyectos from '../proyectos/Proyectos'
import Skills from "../skills/Skill";
const Scroll = () => {
    const [items, setItems] =  useState([<About key="about" />, <Skills key="skills"/>, <Proyectos key="proyectos" />]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const fetchMoreData = () => {
      // Simula una solicitud de API o carga de datos
      setTimeout(() => {
        // Define un arreglo de componentes en el orden que deseas cargar
        const components = [Skills, About, Proyectos];
        
        // Encuentra el índice del componente actual en el arreglo
        const currentIndex = components.findIndex(component => component === items[items.length - 1].type);
    
        // Calcula el índice del siguiente componente
        const nextIndex = (currentIndex + 1) % components.length;
    
        // Genera el nuevo componente basado en el siguiente índice
        const newComponent = React.createElement(components[nextIndex], { key: page });
    
        // Agrega el nuevo componente a la lista de elementos
        const newItems = [...items, newComponent];
    
        // Actualiza el estado de los elementos
        setItems(newItems);
    
        // Actualiza la página actual
        setPage(page + 1);
    
        // Puedes ajustar la condición de hasMore según tus necesidades
        if (page >= 0) {
          setHasMore(false); // Detiene la carga cuando no hay más elementos
        }
      }, 1000); // Simula un tiempo de carga
    };
    

 return(
    <div className={style.infinitescroll}> 
    <InfiniteScroll
      dataLength={items.length} // Longitud de la lista
      next={fetchMoreData} // Función para cargar más elementos
      hasMore={hasMore} // Controla si hay más elementos para cargar
    // Componente de carga
    >
      {items.map((item, index) => item)}
    </InfiniteScroll>
    </div>
 )
}
export default Scroll;