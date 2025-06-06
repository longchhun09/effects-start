import { useEffect, useState } from "react";

const TIMER = 3000;

export default function ProgressBar({ timer = TIMER, onComplete }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          onComplete();
          return 0;
        }
        return prevTime - 100;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [onComplete]);

  return (
    <progress 
      value={remainingTime} 
      max={timer} 
      className="progress-bar"
    />
  );
} 