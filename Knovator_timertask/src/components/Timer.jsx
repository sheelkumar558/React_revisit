import { useEffect, useState } from "react";
import { Task } from "./Task";
import { List } from "./List";
export const Timer = () => {
  const [reviewFormData, setReviewFormData] = useState([]);
  const [togg, setTogg] = useState(false);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hou, setHou] = useState(0);

  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSec(sec + 1);
      if (sec === 59) {
        setMin(min + 1);
        if (min === 59) {
          setMin(0);
          setHou(hou + 1);
        }
        setSec(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const Pause = () => {
    clearInterval(timer);
  };
  const startInt = () => {
    timer = setInterval(() => {
      setSec(sec + 1);
      if (sec === 59) {
        setMin(min + 1);
        if (min === 59) {
          setMin(0);
          setHou(hou + 1);
        }
        setSec(0);
      }
    }, 10);
    return () => clearInterval(timer);
  };

  return (
    <div>
      <h1>Stop-Watch</h1>
      <p>HH : min : Sec</p>
      <h3>
        {hou < 10 ? "0" + hou : hou}:{min < 10 ? "0" + min : min}:
        {sec < 10 ? "0" + sec : sec}
      </h3>

      <button
        onClick={() => {
          startInt();
        }}
      >
        start
      </button>

      <button onClick={Pause}>Pause</button>
      <button onClick={() => setTogg(!togg)}>Save</button>
      {togg ? (
        <Task
          setReviewFormData={setReviewFormData}
          setTogg={setTogg}
          togg={togg}
        />
      ) : (
        ""
      )}
      <br />
      <br />

      <br />
      <br />

      <List reviewFormData={reviewFormData} hou={hou} min={min} sec={sec} />
    </div>
  );
};
