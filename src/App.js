import React,{Component} from 'react';
import Quiz from './Quiz'
// import Navbar from './Navbar'
import sound from './sounds/welcome.wav'
import {FRUITS} from './Fruits';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.welcomeSound = this.welcomeSound.bind(this);
  }

  welcomeSound(){
    var a=new Audio(sound);
    a.play();
  }

  componentDidMount() { 
    window.addEventListener('load', this.welcomeSound()); // or this.imagestore() 
  } 

  render(){
  return (
    <div className="App">
      <Quiz questions={FRUITS}/>
    </div>
  );
}
}
export default App;
