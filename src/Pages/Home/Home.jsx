import { useEffect, useState } from "react"
import DentistaCard from "../../Components/DentistaCard"
import styles from './Home.module.css'
import { Link } from "react-router-dom"


//Donde tendrán que renderizar una card por cada dentista devuelto por la API.
function Home() {
    
    const [dentistas, setDentistas] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData() {
        const data = await( fetch("https://jsonplaceholder.typicode.com/users"))
        const dentistas = await data.json()
        setDentistas(dentistas)
    }
  return (
    <div className={styles.dentistas}>
        {dentistas.map((dentista)=>{
            return (
                <DentistaCard key={dentista.id} {...dentista} link={<Link to={`/dentist/${dentista.id}`}>Ver Info</Link>}/>
            )
        })}
    </div>
  )
}

export default Home