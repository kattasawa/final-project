import React from "react"
import { Link } from "react-router-dom"

import "../pages/startpage/style.css"

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul>
          <li><Link to="/adminlogin">Admin</Link></li>
        </ul>
      </footer>
    )
  }
}
