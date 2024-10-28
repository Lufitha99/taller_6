import React, { useState } from 'react';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import styles from './App.module.css';
import Counter from './components/Punto2';
import ThemeComponent from './components/ThemeComponent';
import { ThemeProvider } from './components/Punto3';
import { Provider } from 'react-redux';
import Contador from './components/Punto4';
import TextToggleButton from './components/Punto5';
import { store } from './redux/store';
const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Obtiene la ubicación actual
  const toggleDropdown = () => setIsOpen(prev => !prev);
  const isEjerciciosActive = location.pathname.startsWith('/ejercicios');
  return (
    <>
      <header className={styles.header}>
        <h1>Taller 6</h1>
      </header>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={isEjerciciosActive ? '' : styles.active}
        >
          Home
        </NavLink>
        <div onClick={toggleDropdown} className={styles.dropdown}>
          <span className={isEjerciciosActive ? styles.activedropdown : ''}>Ejercicios ▼</span>
          {isOpen && (
            <div className={styles.dropdownMenu}>
              <NavLink
                to="/ejercicios/punto2"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Punto 2
              </NavLink>
              <NavLink
                to="/ejercicios/punto3"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Punto 3
              </NavLink>
              <NavLink
                to="/ejercicios/punto4"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Punto 4
              </NavLink>
              <NavLink
                to="/ejercicios/punto5"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Punto 5
              </NavLink>
            </div>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicios" element={<About />}>
          <Route path="punto2" element={<Counter />} />
          <Route path="punto3" element={<ThemeProvider><ThemeComponent /></ThemeProvider>} />
          <Route path="punto4" element={<Provider store={store}><Contador /></Provider>} />
          <Route path="punto5" element={<Provider store={store}><TextToggleButton /></Provider>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
