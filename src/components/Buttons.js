import React from "react";

const Buttons = ({ handlefScore, handlehScore, awayfScore, awayhScore }) => {
  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button className="homeButtons__touchdown" onClick={handlehScore}>
          Home Touchdown
        </button>
        <button className="homeButtons__fieldGoal" onClick={handlefScore}>
          >Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={awayhScore}>
          Away Touchdown
        </button>
        <button className="awayButtons__fieldGoal" onClick={awayfScore}>
          Away Field Goal
        </button>
      </div>
    </section>
  );
};

export default Buttons;
