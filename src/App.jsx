import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  //using useSelector we can access the reducer action and intialstate
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  console.log({ myState });
  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h4>Using React and Redux</h4>

          <div className="quantity">
            <a
              className="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNumber(3))}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              value={myState}
            />
            <a
              className="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incNumber(5))}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
