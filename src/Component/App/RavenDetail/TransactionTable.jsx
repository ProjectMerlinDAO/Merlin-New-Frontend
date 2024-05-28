import Image from 'next/image'
import React from 'react'

const transactions = [
  {
    wallet: '0x95....7400',
    period: '29 Aug, 24  02:03 (GMT+6)',
    amount: '16.00 USDT (320.00 MRLN)',
  },
  {
    wallet: '0x95....7400',
    period: '29 Aug, 24 06:59 (GMT+6)',
    amount: '5.00 USDT (100.00 MRLN)',
  },
  {
    wallet: '0x95....7400',
    period: '30 Aug, 24  12:45 (GMT+6)',
    amount: '2.00 USDT (40.00 MRLN)',
  },
  {
    wallet: '0x95....7400',
    period: '01 Sep, 24 03:40 (GMT+6)',
    amount: '130.00 USDT (2,600.00 MRLN)',
  },
  {
    wallet: '0x95....7400',
    period: '01 Sep, 24 09:59 (GMT+6)',
    amount: '16.00 USDT (320.00 MRLN)',
  },
  {
    wallet: '0x95....7400',
    period: '03 Sep, 24 18:05 (GMT+6)',
    amount: '5.00 USDT (100.00 MRLN)',
  },
  {
    wallet: '0x95....7400',
    period: '05 Sep, 24 02:59 (GMT+6)',
    amount: '16.00 USDT (320.00 MRLN)',
  },
  {
    wallet: '0x95....7400',
    period: '05 Sep, 24 12:55 (GMT+6)',
    amount: '2.00 USDT (40.00 MRLN)',
  },
  {
    wallet: '0x95....7400',
    period: '08 Sep, 24 18:08 (GMT+6)',
    amount: '1500.00 USDT (30,000.00 MRLN)',
  },
  {
    wallet: '0x95....7400',
    period: '12 Sep, 24 03:00 (GMT+6)',
    amount: '16.00 USDT (320.00 MRLN)',
  },
];

const TransactionTable = () => {
  return (
    <div className='transaction-table 2xl:text-[13px] font-[300] md:min-w-[600px]'>
      <ul className="flex items-start justify-between mx-[-5px] border-b border-[#ffffff19] uppercase">
        <li className="w-[25%] 2xl:w-[25%] px-[5px] pb-[12px]"><span>Wallet</span></li>
        <li className="w-[35%] px-[5px] pb-[12px]"><span>Period</span></li>
        <li className="w-[40%] 2xl:w-[40%] px-[5px] pb-[12px] text-right"><span>Amount</span></li>
      </ul>
      {transactions.map((transaction, index) => (
        <ul key={index} className="flex items-start justify-between mx-[-5px] border-b border-[#ffffff19] py-[14px] md:py-[8px]">
          <li className="w-[25%] 2xl:w-[25%] px-[5px]">
            <a href="#" className="flex items-center justify-start gap-[10px]">
              <span>{transaction.wallet}</span>
              <Image src="/assets/images/icons/link.svg" alt="icon" height="16" width="16" />
            </a>
          </li>
          <li className="w-[35%] px-[5px]"><span>{transaction.period}</span></li>
          <li className="w-[40%] 2xl:w-[40%] px-[5px] text-right"><span>{transaction.amount}</span></li>
        </ul>
      ))}
    </div>
  )
}

export default TransactionTable
