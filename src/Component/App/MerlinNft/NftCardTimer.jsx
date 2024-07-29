
import React, { useState, useEffect } from 'react';

const NftCardTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-10-16T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className=''>
        {timeLeft[interval]}{interval === 'days' ? <><span>D</span> &nbsp;&nbsp; </> : interval === 'hours' ? <><span>H</span> &nbsp;&nbsp; </> : interval === 'minutes' ? <><span>M</span> &nbsp;&nbsp; </> : <span>S</span>}
      </span>
    );
  });

  return (
    <span>
      {timerComponents.length ? timerComponents : <span>Time&apos;s End</span>}
    </span>
  );
};

export default NftCardTimer;
