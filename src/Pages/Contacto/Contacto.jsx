// Donde deberán implementar un form (con sus validaciones pertinentes) que capture la información del usuario que desea contactar a la empresa. Los campos serán los siguientes:
// Nombre completo (con longitud mayor a 5).
// Email (con formato correcto de email).
// En caso de haber un error, mostrar el siguiente mensaje de error: “Por favor verifique su información nuevamente”.
// Una vez enviado el formulario, deberán mostrar un mensaje de éxito que contenga el siguiente formato: “Gracias [nombre del usuario], te contactaremos cuando antes vía mail”.

import { useState } from "react";
import styles from "./Contacto.module.css";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [registro, setRegistro] = useState("");
  function handleSubmit(e) {
    setRegistro("")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.preventDefault();
    if (nombre.trim().length < 5) {
      setError("Pon tu nombre completo");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Verifica que tu correo sea correcto");
      return;
    }
    setError("");
    setRegistro(`Gracias ${nombre}, te contactaremos cuando antes vía mail`)
  }

  return (
      <div className={styles.contenedor}>
        <form className={styles.formulario} onSubmit={handleSubmit}>
        <h1>Ingresa tu info de contacto, te estaremos llamando a la brevedad</h1>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={styles.button}>Go</button>
          {error && <p className={styles.error}>{error}</p>}
          {registro && <h2>{registro}</h2>}
        </form>
      </div>
  );
}

export default Contacto;
