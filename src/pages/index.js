import * as React from "react";
import Helmet from "react-helmet";
import "../styles/home.css";
import styles from "../styles/homepage.module.css";
import Header from "../components/header";
import favicon from "../images/hdw.png";

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <title>How Dating Works</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      {/* <Header />
      <section className={styles.first}>
        <h1 style={{ userSelect: "none" }}>
          MEET, DATE, AND KEEP THE WOMAN OF YOUR DREAMS.
        </h1>
        <a href="#" style={{ userSelect: "none" }}>
          Book A Session With Blair
        </a>
      </section>

      <section className={styles.second}>
        <div className={styles.secondTitle} style={{ userSelect: "none" }}>
          HOW I HELP YOU BE ATTRACTIVE, MEET WOMEN, GET DATES, MEET YOUR DREAM
          GIRL, AND LIVE HAPPILY EVER AFTER
        </div>
        <div className={styles.fakeimg}>Image</div>
      </section>

      <section className={styles.third}>
        <h1 style={{ userSelect: "none" }}>BOOK A SESSION WITH BLAIR</h1>
        <p style={{ userSelect: "none" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
          minim veniam, quis nostrud.
        </p>
        <div className={styles.formContainer}>
          <input placeholder="Your First Name" />
          <input placeholder="Your Email Address" />
          <button>Submit</button>
        </div>
      </section>

      <section className={styles.fourth}>
        <h1 style={{ userSelect: "none" }}>MORE STUFF ABOUT STUFF</h1>
        <p style={{ userSelect: "none" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section> */}

      <footer className={styles.footer}>
        <p>&copy; 2021 Blair Meehan All Right Reserved</p>
        {/* <p>
          Developed by <a href="#">Minsu K</a>
        </p> */}
      </footer>
    </div>
  );
};

export default IndexPage;
