import {React, useState} from "react";
import englishcertificate from '../../assets/imagenes/englishcertificate.png';
import henrycertificate from '../../assets/imagenes/henrycertificate.jpg';
import style from './carousel.module.css';
const Carousel = () => {
    const images = [englishcertificate, henrycertificate]
    const [selectedIndex, setSelectedIndex] = useState(0); 
    const [selectedImage, setSelectedImage] = useState(images[0]);


    const previous = () =>{
        const condition = selectedIndex > 0; 
        const nextIndex = condition ? selectedIndex - 1 : images.length ; 
        setSelectedImage(images[nextIndex]); 
        setSelectedIndex(nextIndex); 
    }

    const next = () => {
        const condition = selectedIndex < images.length;
        const nextIndex = condition ? selectedIndex + 1 : 0;
        setSelectedImage(images[nextIndex]); 
        setSelectedIndex(nextIndex); 
    }

    return (
      <>  
      <h2>Certificates</h2>
            <img src= {selectedImage} alt="Selected" className={style.imagencarousel}/>
            <div className={style.buttoncontainer}>
          <button onClick={previous} className={style.buttonprevious}>{'<'}</button>
           <button onClick={next} className={style.buttonnext}>{'>'}</button>
           </div>
    </>
    )
}
export default Carousel; 