import { useEffect, useState } from "react";
import DentistaCard from "../../Components/DentistaCard";
import styles from "./Favs.module.css";

function Favs() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    traerFavs();
  }, []);

  function traerFavs() {
    const localData = localStorage.getItem("favoritos");
    const data = localData ? JSON.parse(localData) : [];
    setFavoritos(data)
  }

  return (
    <div className={styles.contenedor}>
      {favoritos.length > 0? (
        <>
          <h1>Acá está la lista de tus odontólogos favoritos</h1>
          <div className={styles.dentistas}>
            {favoritos.map((dentista) => {
              return (
                <DentistaCard
                  key={dentista.id}
                  objeto={dentista}
                  link={{path:`/home`, info:"Volver"}}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h1>No tienes ningún odontólogo en tu lista de favoritos</h1>
      )}
    </div>
  );
}

export default Favs;
