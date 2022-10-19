import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const FocusInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.foucs();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};
