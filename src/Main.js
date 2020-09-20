import React,{useState} from 'react'
import './Main.css'
import Quiz from './Quiz'
import {FRUITS} from './Fruits';
export default function Main(){
    
    const [state, toggle] = useState(false);

    return(
        <div>
               { !state && <div role="button" onClick={()=>toggle(true)} className="Main">
                <div className="Main-div">click anywhere to start the quiz</div>
            </div>}
               { state && <Quiz questions={FRUITS}/>}
            </div>
    )
}