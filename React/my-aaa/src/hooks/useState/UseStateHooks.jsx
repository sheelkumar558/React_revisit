import React from "react";
import { useState } from "react";

export const UseStateHooks = () => {
  const init = 0;
  const [count, setCount] = useState(init);
  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.lemgth,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <h1>Count- {count}</h1> <br />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Incre
      </button>
      <br />
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decre
      </button>
      <br />
      <button onClick={() => setCount(init)}>Reset</button>
      <br />
      <button onClick={IncrementFive}>Increment-5</button>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};
