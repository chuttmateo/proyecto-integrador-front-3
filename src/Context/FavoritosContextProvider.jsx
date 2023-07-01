import { createContext, useEffect, useState } from "react";
export const FavoritosContext = createContext();

import React from "react";

function FavoritosContextProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    traerFavs();
  }, []);

  function traerFavs() {
    const data = localStorage.getItem("favoritos")
      ? JSON.parse(localStorage.getItem("favoritos"))
      : [];
    setFavoritos(data);
  }

  function handleFav(odontologo) {
    const actualizado = favoritos.filter((fav) => fav.id !== odontologo.id);
    if (actualizado.length < favoritos.length) {
      setFavoritos(actualizado);
      localStorage.setItem("favoritos", JSON.stringify(actualizado));
    } else {
      setFavoritos([...actualizado, odontologo]);
      localStorage.setItem(
        "favoritos",
        JSON.stringify([...actualizado, odontologo])
      );
    }
  }

  return (
    <FavoritosContext.Provider
      value={{ favoritos, handleFav }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

export default FavoritosContextProvider;
