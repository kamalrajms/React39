import React from "react";

export default function ConditionalRendering() {
  const user = false;
  return (
    <div>
      {/* ternary operatio */}

      {user ? <h2>Welcome back</h2> : <h2>please login</h2>}

      {/* logical operator */}

      {user && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
          aspernatur consequatur illum itaque. Repellendus, magnam. Ducimus
          ipsam cupiditate commodi aperiam non, illo sunt animi cum ullam natus
          blanditiis est. Deleniti!
        </p>
      )}
    </div>
  );
}
