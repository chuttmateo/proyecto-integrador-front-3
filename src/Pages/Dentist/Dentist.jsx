import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./Dentist.module.css";

function Dentist() {
  const { id } = useParams();

  const [dentista, setDentista] = useState("");
  const [loadig, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const dentista = await data.json();
    setDentista(dentista);
    setLoading(false);
  }

  const navigate = useNavigate();

  return (
    <div className={styles.contenedor}>
      {loadig ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Acá está la información del odontólogo que estabas buscando</h1>
          <div className={styles.dentista}>
            <h1>Nombre: {dentista.name}</h1>
            <h2>Email: {dentista.email}</h2>
            <h2>Usuario IG: @{dentista && dentista.username.toLowerCase()}</h2>
            <h2>Página web: {dentista.website}</h2>
            <button className={styles.button} onClick={()=>{navigate(-1)}}>Volver</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Dentist;
