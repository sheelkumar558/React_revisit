import React from "react";
import { useContext } from "react";
import { UserContext } from "./Contexthooks";
export const C = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

//  {/* <UserContext.Consumer>
//     {(value) => {
//       return <h1>{value}</h1>;
//     }}
//   </UserContext.Consumer> */}
