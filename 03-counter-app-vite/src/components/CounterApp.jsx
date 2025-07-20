import React, { useState } from "react";
import PropTypes from "prop-types";

function CounterApp({ value }) {
  const [counter, setCounter] = useState(value);

  const handleAddition = () => {
    // setCounter(counter + 1);
    return setCounter((actualValue) => {
      return actualValue + 1;
    });
  };

  const handleSubtract = () => {
    return setCounter(counter - 1);
  };

  const handleReset = () => {
    return setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAddition}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button aria-label="btn-reset" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
