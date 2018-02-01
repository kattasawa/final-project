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
          <div className="contacts">
            <h5>Kontakta oss</h5>
            <div className="underline" />
            stottamamma@gmail.com <br />
            070-291 96 12
            <div className="icons">
              <img src="/images/facebook-icon.png" alt="facebook-icon" />
              <img id="insta" src="/images/instagram-icon.png" alt="insta-icon" />
            </div>
          </div>

          <div className="flex-admin-copy">
            <ul>
              <li>&copy;{year}</li>
              <li><Link to="/login">Admin Login</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}
