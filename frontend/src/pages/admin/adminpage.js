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
      caption: "",
      adminmessagereply: ""
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

getAdminMessagereply = () => {
  if (this.state.adminmessagereply) {
    return <p>{this.state.adminmessagereply}</p>
  }
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
      caption: "",
      adminmessagereply: "Innehållet publicerat!"
    }, () => { console.log("State has been reset", response, response.status) })
  ))
}

handleDeleteClick = id => {
  fetch(`http://localhost:8080/contactform/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  }).then(
    this.props.delete(id))
}

render() {
  return (
    <div className="Admin">

      <h2><span className="white-text">Administratörssida</span></h2>

      <div className="form-container">
        <h3>
          Innehåll till stories
        </h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" required placeholder="Rubrik" value={this.state.heading} onChange={this.handleHeading} />
          <textarea type="text" required placeholder="Puff till startsidan" value={this.state.shortText} onChange={this.handleShortText} />
          <textarea type="text" required placeholder="Text" value={this.state.longText} onChange={this.handleLongText} />
          <input type="text" required placeholder="Bildens url" value={this.state.image} onChange={this.handleImage} />
          <input type="text" required placeholder="Bildtext" value={this.state.caption} onChange={this.handleCaption} />
          <button>Publicera</button>
          <div className="message">
            {this.getAdminMessagereply()}
          </div>
        </form>
      </div>

      <div className="form-container green">
        <a href="http://assemble.io/docs/Cheatsheet-Markdown.html" target="_blank" rel="noopener noreferrer">
        <h3><span className="white-text">Här kan du läsa mer om att skriva med markdown <i class="fa fa-arrow-circle-right" aria-hidden="true" /> </span></h3></a>
      </div>

      <div className="contact-admin-container">
        <h3>
          Meddelanden
        </h3>

        <div>
          {this.props.questions.map(item => {
            return (
              <div className="contact-admin-box" >

                <p className="contact-admin-input">{item.date}</p>
                <p className="contact-admin-input">{item.name}</p>
                <p className="contact-admin-input">{item.email}</p>
                <p className="contact-admin-input">{item.message}</p>
                <button className="delete-button" onClick={() => this.handleDeleteClick(item._id)}><i className="fa fa-times" aria-hidden="true" /></button>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

}
