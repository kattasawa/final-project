import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Adminpage from "pages/admin/adminpage"
import Storypage from "pages/story/storypage"
import Fetchshortstory from "./fetchshortstory"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Storypage /> */}
          {/* <Adminpage /> */}
          <Fetchshortstory />
          <Route exact path="/admin" component={Adminpage} />
          <Route exact path="/storypage" component={Storypage} />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
