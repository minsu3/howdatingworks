import * as React from "react";
import "../styles/home.css";
// import mainLogo from "../images/mainLogo.png";
import styles from "../styles/homepage.module.css";
import Header from "../components/header";
// import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.main}>
        <h1>How to Meet, Date, and Keep the Women You've Always Wanted</h1>

        <a href="#">Book Your Enlightenment Today</a>
      </div>

      <div className={styles.content}>
        <div className={styles.leftcolumn}>
          <div className={styles.leftcard}>
            <h2>Dating Solutions for Men</h2>
            <h5>Title description, Dec 7, 2021</h5>
            <div className={styles.fakeimg}>Image</div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>

          <div className={styles.leftcard}>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2021</h5>
            <div className={styles.fakeimg}>Image</div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>

          <div className={styles.leftcard}>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2021</h5>
            <div className={styles.fakeimg}>Image</div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
        </div>

        <div className={styles.rightcolumn}>
          <div className={styles.rightcard}>
            <h2>About Blair</h2>
            <div className={styles.fakeimg} style={{ height: "100px" }}>
              Image
            </div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>

          <div className={styles.rightcard}>
            <h3>Popular Post</h3>
            <div className={styles.fakeimg}>Image</div>
            <br />
            <div className={styles.fakeimg}>Image</div>
            <br />
            <div className={styles.fakeimg}>Image</div>
          </div>

          <div className={styles.rightcard}>
            <h3>Follow on Social Media</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
