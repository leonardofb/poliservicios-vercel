import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";  // ✅ Importamos ThemeContext
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add(styles.scrolled);
        } else {
          header.classList.remove(styles.scrolled);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <NavLink to="/">
            <img src="/assets/images/poliservicios.jpg" alt="Poliservicios" className={styles.logo} />
          </NavLink>

          <div className={styles.navLinks}>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.navLink}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : styles.navLink}>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? styles.active : styles.navLink}>
              Services
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : styles.navLink}>
              Contact
            </NavLink>
          </div>

          {/* ✅ Botón para cambiar el tema */}
          <div className={styles.toggleSwitch}>
            <input
              type="checkbox"
              id="darkModeToggle"
              className={styles.toggleSwitchCheckbox}
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <label htmlFor="darkModeToggle" className={styles.toggleSwitchLabel}>
              <span className={styles.toggleSwitchInner} />
              <span className={styles.toggleSwitchSwitch} />
            </label>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;




/*import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (window.scrollY > 50) {
        header.classList.add(styles.scrolled);
      } else {
        header.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.logo}>Poliservicios</h1>
        <nav className={styles.navbar}>
          <NavLink to="/" exact className={styles.navLink} activeClassName={styles.active}>
            Home
          </NavLink>
          <NavLink to="/about" className={styles.navLink} activeClassName={styles.active}>
            About
          </NavLink>
          <NavLink to="/services" className={styles.navLink} activeClassName={styles.active}>
            Services
          </NavLink>
          <NavLink to="/contact" className={styles.navLink} activeClassName={styles.active}>
            Contact
          </NavLink>
          <button className={styles.darkModeButton}>Modo Oscuro</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
*/