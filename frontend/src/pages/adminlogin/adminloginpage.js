import React from "react"
import AdminLoginForm from "components/adminloginform"

export default class AdminLoginPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      accessToken: "",
      userId: ""
    }
  }

  //handle admin login

  handleLoginSuccess = user => {
    this.setState({
      accessToken: user.accessToken,
      userId: user._id
    })
  }

  isLoggedIn = () => (
    this.state.accessToken && this.state.userId
  )

  render() {
  return (
    <div>
      {this.isLoggedIn()
        ? <h1>Welcome!</h1>
        : <AdminLoginForm onLoginSuccess={this.handleLoginSuccess} />}
    </div>
  )
}

}
