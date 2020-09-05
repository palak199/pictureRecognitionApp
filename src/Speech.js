import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import correct_ans from './sounds/right_ans.mp3'
import wrong_ans from './sounds/wrong_ans.mp3'

function correctSound(message){
  var a=new Audio(message==='Correct'?correct_ans:wrong_ans);
  a.play();
};

const Speech = (props) => {
  const [message, setMessage] = useState('')
  const fruits=props.answer
  const commands = [
    {
      command: ':fruit',
      callback: (fruit) => {
       
        if(fruit.toLowerCase()===fruits){
        setMessage("Correct")
        props.callbackFromParent(1);
}
        else {
          setMessage("Wrong")
          props.callbackFromParent(0);
       
      }
      console.log(props.callbackFromParent)
    },

  }
    
  ]

  const { transcript } = useSpeechRecognition({ commands })

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div>
      <p>say we're listening</p>
      
      <button onClick={SpeechRecognition.startListening}>start</button>
      <span></span><button onClick={SpeechRecognition.stopListening}>Stop</button>
      {/* <button onClick={resetTranscript}>Reset</button> */}
      <p>{transcript}</p>
      {message!=='' && correctSound(message) &&
        <h2>
          You are {message} .
        </h2>
        
      }
     
    </div>
  )
}
export default Speech;