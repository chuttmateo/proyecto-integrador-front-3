import { useEffect, useState } from "react"
import DentistaCard from "../../Components/DentistaCard"
import { Link, useParams } from "react-router-dom"
import styles from './Dentist.module.css'

function Dentist() {

  const {id} = useParams()

  const [dentista, setDentista] = useState("")

  useEffect(()=>{
    fetchData()
},[])

async function fetchData() {
    const data = await( fetch(`https://jsonplaceholder.typicode.com/users/${id}`) )
    const dentista = await data.json()
    setDentista(dentista)
}

console.log(dentista);
  return (
    // <DentistaCard {...dentista} link={<Link to={"/home"}>Volver</Link>}/>
    <div className={styles.contenedor}>
      <h1>Acá está la información del odontólogo que estabas buscando</h1>
    <div className={styles.dentista}>
      <h1>{dentista.name}</h1>
      <h2>{dentista.email}</h2>
      <h2>@{dentista.username}</h2>
      <h2>{dentista.website}</h2>
    </div>
    </div>
  )
}

export default Dentist