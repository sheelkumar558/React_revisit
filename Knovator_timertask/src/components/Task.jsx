import React, { useState } from "react";
// import "./rev.css";
export const Task = ({ setReviewFormData, setTogg, togg }) => {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const handleReset = () => {
    setTitle("");
    setDescription("");
  };
  const handleSubmit = () => {
    const formData = {
      title,

      description,
    };

    setReviewFormData((temp) => {
      return [...temp, formData];
    });
  };

  return (
    <div className="container">
      <h1 className="text-center">Give Reviews</h1>
      <form>
        <div className="mb-3">
          <label>Title*</label>
          <br />
          <input
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div>
          <label>Description</label>
          <br />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
      </form>
      <div>
        <button
          type="save"
          style={{ marginRight: 20 }}
          onClick={() => {
            setTogg(!togg);
            handleSubmit();
          }}
        >
          Save
        </button>
        <button type="cancel" onClick={handleReset}>
          Cancel
        </button>
      </div>
    </div>
  );
};
