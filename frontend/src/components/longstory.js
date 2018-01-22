import React from "react"

export default class Longstory extends React.Component {
  render() {
    return (
      <div className="longstory-container">
        <h2 className="heading">{this.props.heading}</h2>
        <div className="longtext">{this.props.longText}</div>
      </div>
    )
  }
}
