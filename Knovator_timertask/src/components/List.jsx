import React from "react";

export const List = ({ reviewFormData, hou, min, sec }) => {
  return (
    <div className="">
      <h1 className=""> Tasks</h1>
      <div className="">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {reviewFormData.map((ls, i) => {
              return (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{ls.title}</td>
                  <td>{ls.description}</td>
                  <td>{`${hou} : ${min} : ${sec}`}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
