import React, { useState, useEffect } from 'react';

const FundriseTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-16T00:00:00") - +new Date();
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
      <span key={interval} className='text-white font-[300]'>
        {timeLeft[interval]}{interval === 'days' ? <><span>D</span> <span className='text-[#ffffff66]'>: </span></> : interval === 'hours' ? <><span>H</span> <span className='text-[#ffffff66]'>: </span></> : interval === 'minutes' ? <><span>M</span> <span className='text-[#ffffff66]'>: </span></> : <span>S</span>}
      </span>
    );
  });

  return (
    <span>
      {timerComponents.length ? timerComponents : <span>Time&apos;s End</span>}
    </span>
  );
};

export default FundriseTimer;
