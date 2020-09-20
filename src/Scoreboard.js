import React from 'react'

class Scorebox extends React.Component {
    render(){
      return(
        <div>
          <h3>Fruit {this.props.current} out of {this.props.total} </h3>
          <button className="score-div">Score: {this.props.score}</button>
        </div>
      )
    }
  }
  
  export default Scorebox;