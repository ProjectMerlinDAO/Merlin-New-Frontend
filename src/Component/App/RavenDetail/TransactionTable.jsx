import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


const TransactionTable = ({list}) => {
  const options = {
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
};
  return (
    <div className='transaction-table 2xl:text-[13px] font-[300] md:min-w-[600px]'>
      <ul className="flex items-start justify-between mx-[-5px] border-b border-[#ffffff19] uppercase">
        <li className="w-[25%] 2xl:w-[25%] px-[5px] pb-[12px]"><span>Wallet</span></li>
        <li className="w-[35%] px-[5px] pb-[12px]"><span>Period</span></li>
        <li className="w-[40%] 2xl:w-[40%] px-[5px] pb-[12px] text-right"><span>Amount</span></li>
      </ul>
      { list?.length > 0 ? list.map((transaction, index) => (
        <ul key={index} className="flex items-start justify-between mx-[-5px] border-b border-[#ffffff19] py-[14px] md:py-[8px]">
          <li className="w-[25%] 2xl:w-[25%] px-[5px]">
            <Link href={`https://solscan.io/tx/${transaction.signature}?cluster=devnet`} target="_blank" className="flex items-center justify-start gap-[10px]">
              <span>{transaction.customerWallet.slice(0, 3) + "...." + transaction.customerWallet.slice(-5)}</span>
              <Image src="/assets/images/icons/link.svg" alt="icon" height="16" width="16" />
            </Link>
          </li>
          <li className="w-[35%] px-[5px]"><span>{new Date(transaction.createdAt).toLocaleString('en-US', options)}</span></li>
          <li className="w-[40%] 2xl:w-[40%] px-[5px] text-right"><span>{transaction.amount}</span></li>
        </ul>
      )) : "No Transactions to show"}
    </div>
  )
}

export default TransactionTable
