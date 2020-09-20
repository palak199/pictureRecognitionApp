import React,{Component} from 'react';
import Quiz from './Quiz'
// import Navbar from './Navbar'
import Main from './Main'
import sound from './sounds/welcome.wav'


class App extends Component {
  constructor(props) {
    super(props);
    this.welcomeSound = this.welcomeSound.bind(this);
  }

  welcomeSound(){
    var welcome=new Audio(sound);
    welcome.play();
  }

  componentDidMount() { 
    window.addEventListener('load', this.welcomeSound()); // or this.imagestore() 
  } 

  render(){
  return (
    <div>
      <Main/>
      
    </div>
  );
}
}
export default App;
