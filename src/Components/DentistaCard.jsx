import { Link } from 'react-router-dom';
import styles from './DentistaCard.module.css'
function DentistaCard(props) {
  return (
    <div className={styles.dentista}>
      <img className={styles.imagen}
        src="https://w7.pngwing.com/pngs/649/22/png-transparent-dentistry-toothbrush-cute-dental-s-hand-boy-cartoon-thumbnail.png"
        alt={props.username}
      />
      <h2>{props.objeto.name}</h2>
      <p>@{props.objeto.username.toLowerCase()}</p>
      {props.onClick && <button onClick={()=>props.onClick(props.objeto)}>Fav</button>}
      {props.link && <Link className={styles.link} to={props.link.path}>{props.link.info}</Link>}
    </div>
  );
}

export default DentistaCard;
