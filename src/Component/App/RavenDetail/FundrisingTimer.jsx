import { Timeleft } from '@/utils/Timer';
import React, { useState, useEffect } from 'react';

const FundrisingTimer = ({timer}) => {
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
  
  const calculate = () => {
    let time = Timeleft(timer);
    setTime(time)
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [time, setTime] = useState();

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
      <span key={interval} className='text-[30px] 2xl:text-[24px] quantico text-white font-[700]'>
        {timeLeft[interval]}{interval === 'days' ? <><span className='text-[24px] 2xl:text-[18px]'>D</span> <span className='text-[#ffffff66]'>: </span></> : interval === 'hours' ? <><span className='text-[24px] 2xl:text-[18px]'>H</span> <span className='text-[#ffffff66]'>: </span></> : interval === 'minutes' ? <><span className='text-[24px] 2xl:text-[18px]'>M</span> <span className='text-[#ffffff66]'>: </span></> : <span className='text-[24px] 2xl:text-[18px]'>S</span>}
      </span>
    );
  });

  return (
    <span>
      {timerComponents.length ? timerComponents : <span>Time&apos;s End</span>}
    </span>
  );
};

export default FundrisingTimer;
