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
import UseReducerHook from "./Component/UseReducerHook";
import UseReducerForm from "./Component/UseReducerForm";
import UseIdHook from "./Component/UseIdHook";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Router/Home";
import About from "./Router/About";
import Service from "./Router/Service";
import Contact from "./Router/Contact";
import WebDevelopment from "./Router/WebDevelopment";
import AppDevelopment from "./Router/AppDevelopment";
import BlogDetailes from "./Component/BlogDetailes";

// export const Pass = createContext();

export default function App() {
  const name = "Naveen kumar";
  const city = "salem ,city";
  const address = "abc street , xyz colony";
  const dispaly = false;

  const [mode, setMode] = useState("light");
  const data = { name: "vamsi" };
  return (
    <div>
      {dispaly && (
        <nav>
          <div>
            <h3>UseID hook</h3>
            <UseIdHook />
            <UseIdHook />
            <UseIdHook />
          </div>
          <UseReducerForm />
          <UseReducerHook />

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
        </nav>
      )}

      <BrowserRouter>
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Service">Service</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <Routes>
          {/* don't creat any devisions in this Routes  */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />}>
            <Route path="WebDevelopmemt" element={<WebDevelopment />} />
            <Route path="AppDevelopment" element={<AppDevelopment />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blogs/:id" element={<BlogDetailes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
