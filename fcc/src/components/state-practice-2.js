import React, { Component } from "react";

class App extends Component{
  constructor(){
    super()
    this.state = {
      isLoggedIn : false
    }
  }

  render(){
    if(this.state.isLoggedIn){
      return(
        <h1>You are logged In</h1>
      )
    }
    else{
      return(
        <h1>You are logged out!</h1>
      )
    }
  }
}
export default App