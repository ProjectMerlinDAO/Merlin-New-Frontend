import { Timeleft } from '@/utils/Timer';
import React, { useState, useEffect } from 'react';

const FundrisingTimer = ({ timer }) => {

  const calculateTimeLeft = () => {
    const difference = Timeleft(timer);
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
    const timerId = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timer, timeLeft]); // Added dependencies to ensure the effect runs on timer change

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    let label;
    switch (interval) {
      case 'days':
        label = <><span className='text-[24px] 2xl:text-[18px]'>D</span> <span className='text-[#ffffff66]'>: </span></>;
        break;
      case 'hours':
        label = <><span className='text-[24px] 2xl:text-[18px]'>H</span> <span className='text-[#ffffff66]'>: </span></>;
        break;
      case 'minutes':
        label = <><span className='text-[24px] 2xl:text-[18px]'>M</span> <span className='text-[#ffffff66]'>: </span></>;
        break;
      case 'seconds':
        label = <span className='text-[24px] 2xl:text-[18px]'>S</span>;
        break;
      default:
        label = null;
    }

    return (
      <span key={interval} className='text-[30px] 2xl:text-[24px] quantico text-white font-[700]'>
        {timeLeft[interval]}{label}
      </span>
    );
  }).filter(component => component !== null);

  return (
    <span>
      {timerComponents.length ? timerComponents : <span>Time&apos;s End</span>}
    </span>
  );
};

export default FundrisingTimer;
