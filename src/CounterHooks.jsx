import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

const CounterHooks = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);
  return (
    <div>
      <button
        style={style}
        onClick={() =>
          count <= 0
            ? setCount((prevCount) => prevCount)
            : setCount((prevCount) => prevCount - 1)
        }
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() =>
          count >= 10
            ? setCount((prevCount) => prevCount)
            : setCount((prevCount) => prevCount + 1)
        }
      >
        +
      </button>
    </div>
  );
};

export default CounterHooks;
