import * as React from "react";
import Header from "../components/header";
import styles from "../styles/blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.app}>
        <div>
          <h1>Blog</h1>
          <p>Blog Description</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
