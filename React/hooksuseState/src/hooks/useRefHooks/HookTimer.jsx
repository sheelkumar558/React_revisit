import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      HookTimer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        clear hook timer
      </button>
    </div>
  );
};
