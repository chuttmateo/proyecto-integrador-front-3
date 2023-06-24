import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div>
        <Link to='/home'>Home</Link>
        <Link to='/favs'>Favoritos</Link>
        <Link to='/contacto'>Contactanos</Link>
    </div>
  )
}

export default NavBar