import React, {Component} from "react";

class App extends Component{
    constructor(){
        super();
        this.state = {
            text: ""
        };
        this.setCookie = this.setCookie.bind(this);
        this.getCookie = this.getCookie.bind(this);
        this.checkCookie = this.checkCookie.bind(this);
    }

    setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
      
      getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return Number(c.substring(name.length, c.length));
          }
        }
        return "";
      }
      
      checkCookie() {
        var user = this.getCookie("countDownTime");
        if (user > (new Date().getTime())) {
          var x = setInterval(() => {
    
            var now = new Date().getTime();
              
            var distance = user - now;
              
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            this.setState({
               text: "time left is"+seconds+"s" //error line
            });
            if (distance < 0) {
              clearInterval(x);
              this.setState({
                  text: "Time's Up"
              });
            }
          }, 1000);
    
        }
        else {  
          if(user < (new Date().getTime())){
            this.setState({
                text: "Cookie expired, executing once again!"
            });
            setTimeout(function(){return true;},3000);
            this.setCookie("countDownTime", (new Date().getTime()+60000), 30);
            this.checkCookie();  
          }
        }
      }


    componentDidMount(){
        // this.timerID = setInterval(
        //     () => this.tick(), 1000
        // );
        // this.setState({
        //     dest: new Date().getTime()+60000
        // });
        this.checkCookie();
    }

    // componentWillUnmount(){
    //     clearInterval(this.timerID);
    //     this.setState({
    //         dest: 0
    //     })
    // }

    // tick(){
    //     this.setState({
    //         time: new Date().getTime()
    //     });
    // }

    render(){
        // let text = this.state.dest > this.state.time ? 
        // 'The time left is ' + Math.floor(((this.state.dest-this.state.time) % (1000 * 60)) / 1000) + 's' : 
        // "Time's Up";
        return(
            <div>
                <h1>Hi nitin</h1>
                <h3>{this.state.text}</h3>
            </div>
        );
    }
}

export default App