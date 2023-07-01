import { useContext } from "react";
import DentistaCard from "../../Components/DentistaCard";
import styles from "./Favs.module.css";
import { FavoritosContext } from "../../Context/FavoritosContextProvider";

function Favs() {
  const { favoritos, handleFav } = useContext(FavoritosContext);

  return (
    <div className={styles.contenedor}>
      {favoritos.length > 0 ? (
        <>
          <h1>Acá está la lista de tus odontólogos favoritos</h1>
          <div className={styles.dentistas}>
            {favoritos.map((dentista) => {
              return (
                <DentistaCard
                  key={dentista.id}
                  objeto={dentista}
                  button={{
                    onClick: () => {
                      handleFav(dentista);
                    },
                    info: "Eliminar de favoritos",
                  }}
                  link={{ path: `/dentist/${dentista.id}`, info: "Ver Info" }}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h1>No tienes a ningún odontólogo en tu lista de favoritos</h1>
      )}
    </div>
  );
}

export default Favs;
