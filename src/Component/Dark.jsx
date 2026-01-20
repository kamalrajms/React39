import React, { useState } from "react";

export default function Dark() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
        padding: "30px",
      }}
    >
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch TO {darkMode ? "Light" : "Dark"} mode
      </button>
      <p>You are in {darkMode ? "Dark" : "Light"} mode</p>
    </div>
  );
}
