import React from "react"

function Joke (props){
  console.log(props.quest);
  if( typeof props.quest === 'undefined'){
    return (
      <p>
        <b>Joke : {props.answe}</b>
      </p>
    )
  }
  else{
    return (
        <p>
          <b>Question: {props.quest}</b> 
            <br />Answer: {props.answe}
        </p>
    )
  }
}

function App(){
  return(
    <div>
      <Joke
        quest="hello"
        answe="world"
      />
      <Joke 
        quest = "hi" answe = "dude"
      />
      <Joke 
        quest = "aur" answe = "bol"
      />
      <Joke 
        answe = "apna time ayega"
      />
    </div>
  )
}

export default App