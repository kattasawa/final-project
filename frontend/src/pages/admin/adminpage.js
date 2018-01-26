import React from "react"
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

handleDeleteClick = () => {
  fetch("http://localhost:8080/contactform/:id", {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  }).then(
    this.props.delete(this.props.id)
  )
}


render() {
  return (
    <div>

      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" required placeholder="Write heading here..." value={this.state.heading} onChange={this.handleHeading} />
          <input type="text" required placeholder="Write short text here..." value={this.state.shortText} onChange={this.handleShortText} />
          <input type="text" required placeholder="Write long text here..." value={this.state.longText} onChange={this.handleLongText} />
          <input type="text" required placeholder="Put image url here" value={this.state.image} onChange={this.handleImage} />
          <input type="text" required placeholder="Write caption here..." value={this.state.caption} onChange={this.handleCaption} />
          <button>Publicera</button>
        </form>
      </div>

      <div className="contact-admin-container">
        {this.props.questions.map(item => {
          return (
            <div>
              <div>{item._id}</div>
              <div>{item.date}</div>
              <div>{item.name}</div>
              <div>{item.email}</div>
              <div>{item.message}</div>
              <button className="delete-button" onClick={this.handleDeleteClick}><i className="fa fa-times" aria-hidden="true" />Ta bort</button>
            </div>
          )
        })}
      </div>

    </div>
  )
}

}
