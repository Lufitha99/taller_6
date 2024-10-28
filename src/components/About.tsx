import React from 'react';
import { Outlet} from 'react-router-dom';
const About: React.FC = () => {
  return (
    <div>
      <Outlet /> {/* Rutas anidadas aparecerán aquí */}

    </div>

  );
};

export default About;
