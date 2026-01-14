import React from "react";

export default function ListRendering() {
  const fruits = ["apple", "banana", "orange", "mango", "grapes"];
  console.log(fruits.length);

  const users = [
    // { id: 1, name: "hari" },
    // { id: 2, name: "raj" },
    // { id: 3, name: "kumar" },
  ];
  //   console.log(users.length);

  return (
    <div>
      <h3>fruits data</h3>
      <ul>
        {/* <li>apple</li>
            <li>banana</li>
            <li>orange</li>
            <li>apple</li> */}
        {fruits.map((fruit, ind) => (
          <li key={ind}>{fruit}</li>
        ))}
      </ul>
      <h3>user data</h3>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>no data found</p>
      )}
    </div>
  );
}

// user={
//      id: 2, name: "raj"
// }
// console.log(user.name);
