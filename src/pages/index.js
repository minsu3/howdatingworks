import * as React from "react"
import { Link } from "gatsby"
import "../styles/home.css"

const container = {
  minHeight: "100vh",
  padding: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

const main = {
  padding: "5rem 0",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}

const header = {
  color: "black",
  fontSize: "30px",
  width: "100%",
  padding: "2rem",
  alignItems: "center",
  display: "flex",
  flexDirection: "space between"
}

const homeTitle = {
  color: "rgb(235, 146, 130)",
  fontWeight: 100,
  fontSize: "34px",
  borderRadius: "5px",
  textDecoration: "none",
}

const nav = {
  textAlign: "center",
}

const title = {
  margin: 0,
  lineHeight: 1.15,
  fontSize: "4rem",
  width: "650px",
  color: "rgb(235, 146, 130)",
  fontFamily: "Noto Serif JP",
  fontWeight: 100,
}

const contactContainer = {
  float: "right",
}

const contact = {
  padding: "10px 30px 10px 30px",
  backgroundColor: "rgb(235, 146, 130)",
  color: "white",
  fontSize: "18px",
}

const footer = {
  width: "100%",
  height: "100px",
  borderTop: "1px solid #eaeaea",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
}

const logo = {
  height: "1em",
}

// markup
const IndexPage = () => {
  return (
    <div style={container}>
      <header style={header}>
        <nav style={homeTitle}>
          <Link to="/overview">
            <p>How Dating Works</p>
          </Link>
        </nav>
        <nav style={nav}>
          <Link to="/about-me">
            <p>About Me</p>
          </Link>
          <Link to="/core-principles">
            <p>Core Principles</p>
          </Link>
          <Link to="/blog">
            <p>Blog</p>
          </Link>
        </nav>
        <nav style={contactContainer}>
          <Link to="/exercise">
            <p style={contact}>Contact</p>
          </Link>
        </nav>
      </header>

      <main style={main}>  
        <h1 style={title}>
          How to Meet, Date, and Keep the Women You've Always Wanted
        </h1>

        <a href="https://facebook.com/">
          Book your Enlightenment Today
        </a>
      </main>

      <footer style={footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" style={logo} />
        </a>
      </footer>
    </div>
  )
}

export default IndexPage
