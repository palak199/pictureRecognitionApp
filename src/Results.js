import React from 'react';

class Results extends React.Component {
    render(){
      const score = this.props.score;
      const total = this.props.total;
      const percent = Math.round(score/total*100);
      return(
        <div className="final">
          <h2>You know {score} fruits out of {total}.</h2>
          <hr />
          <h1>{percent}%</h1>
        </div>
      );
      
    }
  }
  export default Results;