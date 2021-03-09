import * as React from "react";
import { Link } from "gatsby";
import "../styles/home.css";
import "../images/mainLogo.png";
import styles from "../styles/homepage.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/mainLogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

function HeaderFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const IndexPage = () => {
  return (
    <div>
      <div>
        <div className={styles.header}>
          <div className={styles.topnav} id="myTopnav">
            <a href="#" className={styles.mainLogo}>
              <img src="mainLogo.png" />
            </a>
            <a href="#">News</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
            <a className={styles.icon} onClick={HeaderFunction}>
              <FontAwesomeIcon icon={faBars} />
            </a>
          </div>
        </div>

        <div className={styles.main}>
          <h2 style={{ fontSize: "50px", color: "white" }}>How Dating Works</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.leftcolumn}>
            <div className={styles.card}>
              <h2>TITLE HEADING</h2>
              <h5>Title description, Dec 7, 2017</h5>
              <div className={styles.fakeimg}>Image</div>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
            </div>

            <div className={styles.card}>
              <h2>TITLE HEADING</h2>
              <h5>Title description, Sep 2, 2017</h5>
              <div className={styles.fakeimg}>Image</div>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
            </div>

            <div className={styles.card}>
              <h2>TITLE HEADING</h2>
              <h5>Title description, Sep 2, 2017</h5>
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
            <div className={styles.card}>
              <h2>About Me</h2>
              <div className={styles.fakeimg} style={{ height: "100px" }}>
                Image
              </div>
              <p>
                Some text about me in culpa qui officia deserunt mollit anim..
              </p>
            </div>

            <div className={styles.card}>
              <h3>Popular Post</h3>
              <div className={styles.fakeimg}>Image</div>
              <br />
              <div className={styles.fakeimg}>Image</div>
              <br />
              <div className={styles.fakeimg}>Image</div>
            </div>

            <div className={styles.card}>
              <h3>Follow Me</h3>
              <p>Some text..</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div>Footer</div>
      </div>
    </div>
  );
};

export default IndexPage;
