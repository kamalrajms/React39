import React from "react";
import ListData from "../Component/ListData";
import useCounter from "../Component/useCounter";
import Cred from "../Component/Cred";

export default function About() {
  const { count, incerement, decrement, reset } = useCounter(7);
  return (
    <div>
      <Cred />
      <h2>Count:{count}</h2>
      <button onClick={incerement}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <h2>About component</h2>
      <ListData />
    </div>
  );
}
