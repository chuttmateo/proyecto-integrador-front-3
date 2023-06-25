import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.div}>
      <p>It works on my machine ¯\_(ツ)_/¯</p>
      <a className={styles.link} href="http://github.com/chuttmateo">
        Github
      </a>
    </div>
  );
}

export default Footer;
