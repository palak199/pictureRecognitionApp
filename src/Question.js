import React from "react";
import Speech from "./Speech";
import "./Quiz.css";
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_marks: 0,
    };
    this.handleMarks = this.handleMarks.bind(this);
  }
  handleMarks(e) {
    this.props.callbackFromParent(e);
  }
  render() {
    const question = this.props.question;
    return (
      <div>
        <h3 className="title">What is this???</h3>
        <img
          className="fruit-img"
          src={require(`${question.text}`)}
          width={400}
          height={200}
        ></img>
        <Speech
          answer={question.correct}
          callbackFromParent={this.handleMarks}
        />
      </div>
    );
  }
}

export default Question;
