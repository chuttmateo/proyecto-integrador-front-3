import { useContext, useEffect, useState } from "react";
import DentistaCard from "../../Components/DentistaCard";
import styles from "./Home.module.css";
import { OdontologosContext } from "../../Context/OdontologosContextProvider";

function Home() {
  const odontologos = useContext(OdontologosContext);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    traerFavs();
  }, []);

  function traerFavs() {
    const localData = localStorage.getItem("favoritos");
    const data = localData ? JSON.parse(localData) : [];
    setFavoritos(data);
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
      <h1 className={styles.title}>Acá hay una lista de nuestros profesionales</h1>
      <p className={favoritos.length == 0 ? styles.hidden : ""}>
        Tienes {favoritos.length}{" "}
        {favoritos.length == 1 ? "odontologo" : "odontologos"} en la lista de
        favoritos.
      </p>
      <div className={styles.dentistas}>
        {odontologos.map((dentista) => {
          return (
            <DentistaCard
              key={dentista.id}
              objeto={dentista}
              button={{
                onClick: handleFav,
                info: favoritos.find((d) => d.id == dentista.id)
                  ? "Quitar favorito"
                  : "Añadir favorito",
              }}
              link={{ path: `/dentist/${dentista.id}`, info: "Ver Info" }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
