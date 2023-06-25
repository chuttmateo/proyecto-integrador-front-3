import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
function NavBar() {
  return (
    <div className={styles.nav}>
        <Link className={styles.link} to='/home'>Home</Link>
        <Link className={styles.link} to='/favs'>Favoritos</Link>
        <Link className={styles.link} to='/contacto'>Contactanos</Link>
    </div>
  )
}

export default NavBar