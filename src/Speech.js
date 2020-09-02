import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

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
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      {/* <button onClick={resetTranscript}>Reset</button> */}
      <p>{transcript}</p>
      {message!=='' &&
        <h2>
          You are {message} .
        </h2>
      }
      
    </div>
  )
}
export default Speech;