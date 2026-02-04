import { useState } from "react";
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const incerement = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return {
    count,
    incerement,
    decrement,
    reset,
  };
}
export default useCounter;
