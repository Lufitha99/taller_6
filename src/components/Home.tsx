import React from "react";
import styles from "../styles/About.module.css";
import video from "../assets/fondo.mp4";
const Home: React.FC  = () => {
    return (
      <div className={styles.videoBackground}>
        <video autoPlay loop muted className={styles.backgroundVideo}>
                  <source src={video} type="video/mp4" />
                  Tu navegador no soporta video.
        </video>
        <div className={styles.content}>
          <h1>Bienvenidos a la pagina de inicio</h1>
          <p>Punto 1 Rutas</p>
        </div>
  
      </div>
  
    );
  };
export default Home;