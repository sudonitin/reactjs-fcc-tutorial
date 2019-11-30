import React, {Component} from "react";

class App extends Component{
    constructor(){
        super();
        this.state = {
            time: new Date() 
        };
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillMount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            time: new Date()
        });
    }

    render(){
        return(
            <div>
                <h1>Hi nitin</h1>
                <h3>The time is {this.state.time.toLocaleTimeString()}</h3>
            </div>
        );
    }
}

export default App