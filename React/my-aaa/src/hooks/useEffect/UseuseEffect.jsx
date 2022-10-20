import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const UseuseEffect = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [click, setClick] = useState(1);

  const handleClick = () => {
    setClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [click]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>{post.title}</div>
      <br />
      <button type="button" onClick={handleClick}>
        Click
      </button>
      {/* <ul>
        {post.map((p) => (
          <li key={p.id}>
            {p.id} - {p.title}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

// import React, { useState } from "react";
// import { useEffect } from "react";

// export const UseuseEffect = () => {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");
//   useEffect(() => {
//     console.log(`useEffect - updating title`);
//     document.title = `ypu are clicked ${count} times`;
//   }, [count]);
//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={() => setCount(count + 1)}>click {count} times</button>
//     </div>
//   );
// };
