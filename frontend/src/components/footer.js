import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"

import "./footer.css"

const year = moment().format("YYYY")

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="flex-row">
            <ul>
              <li><Link to="/login">Admin</Link></li>
            </ul>
            <i className="fa fa-copyright" aria-hidden="true"><span className="copyright>">{year}</span></i>
          </div>
        </div>
      </footer>
    )
  }
}
