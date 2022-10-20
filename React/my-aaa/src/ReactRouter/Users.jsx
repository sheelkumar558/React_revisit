import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>

      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active user
        </button>
        <button onClick={() => setSearchParams({})}>Reset filter</button>
      </div>
      {showActiveUsers ? (
        <h2>Show active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  );
};
