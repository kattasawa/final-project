import React from "react"

import "../pages/story/style.css"

export default class Longstory extends React.Component {
  render() {
    return (
      <div className="longstory-container">
        <img src={this.props.image} alt="" />
        <p className="caption">{this.props.caption}</p>
        <h2 className="heading">{this.props.heading}</h2>
        <div className="longtext">{this.props.longText}</div>
      </div>
    )
  }
}
