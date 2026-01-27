import React, { useState, useContext, createContext } from "react";
import Greeting from "./Greeting";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRendering from "./Component/ListRendering";
import UsestateCount from "./Component/UsestateCount";
import Dark from "./Component/Dark";
import FieldUseState from "./Component/FieldUseState";
import RegisterForm from "./Component/RegisterForm";
import DataForm from "./Component/DataForm";
import UseEffectHook from "./Component/UseEffectHook";
import UseEffectTimer from "./Component/UseEffectTimer";
import TimerWatch from "./Component/TimerWatch";
import UseEffectAIP from "./Component/UseEffectAIP";
import UseRefHook from "./Component/UseRefHook";
import First from "./Context/First";
import ContextHook from "./ContextTheme/ContextHook";
import UseReducerHook from "./Component/UseReducerHook";
import UseReducerForm from "./Component/UseReducerForm";

export const Pass = createContext();

export default function App() {
  const name = "Naveen kumar";
  const city = "salem ,city";
  const address = "abc street , xyz colony";
  const dispaly = false;

  const [mode, setMode] = useState("light");
  const data = { name: "vamsi" };
  return (
    <div>
      <UseReducerForm />
      <UseReducerHook />
      <div style={{ border: "2px solid black", padding: "20px" }}>
        <Pass.Provider value={{ mode, setMode, data }}>
          <ContextHook />
        </Pass.Provider>
      </div>
      <nav style={{ border: "2px solid black", padding: "20px" }}>
        <h2>App commponent</h2>
        <Pass.Provider value={name}>
          <First />
        </Pass.Provider>
      </nav>
      <UseRefHook />
      <UseEffectAIP />
      <TimerWatch />
      <UseEffectTimer />
      <UseEffectHook />
      <DataForm />
      <RegisterForm />
      <FieldUseState />
      <Dark />
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
