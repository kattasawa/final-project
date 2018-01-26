import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Adminpage from "pages/admin/adminpage"
import Storypage from "pages/story/storypage"
import Aboutpage from "pages/about/aboutpage"
import Startpage from "pages/start/startpage"
import AdminLoginPage from "pages/adminlogin/adminloginpage"
import Navigation from "./navigation"
import Footer from "./footer"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fetchContact: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/contactform").then(response => {
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({
        fetchContact: json
      })
    })
  }

  handleRemoveText = (id) => {
    const removeItem = this.state.fetchContact.filter(remove => {
      if (remove.id === id) {
        remove.id = !remove.id
      }
      return remove.id
    })

    console.log(removeItem)

    this.setState({
      fetchContact: removeItem
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Footer />
          <div className="app-wrapper">
            <Route exact path="/" component={Startpage} />
            <Route
              // exact
              // path="/admin"
              render={routeProps =>
                <Adminpage
                  {...routeProps}
                  questions={this.state.fetchContact}
                  key={this.state._id}
                  id={this.state._id}
                  delete={this.state.fetchContact.handleRemoveText} />
              } />
            <Route exact path="/story" component={Storypage} />
            <Route exact path="/about" component={Aboutpage} />
            <Route exact path="/adminlogin" component={AdminLoginPage} />
          </div>
        </div>
      </BrowserRouter>
    )
  }

}

export default App
