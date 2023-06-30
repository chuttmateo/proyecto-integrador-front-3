import { useContext } from "react";
import DentistaCard from "../../Components/DentistaCard";
import styles from "./Home.module.css";
import { OdontologosContext } from "../../Context/OdontologosContextProvider";
import { Link } from "react-router-dom";
import { FavoritosContext } from "../../Context/FavoritosContextProvider";

function Home() {

  const odontologos = useContext(OdontologosContext);
  const {favoritos, handleFav} = useContext(FavoritosContext);
  
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.title}>
        Acá hay una lista de nuestros profesionales
      </h1>
      <p className={favoritos.length == 0 ? styles.hidden : ""}>
        <Link to={"/favs"} className={styles.link}>
          Tienes {favoritos.length}{" "}
          {favoritos.length == 1 ? "odontologo" : "odontologos"} en la lista de
          favoritos.
        </Link>
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
