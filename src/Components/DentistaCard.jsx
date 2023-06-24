import { Link } from 'react-router-dom';
import styles from './DentistaCard.module.css'
function DentistaCard(props) {
  return (
    <div className={styles.dentista}>
      <img className={styles.imagen}
        src="https://w7.pngwing.com/pngs/649/22/png-transparent-dentistry-toothbrush-cute-dental-s-hand-boy-cartoon-thumbnail.png"
        alt={props.username}
      />
      <h2>{props.name}</h2>
      <p>@{props.username}</p>
      {props.link && props.link}
    </div>
  );
}

export default DentistaCard;
