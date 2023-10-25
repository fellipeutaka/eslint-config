"use client";

import { useState } from "react";

import { decrement } from "~/utils/decrement";
import { increment } from "~/utils/increment";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCount) => increment(prevCount));
  }

  function handleDecrement() {
    setCount((prevCount) => decrement(prevCount));
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
