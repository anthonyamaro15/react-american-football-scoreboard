//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from "./components/Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [hScore, setHScore] = useState(0);
  const [fScore, setFScore] = useState(0);
  const [time, setTime] = useState(60);
  const [id, setId] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);
    setId(timer);
  }, [time]);

  console.log(time);

  const handlehScore = () => setHScore(hScore + 7);
  const handlefScore = () => setFScore(fScore + 3);

  const awayhScore = () => setHScore(hScore - 7);
  const awayfScore = () => setFScore(fScore - 3);

  if (time === 0) {
    clearTimeout(id);
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{hScore}</div>
          </div>
          <div className="timer">{time}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{fScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <Buttons
        handlefScore={handlefScore}
        handlehScore={handlehScore}
        awayhScore={awayhScore}
        awayfScore={awayfScore}
      />
    </div>
  );
}

export default App;
