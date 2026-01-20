import React, { useState } from "react";

export default function FieldUseState() {
  const [name, setName] = useState("react");
  console.log(name);

  const [isChecked, setIsChecked] = useState(true);
  console.log(isChecked);
  return (
    <div>
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name}</h2>
      <h3>Check box</h3>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />

      {/* <select name="" id="">
        <option value="apple">apple</option>
        <option value="banana">srfewf</option>
      </select> */}
    </div>
  );
}
