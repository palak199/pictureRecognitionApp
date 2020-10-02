import React, { useState } from "react";
import "./Main.css";
import Quiz from "./Quiz";
import { FRUITS } from "./Fruits";

export default function Main() {
  const [state, toggle] = useState(false);

  return (
    <div>
      {!state && (
        <div role="button" onClick={() => toggle(true)} className="main">
          <div className="main__header">
            <h2>CLICK ON ANY FRUIT TO START THE QUIZ</h2>
          </div>
        </div>
      )}
      {state && <Quiz questions={FRUITS} />}
    </div>
  );
}
