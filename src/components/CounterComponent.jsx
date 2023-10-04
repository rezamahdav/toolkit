import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    customInc,
  decrementNumber,
  incrementNumber,
  reset,
} from "../../redux/features/counter/counterSlice";

const CounterComponent = () => {
  console.log("rendeing ....");
  const receivedState = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incHandler = () => {
    dispatch(incrementNumber());
  };
  const decHandler = () => {
    dispatch(decrementNumber());
  };
  const resetHandler = () => {
    dispatch(reset());
  };
  const customNumber = useRef()

  const customIncrementHandler = () => {
    dispatch(customInc({number:Number(customNumber.current.value)}));
  };

  return (
    <div>
      <button onClick={incHandler}>+</button>
      <label>{receivedState.number}</label>
      <button onClick={decHandler}>-</button>
      <button onClick={resetHandler}>reset value</button>
      <input type="number" ref={customNumber} />
      <button onClick={customIncrementHandler}>custom increment</button>
    </div>
  );
};

export default CounterComponent;
