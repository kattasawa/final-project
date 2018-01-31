import React from "react"

import "./grid.css"

export default class Grid extends React.Component {

  render() {
    return (
      //Photo Grid
      <div className="grid-container">
        <div className="row">
          <div className="column">
            <img src="/images/doula_birth.jpg" />
            <img src="/images/DOULA-4.jpg" />
            <img src="/images/gravidmage_blackwhite.jpg" />
            <img src="/images/women_birth.png" />
          </div>
          <div className="column">
            <img src="/images/herbs_cross.jpg" />
            <img src="/images/help_doula.jpg" />
            <img src="/images/herb_earth.jpg" />
            <img src="/images/DOULA-1.jpg" />
          </div>
        </div>
      </div>
    )
  }
}
