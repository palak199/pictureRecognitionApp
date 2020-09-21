import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import correct_ans from './sounds/right.mp3'
import wrong_ans from './sounds/wrong.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle,faStopCircle } from '@fortawesome/free-solid-svg-icons'


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
      //setMessage('')

    },

  }
    
  ]
  
  const correctSound=(message)=>{
  
    var a=new Audio(message==='Correct'? correct_ans: wrong_ans);
    a.play(); 
  
    setMessage("")
  
  };
  

  const { transcript } = useSpeechRecognition({ commands })

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }
  
  return (
    <div>
      <FontAwesomeIcon className="icon" role="button" onClick={SpeechRecognition.startListening} size="3x" icon={faPlayCircle}/>
      <span><FontAwesomeIcon className="icon" role="button" onClick={SpeechRecognition.stopListening} size="3x" icon={faStopCircle}/></span>
      <h3>you think it is {transcript}</h3>
      {message!=='' && correctSound(message)}
      {message!=='' && <h3>You are {message}</h3>}
     
    </div>
  )
}
export default Speech;