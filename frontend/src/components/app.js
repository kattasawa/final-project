import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Adminpage from "pages/admin/adminpage"
import Storypage from "pages/story/storypage"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Storypage /> */}
          {/* <Adminpage /> */}
          <Route exact path="/admin" component={Adminpage} />
          <Route exact path="/storypage" component={Storypage} />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
