import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.div}>
      <p>It works on my machine ¯\_(ツ)_/¯</p>
      <a className={styles.link} href="https://github.com/chuttmateo/proyecto-integrador-front-3">
        Github
      </a>
    </div>
  );
}

export default Footer;
