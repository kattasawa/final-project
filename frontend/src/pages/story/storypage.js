import React from "react"

import Longstory from "components/longstory"
//import Delete from "components/deletestory"
import "./style.css"

export default class Storypage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      storiesList: []
    }
  }

  componentDidMount() {
    fetch("https://admin-story-api.herokuapp.com/adminstory").then(response => {
      return response.json()
    }).then(json => {
      const reversedJson = json.reverse()
      console.log(json)
      this.setState({ storiesList: reversedJson })
    })
  }

  render() {
    const storiesListToRender = this.state.storiesList
    return (
      <div className="stories-list">
        {storiesListToRender.map(story => {
          return <Longstory
            key={story._id}
            id={story._id}
            heading={story.heading}
            longText={story.longText}
            image={story.image}
            caption={story.caption} />
        })}
        {/* <Delete /> */}
      </div>
    )
  }
}
