import React from "react";
import Greeting from "./Greeting";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRendering from "./Component/ListRendering";
import UsestateCount from "./Component/UsestateCount";

export default function App() {
  const name = "Naveen kumar";
  const city = "salem ,city";
  const address = "abc street , xyz colony";
  const dispaly = false;

  return (
    <div>
      <UsestateCount />
      <h2>List rendering</h2>
      <ListRendering />
      <h2>Conditional rendering</h2>
      <ConditionalRendering />
      <h2>Good morning all</h2>
      <h3>my name is {name}</h3>
      {dispaly ? (
        <Greeting name={name} city={city} />
      ) : (
        <Greeting name={name} city={address} />
      )}
    </div>
  );
}
