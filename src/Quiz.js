import React from 'react';
import Results from './Results';
import Scorebox from './Scoreboard';
import Question from './Question';
import './Quiz.css';
class Quiz extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        current_marks: 0,
        score: 0,
        current: 1
      };
      this.marksCallback = this.marksCallback.bind(this);
    }

    marksCallback = (marks) => {
      this.setState({ current_marks: marks });
      this.setState((prevState) => ({
        current: prevState.current + 1,
        score: prevState.score+this.state.current_marks,
      }));
    }
    
    render() {
      const questions = this.props.questions;
      return (
        <div className="Quiz">
          {this.state.current > questions.length &&
            <Results total={questions.length} score={this.state.score}/>
          }
          {this.state.current <= questions.length && 
            <Scorebox total={questions.length} current={this.state.current} score={this.state.score} />
          }
          {this.state.current <= questions.length && 
            <Question question={questions[this.state.current-1]} callbackFromParent={this.marksCallback}/>
          }
        </div>
       )
    }
  }
  
export default Quiz;