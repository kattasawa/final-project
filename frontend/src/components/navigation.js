import React from "react"
import { Link } from "react-router-dom"

// import "pages/start/style.css"
import "./navigation.css"

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="Header">
        <nav className="header-container">

          <input id="hamburger" type="checkbox" className="hamburger-checkbox" />
          <label className="hamburger" htmlFor="hamburger">
            <div className="bar bar1" />
            <div className="bar bar2" />
            <div className="bar bar3" />
          </label>

          <div className="logo">
            <Link to="/">
              <img src="/images/logo_stotta_mamma_black.svg" alt="logo" />
            </Link>
          </div>

          <div className="flex-menu">
            <ul className="desktop-menu">
              <li><Link to="/story">Story</Link></li>
              <li><Link to="/about">Om oss</Link></li>
            </ul>
          </div>

          <div className="menu">
            <ul className="menu-list">
              <li><Link to="/story">Story</Link></li>
              <li><Link to="/about">Om oss</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
