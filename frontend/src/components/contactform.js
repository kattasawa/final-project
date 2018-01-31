import React from "react"
// import Adminpage from "pages/admin/adminpage"
import "./contactform.css"

export default class Contactform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
      messagesreply: ""
    }
  }

handleName = event => {
  this.setState({
    name: event.target.value
  })
}

handleEmail = event => {
  this.setState({
    email: event.target.value
  })
}

handleMessage = event => {
  this.setState({
    message: event.target.value
  })
}

getMessagereply = () => {
  if (this.state.messagereply) {
    return <p>{this.state.messagereply}</p>
  }
}

handleSubmit = event => {
  event.preventDefault()
  fetch("https://admin-story-api.herokuapp.com/contactform", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
  }).then(response => (
    this.setState({
      name: "",
      email: "",
      message: "",
      messagereply: "Meddelandet skickat!"
    }, () => { console.log("State has been reset", response, response.status) })
  ))
}

render() {
  return (
    <div className="contactform-page">
      <h1>Kontakta oss</h1>
      <div className="underline" />
      <div className="contactform-container">
        <form onSubmit={this.handleSubmit}>
          <div className="two-in-a-row">
            <div className="first">
              <input type="text" required placeholder="Namn" value={this.state.name} onChange={this.handleName} />
            </div>
            <div className="second">
              <input type="email" required placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
            </div>
          </div>
          <textarea type="text" required placeholder="Meddelande" value={this.state.message} onChange={this.handleMessage} />
          <div className="message">
            {this.getMessagereply()}
          </div>
          <div className="skicka-btn-flex">
            <button id="skicka-btn">Skicka</button>
          </div>
        </form>
      </div>
    </div>
  )
}
}
