import React, { useState, useEffect } from "react";

export default function UseCallBackList({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("updating Items");
  }, [getItems]);
//   console.log(items);

  return (
    <div>
      <h3>UseCall back List</h3>
      {items.map((items) => (
        <div key={items}>{items}</div>
      ))}
    </div>
  );
}
