import { useEffect, useState } from "react";
import DentistaCard from "../../Components/DentistaCard";
import { Link } from "react-router-dom";
function Favs() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    handleFav();
  }, []);

  function handleFav() {
    const localData = localStorage.getItem("favoritos");
    const data = localData ? JSON.parse(localData) : [];
    setFavoritos(data)
  }


  return (
    <>
    {favoritos.length > 0 ? <><h1>Acá está la lista de tus odontologos favoritos</h1>
      <div className="sd">
        {favoritos.map((dentista) => {
          return (
            <DentistaCard
              key={dentista.id}
              objeto={dentista}
              link={<Link to={`/home`}>Volver</Link>}
            />
          );
        })}
      </div></> : <h1>No tienes ningún odontólogo en tu lista de favoritos</h1> }
      
    </>
  );
}

export default Favs