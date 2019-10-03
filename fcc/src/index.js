import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyInfo(){
    // return 
    return  <div>
                <h1>hello nitin</h1>
                <p>My name is nitin Sahu, I love coding. I am 21 years old</p>
                <ul>
                    <li>Goa</li>
                    <li>Puri</li>
                    <li>Pune</li>
                </ul>
            </div>
}

ReactDOM.render(<MyInfo />,document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
