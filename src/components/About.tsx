import React from 'react';
import { Outlet} from 'react-router-dom';
import video from '../assets/fondo.mp4';
import styles from '../styles/About.module.css';
const About: React.FC = () => {
  return (
    <div className={styles.videoBackground}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
                <source src={video} type="video/mp4" />
                Tu navegador no soporta video.
      </video>
      <div className={styles.content}>
        <Outlet /> {/* Rutas anidadas aparecerán aquí */}
      </div>

    </div>

  );
};

export default About;
