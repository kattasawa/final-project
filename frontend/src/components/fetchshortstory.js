import React from "react"

import Shortstory from "./shortstory"

export default class Fetchshortstory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      latestShortStory: [{}]
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/adminstory/latest").then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        latestShortStory: json
      })
    })
  }

  render() {
    return (
      <div className="shortstory-container">
        {this.state.latestShortStory.map(shortstory => {
          return <Shortstory
            key={shortstory._id}
            id={shortstory._id}
            heading={shortstory.heading}
            shortText={shortstory.shortText}
            // image={shortstory.image}
            caption={shortstory.caption} />
        })}
      </div>
    )
  }
}
