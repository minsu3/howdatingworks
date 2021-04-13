import * as React from "react";
import Header from "../components/header";
import styles from "../styles/coaching.module.css";

const Coaching = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.app}></div>
      </div>
    </div>
  );
};

export default Coaching;
