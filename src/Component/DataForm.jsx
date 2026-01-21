import React, { useState } from "react";

export default function DataForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    term: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.email || !formData.password) {
      setError("All the fields are required");
      return;
    }
    if (!formData.term) {
      setError("Accept the check box");
      return;
    }
    setError("");
    alert("from is submitted successfully");
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h2>Data Form application</h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <input
          type="text"
          name="userName"
          value={formData.userName}
          placeholder="enter a name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="enter a email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="enter a password"
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="term"
          checked={formData.term}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
