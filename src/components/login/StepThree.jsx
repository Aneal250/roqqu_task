import React from "react";

const StepThree = ({ setCurrent }) => {
  const NextSection = () => {
    setCurrent("stepFour");
  };
  return (
    <div>
      <h2>Thank You Aneal 👋 </h2>
      <br />
      <h2>Let's have your phone Number</h2>
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

export default StepThree;
