import React, { useState, useEffect } from 'react';

const Statistic = () => {
    const [transactions, setTransactions] = useState(0);
    const [marketCap, setMarketCap] = useState(0);
    const [activeAccounts, setActiveAccounts] = useState(0);
    const [stakedPercentage, setStakedPercentage] = useState(0);

    useEffect(() => {
        const finalTransactions = 255695693;
        const finalMarketCap = 5.03;
        const finalActiveAccounts = 24;
        const finalStakedPercentage = 49;

        const transactionInterval = setInterval(() => {
            setTransactions((prev) => {
                const increment = Math.ceil(finalTransactions / 2000);
                return prev + increment > finalTransactions ? finalTransactions : prev + increment;
            });
        }, 10);

        const marketCapInterval = setInterval(() => {
            setMarketCap((prev) => {
                const increment = 0.01;
                return prev + increment > finalMarketCap ? finalMarketCap : prev + increment;
            });
        }, 10);

        const activeAccountsInterval = setInterval(() => {
            setActiveAccounts((prev) => {
                const increment = Math.ceil(finalActiveAccounts / 1000);
                return prev + increment > finalActiveAccounts ? finalActiveAccounts : prev + increment;
            });
        }, 10);

        const stakedPercentageInterval = setInterval(() => {
            setStakedPercentage((prev) => {
                const increment = 1;
                return prev + increment > finalStakedPercentage ? finalStakedPercentage : prev + increment;
            });
        }, 10);

        return () => {
            clearInterval(transactionInterval);
            clearInterval(marketCapInterval);
            clearInterval(activeAccountsInterval);
            clearInterval(stakedPercentageInterval);
        };
    }, []);

    return (
        <div className='flex items-start justify-start flex-wrap mx-[-30px] lg:mx-[-15px] relative z-[5]'>
            <div className="w-2/6 lg:w-1/2 sm:w-[60%] xsm:w-full px-[15px] xsm:mb-[30px]">
                <div className="rounded-[20px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[5px] p-[40px] 2xl:p-[25px] lg:p-[20px] h-[250px] 2xl:h-[220px] lg:h-[180px] flex items-start justify-center flex-col">
                    <p className='text-[18px] 2xl:text-[16px] text-white uppercase font-[400] mb-[50px]'>Transactions</p>
                    <h3 className='text-[50px] 2xl:text-[40px] xl:text-[32px] text-white font-[700] uppercase quantico'>
                        {transactions.toLocaleString()}
                    </h3>
                </div>
            </div>
            <div className="w-2/6 lg:w-1/2 sm:w-[40%] xsm:w-full px-[15px]">
                <div className="rounded-[20px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[5px] p-[40px] 2xl:p-[25px] lg:p-[20px] h-[250px] 2xl:h-[220px] lg:h-[180px] flex items-start justify-center flex-col">
                    <p className='text-[18px] 2xl:text-[16px] text-white uppercase font-[400] mb-[50px]'>Market Cap</p>
                    <h3 className='text-[50px] 2xl:text-[40px] xl:text-[32px] text-white font-[700] uppercase quantico'>
                        {marketCap.toFixed(2)}M+
                    </h3>
                </div>
            </div>
            <div className="w-2/6 lg:w-full px-[15px]">
                <div className="lg:items-center lg:justify-between lg:flex sm:flex-wrap lg:mx-[-15px]">
                    <div className="lg:w-1/2 sm:w-[60%] xsm:w-full lg:px-[15px]">
                        <div className="rounded-[20px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[5px] p-[40px] 2xl:p-[25px] lg:p-[20px] mb-[30px] lg:mb-[0] h-[110px] 2xl:h-[95px] lg:mt-[30px] flex items-center justify-between">
                            <p className='text-[18px] 2xl:text-[16px] text-white uppercase font-[400]'>Active account</p>
                            <h3 className='text-[50px] 2xl:text-[40px] xl:text-[32px] text-white font-[700] uppercase quantico'>
                                {activeAccounts}M+
                            </h3>
                        </div>
                    </div>
                    <div className="lg:w-1/2 sm:w-[40%] xsm:w-full lg:px-[15px]">
                        <div className="rounded-[20px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[5px] p-[40px] 2xl:p-[25px] lg:p-[20px] h-[110px] 2xl:h-[95px] lg:mt-[30px] flex items-center justify-between">
                            <p className='text-[18px] 2xl:text-[16px] text-white uppercase font-[400]'>% Staked</p>
                            <h3 className='text-[50px] 2xl:text-[40px] xl:text-[32px] text-white font-[700] uppercase quantico'>
                                {stakedPercentage}%
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Statistic;
