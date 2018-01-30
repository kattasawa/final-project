import React from "react"

import "./hero.css"

export default class Hero extends React.Component {

  render() {
    return (
      <div className="slider-container">
        <div className="slider">
          <div className="slide1" />
          <div className="slide2" />
          <div className="slide3" />
          <div className="slide4" />
          <div className="slide5" />
        </div>
      </div>
    )
  }
}
