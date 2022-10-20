import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const DataFeach = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setPost({});
        setError("somthing went wrong");
      });
  }, []);
  return (
    <div>
      {loading ? "Loading..." : post.title}
      {error ? error : null}
    </div>
  );
};
