import React from "react"
import Link from "gatsby-link"

const Menu = () => (
  <div
    style={{
      background: "coral",
      paddingTop: "10px",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          About
        </Link>
      </li>
      <li>
        <Link to="/services" style={{ textDecoration: "none", color: "black" }}>
          Services
        </Link>
      </li>
      <li>
        <Link to="/blog" style={{ textDecoration: "none", color: "black" }}>
          Blog
        </Link>
      </li>
    </ul>
  </div>
)

export default Menu
