import React from "react"

export default class Contactform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: ""
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

handleSubmit = event => {
  event.preventDefault()
  fetch("http://localhost:8080/contactform", {
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
      message: ""
    }, () => { console.log("State has been reset", response, response.status) })
  ))
}

render() {
  return (
    <div className="contactform-container">
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Namn" value={this.state.name} onChange={this.handleName} />
        <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
        <input type="text" placeholder="Meddelande" value={this.state.message} onChange={this.handleMessage} />
        <button>Skicka</button>
      </form>
    </div>
  )
}
}
