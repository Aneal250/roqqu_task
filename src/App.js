import { useState } from "react";

import StepOne from "./components/login/StepOne";
import StepTwo from "./components/login/StepTwo";
import StepThree from "./components/login/StepThree";
import Navigation from "./components/Navigation";
import StepFour from "./components/login/StepFour";
import StepFive from "./components/login/StepFive";

function App() {
  const [current, setCurrent] = useState("stepOne");
  return (
    <div className="App">
      <Navigation current={current} />
      {current == "stepOne" && <StepOne setCurrent={setCurrent} />}
      {current === "stepTwo" && <StepTwo setCurrent={setCurrent} />}
      {current === "stepThree" && <StepThree setCurrent={setCurrent} />}
      {current === "stepFour" && <StepFour setCurrent={setCurrent} />}
      {current === "stepFive" && <StepFive setCurrent={setCurrent} />}
    </div>
  );
}

export default App;
