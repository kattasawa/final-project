import React from "react"
import { Link } from "react-router-dom"

import "../pages/startpage/style.css"

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <div className="logo"><Link to="/start"> Logo </Link>
        </div>
        <ul>
          <li><Link to="/story">Story</Link></li>
          <li><Link to="/about">Om oss</Link></li>
        </ul>
      </nav>
    )
  }
}
