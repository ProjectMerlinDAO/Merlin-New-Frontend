import React from 'react';

const AirdropTaskTable = ({ tasks }) => {
    return (
        <div className="">
            <div className='airdrop-task-table'>
                <ul className='flex items-center justify-between text-[rgba(255,255,255,0.80)] lexend text-[16px] lg:text-[14px] sm:text-[13px] font-[300] leading-[150%] uppercase'>
                    <li className='w-[10%] px-[15px] pb-[20px] sm:w-[44px] sm:pr-[5px] sm:pl-[10px]'><span>Tasks</span></li>
                    <li className='w-[50%] px-[15px] pb-[20px] sm:w-[70%] sm:px-[5px] sm:hidden'><span>Title</span></li>
                    <li className='w-[20%] px-[15px] pb-[20px] sm:hidden'><span>Status</span></li>
                    <li className='w-[20%] px-[15px] pb-[20px] text-right sm:w-[30%] sm:pl-[5px] sm:pr-[10px]'><span>Points</span></li>
                </ul>

                {tasks.map(task => (
                    <a key={task.id} href={task.taskUrl} target="_blank">
                        <ul className='flex items-center justify-between text-[#FFFFFF] mb-[10px] lexend text-[16px] lg:text-[14px] sm:text-[13px] font-[400] leading-[150%] py-[13px] rounded-[15px] backdrop-blur-[5px]' style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.08) 100%)' }}>
                            <li className='w-[10%] px-[15px] relative sm:w-[44px] sm:pr-[5px] sm:pl-[10px]'><span className="flex items-center justify-center h-[36px] w-[36px px-[15px]]" style={{ backgroundImage: 'url(../assets/images/icons/number-bg.svg)', backgroundPosition: 'center center', backgroundSize: '100% 100%' }}>{task.number}</span></li>
                            <li className='w-[50%] px-[15px] flex items-center justify-start gap-[25px] sm:gap-[10px] sm:w-[70%] sm:px-[5px]'><span><img src={task.icon} alt="icon" className='max-w-[17px] sm:max-w-[15px]' /></span><div>{task.description}</div></li>
                            <li className='w-[20%] px-[15px] sm:hidden'><span>{task.status}</span></li>
                            <li className='w-[20%] px-[15px] text-right sm:w-[30%] sm:pl-[5px] sm:pr-[10px]'>
                                <div className={`flex items-center justify-center gap-[10px] sm:gap-[5px] max-w-[min-content] ml-auto ${task.pointsClass} px-[20px] lg:px-[15px] sm:px-[7px] py-[10px] lg:py-[8px] md:py-[6px] sm:py-[3px] text-[18px] lg:text-[16px] md:text-[14px] sm:text-[13px] quantico rounded-full`}>
                                    {task.statusIcon && <span><img src={task.statusIcon} alt="icon" className="h-[10px] min-w-[15px] sm:h-[7px] sm:min-w-[10px]" /></span>}+{task.points}
                                </div>
                            </li>
                        </ul>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default AirdropTaskTable;
