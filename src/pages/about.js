import * as React from "react";
import Header from "../components/header";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.app}>
        <div>
          <h1>About</h1>
          <div className={styles.fakeimg}>Image</div>
          <p>
            Blair is a dating and relationship coach who helps men achieve their
            ideal dating lives. His free Dating Bootcamp video series teaches
            the essentials of getting a date, getting a girlfriend, and creating
            a healthy relationship for any man to meet, date, and keep the woman
            of his dreams. He publishes additional attraction and relationship
            skills and answers viewer questions on his YouTube channel, blog,
            podcast, and social media. Click here to book a session with Blair.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
