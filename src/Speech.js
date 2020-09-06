import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import correct_ans from './sounds/right_ans.mp3'
import wrong_ans from './sounds/wrong_ans.mp3'
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
      
      <p>say we're listening</p>
      <FontAwesomeIcon onClick={SpeechRecognition.startListening} size="6x" icon={faPlayCircle}/>
      <FontAwesomeIcon onClick={SpeechRecognition.stopListening} size="6x" icon={faStopCircle}/>
      <p>{transcript}</p>
      {message!=='' && correctSound(message)
      }
      {message!=='' && <p>You are {message}</p>
    }
     
    </div>
  )
}
export default Speech;