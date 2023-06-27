import { Link } from "react-router-dom";
import styles from "./DentistaCard.module.css";
function DentistaCard(props) {
  return (
    <div className={styles.dentista}>
      <img
        className={styles.imagen}
        src="https://i.pinimg.com/474x/e7/69/9c/e7699c46a2cd633bbb41f1606b597252.jpg"
        alt={props.username}
      />
      <h2 className={styles.h2}>{props.objeto.name}</h2>
      <p className={styles.p}>@{props.objeto.username.toLowerCase()}</p>
      {props.button && (
        <button
          className={styles.button}
          onClick={() => props.button.onClick(props.objeto)}
        >
          {props.button.info}
        </button>
      )}
      {props.link && (
        <Link className={styles.link} to={props.link.path}>
          {props.link.info}
        </Link>
      )}
    </div>
  );
}

export default DentistaCard;
