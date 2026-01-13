// import React from "react";

// export default function Greeting(props) {
//   return (
//     <div>
//       <h3>name as {props.name}</h3>
//       <h3>my city : {props.city}</h3>
//       <input type="text" />
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex
//         hic, animi et doloribus quasi est praesentium, fugit culpa possimus
//         maiores. Optio, ex ut fuga tenetur tempora et accusantium laudantium.
//       </p>
//     </div>
//   );
// }

import React from "react";

export default function Greeting({ name, city }) {
  return (
    <div>
      <h3>name as {name}</h3>
      <h3>my city : {city}</h3>
      <input type="text" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex
        hic, animi et doloribus quasi est praesentium, fugit culpa possimus
        maiores. Optio, ex ut fuga tenetur tempora et accusantium laudantium.
      </p>
    </div>
  );
}
