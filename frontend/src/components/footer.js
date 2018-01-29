import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"

import "pages/start/style.css"

const year = moment().format("YYYY")

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <i class="fa fa-copyright" aria-hidden="true">{year}</i>
        <ul>
          <li><Link to="/adminlogin">Admin</Link></li>
        </ul>
      </footer>
    )
  }
}
