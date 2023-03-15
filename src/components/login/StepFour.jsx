import React from "react";

const StepFour = ({ setCurrent }) => {
  const NextSection = () => {
    setCurrent("stepFive");
  };
  return (
    <div>
      <h2>Thank You Aneal 👋 </h2>
      <br />
      <h2>Enter email and create password</h2>
      <div>
        <input placeholder="Enter username" />
      </div>
      <div>
        <input placeholder="Enter username" />
      </div>

      <div>
        <button onClick={NextSection}>Continue</button>
      </div>
      <p>Already have an account? Sign In </p>
    </div>
  );
};

export default StepFour;
