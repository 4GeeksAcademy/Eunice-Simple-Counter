import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const sixth = Math.floor(counter / 1000000) % 10;
  const fifth = Math.floor(counter / 100000) % 10;
  const fourth = Math.floor(counter / 10000) % 10;
  const third = Math.floor(counter / 100) % 10;
  const second = Math.floor(counter / 10) % 10;
  const first = Math.floor(counter) % 10;

  return (
    <div className="containerNumber">
      <div className="number">
        <i className="fa-regular fa-clock fa-flip-horizontal"></i>
      </div>
      <div className="number">{sixth}</div>
      <div className="number">{fifth}</div>
      <div className="number">{fourth}</div>
      <div className="number">{third}</div>
      <div className="number">{second}</div>
      <div className="number">{first}</div>
    </div>
  );
};


export default SecondsCounter;

