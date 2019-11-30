import React, {Component} from "react";

class App extends Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prev => {
          return {
            isLoggedIn: !prev.isLoggedIn 
          }
        })
      }

    render(){
        return(
            <div>
                {
                    this.state.isLoggedIn ? 
                    <div>
                        <h2>You are logged in!</h2>
                        <button onClick={this.handleClick}>Logout</button>
                    </div> :
                    <div> 
                        <h2>You are logged out!</h2>  
                        <button onClick={this.handleClick}>LogIn</button>
                    </div>
                }
            </div>
        )
    }
}

export default App