import React from "react";
import "./rev.css";
export const Reviews = ({ reviewFormData, setReviewFormData }) => {
  const removeItem = (indexNumber) => {
    const isConfirm = window.confirm(
      `Are You Sure To Delete ${indexNumber + 1} Review ?`
    );

    if (!isConfirm) {
      return;
    }

    const temp = reviewFormData.filter((ls, i) => {
      if (i !== indexNumber) {
        return ls;
      }
    });

    setReviewFormData(temp);
  };
  return (
    <div className="">
      <h1 className=""> Reviews</h1>
      <div className="">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Description</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {reviewFormData.map((ls, i) => {
              return (
                <tr>
                  <th>{i + 1}</th>
                  <td>{ls.title}</td>
                  <td>{ls.rating}</td>
                  <td>{ls.description}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
