import React from "react"
import Adminpage from "pages/admin/adminpage"
import Storypage from "pages/story/storypage"

class App extends React.Component {

  render() {
    return (
      <div>
        <Storypage />
        {/* <Adminpage /> */}
      </div>
    )
  }

}

export default App
