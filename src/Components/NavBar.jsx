import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { ThemeContext } from "../Context/ThemeContextProvider";
function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.nav}>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? styles.link : isActive ? styles.active : styles.link
        }
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? styles.link : isActive ? styles.active : styles.link
        }
        to="/favs"
      >
        Favoritos
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? styles.link : isActive ? styles.active : styles.link
        }
        to="/contacto"
      >
        Contactanos
      </NavLink>
      <button className={styles.btn} onClick={toggleTheme}>
        {theme} mode
      </button>
    </div>
  );
}

export default NavBar;
