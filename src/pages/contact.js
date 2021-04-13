import * as React from "react";
import Header from "../components/header";
import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.app}></div>
      </div>
    </div>
  );
};

export default Contact;
