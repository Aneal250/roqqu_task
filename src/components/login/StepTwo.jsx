import React from "react";

const StepTwo = ({ setCurrent }) => {
  const NextSection = () => {
    setCurrent("stepThree");
  };
  return (
    <div>
      <h2>Hey 👋 </h2>
      <br />
      <h2>Welcome to Roqqu</h2>
      <p>Please give us your legal Name</p>
      <div>
        <label htmlFor="First Name">
          <input placeholder="e.g Jane" />
        </label>
      </div>
      <div>
        <label htmlFor="Username">
          <input placeholder="e.g Doe" />
        </label>
      </div>
      <button onClick={NextSection}>Continue</button>
      <p>Already have an account? Sign In </p>
    </div>
  );
};

export default StepTwo;
