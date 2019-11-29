import React, { Component } from "react";

class App extends Component{
  constructor(){
    super();
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleHover = this.handleHover.bind(this)
  }

  handleClick(){
    this.setState(prev => {
      return {
        count: prev.count + 3
      }
    })
  }

  handleHover(){
    this.setState(prev => {
      return {
        count: prev.count - 2
      }
    })
  }

  render(){
    return(
      <div>
        <center>
          <h3>{this.state.count}</h3>
          <br/>
          <button onClick = {this.handleClick}>Add</button>
          <br/>
          <button onMouseOver = {this.handleHover}>Sub</button>
        </center>
      </div>
    )
  }
}

export default App