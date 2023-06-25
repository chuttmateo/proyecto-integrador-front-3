import { useEffect, useState } from "react";
import DentistaCard from "../../Components/DentistaCard";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

//Donde tendrán que renderizar una card por cada dentista devuelto por la API.
function Home() {
  const [dentistas, setDentistas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetchData();
    traerFavs();
  }, []);

  function traerFavs() {
    const localData = localStorage.getItem("favoritos");
    const data = localData ? JSON.parse(localData) : [];
    setFavoritos(data)
  }

  async function fetchData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const dentistas = await data.json();
    setDentistas(dentistas);
  }

  function handleFav(objeto) {
    const localData = localStorage.getItem("favoritos");
    const data = localData ? JSON.parse(localData) : [];
    const actualizado = data.filter((data) => data.id != objeto.id);
    if (actualizado.length < favoritos.length) {
      setFavoritos(actualizado);
      localStorage.setItem("favoritos", JSON.stringify(actualizado));
    } else {
      setFavoritos([...actualizado, objeto]);
      localStorage.setItem(
        "favoritos",
        JSON.stringify([...actualizado, objeto])
      );
    }
  }

  return (
    <div className={styles.contenedor}>
      <h1>Acá hay una lista de nuestros profesionales</h1>
      <h2>Estos son tus favoritos {favoritos.length}</h2>
      <div className={styles.dentistas}>
        {dentistas.map((dentista) => {
          return (
            <DentistaCard
              key={dentista.id}
              objeto={dentista}
              onClick={handleFav}
              link={{path:`/dentist/${dentista.id}`, info:"Ver Info"}}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
