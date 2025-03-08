import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Bryan Maaño. All rights reserved</p>
        </div>
    </footer>
  );
};

export default Footer;
