import React from "react";
import { createContext } from "react";
import { A } from "./A";
export const UserContext = createContext();
export const Contexthooks = () => {
  return (
    <div>
      <UserContext.Provider value={"Sheelu"}>
        <A />
      </UserContext.Provider>
    </div>
  );
};
