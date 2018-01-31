import React from "react"

import Shortstory from "./shortstory"

export default class Fetchshortstory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      latestShortStory: {}
    }
  }

  componentDidMount() {
    fetch("https://admin-story-api.herokuapp.com/latest").then(response => {
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({
        latestShortStory: json
      })
    })
  }

  render() {
    return (
      <div className="shortstory-view">
        <Shortstory
          id={this.state.latestShortStory._id}
          image={this.state.latestShortStory.image}
          heading={this.state.latestShortStory.heading}
          shortText={this.state.latestShortStory.shortText} />
      </div>
    )
  }
}
