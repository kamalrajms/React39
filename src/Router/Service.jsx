import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
      <h2>Service Component</h2>
      <div className="ServiceMenu">
        <Link to={"WebDevelopmemt"}>Web Development</Link>
        <Link to={"AppDevelopment"}>App Development</Link>
      </div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore maiores
        laborum debitis necessitatibus sint quasi dolore. Maxime quidem
        consequatur, ad eaque, ipsa quibusdam, perspiciatis sequi ex dolores
        excepturi doloremque! Rem.
      </h1>
      <Outlet />
    </div>
  );
}
