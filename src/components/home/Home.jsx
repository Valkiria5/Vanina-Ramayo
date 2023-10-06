import style from './home.module.css'
import foto from '../../assets/foto.jpeg'
import { Link } from 'react-router-dom';
const Home = () => {
 return (
    <div className={style.homecontainer}>
    <div className={style.leftsection}>
      <h1 className={style.header}>I'm Vanina Ramayo</h1>
      <h2 className={style.subheader}>Full Stack Developer</h2>
    </div>
    <div className={style.rightsection}>
    <img
          src={foto} // Reemplaza con la ruta de tu imagen de perfil
          alt="Vanina Ramayo"
          className={style.profileimage}
        />
      <Link to='/proyects'className={style.button}>
        Ver Proyectos
      </Link>
    </div>
  </div>
);
};

export default Home; 
