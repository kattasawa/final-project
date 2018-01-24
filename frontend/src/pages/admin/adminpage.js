import React from "react"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import "./style.css"

export default class Adminpage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heading: "",
      shortText: "",
      longText: "",
      image: "",
      caption: ""
    }
  }

handleHeading = event => {
  this.setState({
    heading: event.target.value
  })
}

handleShortText = event => {
  this.setState({
    shortText: event.target.value
  })
}

handleLongText = event => {
  this.setState({
    longText: event.target.value
  })
}

handleImage = event => {
  this.setState({
    image: event.target.value
  })
}

handleCaption = event => {
  this.setState({
    caption: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()
  fetch("http://localhost:8080/adminstory", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
  }).then(response => (
    this.setState({
      heading: "",
      shortText: "",
      longText: "",
      image: "",
      caption: ""
    }, () => { console.log("State has been reset", response, response.status) })
  ))
}

render() {
  const { questions } = this.props
  return (
    <div>
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Write heading here..." value={this.state.heading} onChange={this.handleHeading} />
          <input type="text" placeholder="Write short text here..." value={this.state.shortText} onChange={this.handleShortText} />
          <input type="text" placeholder="Write long text here..." value={this.state.longText} onChange={this.handleLongText} />
          <input type="text" placeholder="Put image url here" value={this.state.image} onChange={this.handleImage} />
          <input type="text" placeholder="Write caption here..." value={this.state.caption} onChange={this.handleCaption} />
          <button>Publicera</button>
        </form>
      </div>


      <div className="contact-admin-container">

          <p>{this.props.date}</p>
          <div>{this.props.name}</div>
          <div>{this.props.email}</div>
          <div>{this.props.message}</div>


        {/* <input type="text" value={this.props.name} />
        <input type="text" value={this.props.email} />
        <textarea type="text" value={this.props.message} /> */}

      </div>

    </div>
  )
}

}
