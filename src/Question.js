import React from 'react';
import Speech from './Speech';

class Question extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        current_marks:0
      }
      this.handleMarks = this.handleMarks.bind(this);
    }
    handleMarks(e) {
      this.props.callbackFromParent(e)
      //this.setState({ current_marks: e });
      //this.props.onChoiceChange(e.target.value);
    }
    render() {
        const question = this.props.question;
        return(
          <div className="well">
            <hr />
            <img src={require(`${question.text}`)} width={500} height={300}></img>
            
            <hr />
            <Speech 
            answer={question.correct}
            callbackFromParent={this.handleMarks}
            />
            
          </div>
        )
    }
  }
  
  export default Question;