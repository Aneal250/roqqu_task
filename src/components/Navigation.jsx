import React from "react";

const Navigation = ({ current }) => {
  return (
    <>
      {current === "stepOne" && (
        <div>
          <p>Step 1 / 5</p>
          <div className="navigation">
            <div>
              <hr className="lin" />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>
          </div>
        </div>
      )}

      {current === "stepTwo" && (
        <div>
          <p>Step 2 / 5</p>
          <div className="navigation">
            <div>
              <hr className="lin" />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>
          </div>
        </div>
      )}

      {current === "stepThree" && (
        <div>
          <p>Step 3 / 5</p>
          <div className="navigation">
            <div>
              <hr className="lin" />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>
          </div>
        </div>
      )}

      {current === "stepFour" && (
        <div>
          <p>Step 4 / 5</p>
          <div className="navigation">
            <div>
              <hr className="lin" />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>
          </div>
        </div>
      )}

      {current === "stepFive" && (
        <div>
          <p>Step 5 / 5</p>
          <div className="navigation">
            <div>
              <hr className="lin" />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>

            <div>
              <hr />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
