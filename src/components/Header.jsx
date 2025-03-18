import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";  
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const logo = "/images/poliservicios.jpeg"; // ✅ Ruta en public/

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
            <img src={logo} alt="Poliservicios" className={styles.logo} />
          </NavLink>

          <div className={styles.navLinks}>
            <NavLink to="/" className={({ isActive }) => isActive ? `${styles.active} ${styles.navLink}` : styles.navLink}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.active} ${styles.navLink}` : styles.navLink}>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? `${styles.active} ${styles.navLink}` : styles.navLink}>
              Services
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.active} ${styles.navLink}` : styles.navLink}>
              Contact
            </NavLink>
            <NavLink to="/ImagenesIA" className={({ isActive }) => isActive ? `${styles.active} ${styles.navLink}` : styles.navLink}>
              Imagenes IA
            </NavLink>
          </div>

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
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
