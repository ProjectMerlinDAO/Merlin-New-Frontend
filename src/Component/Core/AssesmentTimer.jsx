import React, { useState, useEffect } from 'react';

const AssesmentTimer = () => {
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
      <span key={interval} className='text-[26px] quantico text-white font-[700]'>
        {timeLeft[interval]}{interval === 'days' ? <><span className='text-[20px]'>D</span> <span className='text-[#ffffff66]'>: </span></> : interval === 'hours' ? <><span className='text-[20px]'>H</span> <span className='text-[#ffffff66]'>: </span></> : interval === 'minutes' ? <><span className='text-[20px]'>M</span> <span className='text-[#ffffff66]'>: </span></> : <span className='text-[20px]'>S</span>}
      </span>
    );
  });

  return (
    <span>
      {timerComponents.length ? timerComponents : <span>Time&apos;s End</span>}
    </span>
  );
};

export default AssesmentTimer;
