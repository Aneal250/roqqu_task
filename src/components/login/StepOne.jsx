import React, { useState } from "react";

const StepOne = ({ setCurrent }) => {
  const [isChecked, setIschecked] = useState();
  const [inputValue, setInputValue] = useState();

  const NextSection = () => {
    setCurrent("stepTwo");
  };

  return (
    <div>
      <h2>Hey 👋 </h2>
      <br />
      <h2>Welcome to Roqqu</h2>

      <p>Let's get to Know you!</p>
      <p>
        We'll need you to choose a really cool name that other users can find
        you with, choose something cool like superman, or batman 😜
      </p>
      <div>
        <label htmlFor="Username">
          <input placeholder="Enter username" />
        </label>
      </div>
      <div className="font-bold flex items-center">
        <input type="checkbox" name="subscribeMail" checked={isChecked} />{" "}
        <span>
          I agree to Roqqu's
          <a target="__blank" href="#">
            Terms & conditions
          </a>
          <a target="__blank" href="#">
            Privacy policy
          </a>
        </span>
      </div>
      <button onClick={NextSection}>Continue</button>
    </div>
  );
};

export default StepOne;
