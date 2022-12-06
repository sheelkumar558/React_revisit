import React, { useState } from "react";
import "./rev.css";
export const GiveRev = ({ setReviewFormData }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const handleReset = () => {
    setRating("");
    setTitle("");
    setDescription("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title,
      rating,
      description,
    };

    setReviewFormData((temp) => {
      return [...temp, formData];
    });
  };
  return (
    <div className="container">
      <h1 className="text-center">Give Reviews</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
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
          <label>Rating*</label>
          <br />
          <input
            type="number"
            required
            onChange={(e) => setRating(e.target.value)}
            value={rating}
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

        <div>
          <button type="submit" style={{ marginRight: 20 }}>
            Submit
          </button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
