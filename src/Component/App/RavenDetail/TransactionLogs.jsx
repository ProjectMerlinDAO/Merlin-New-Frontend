import React from 'react'
import TransactionTable from './TransactionTable'
import Pagination from '../../Core/Pagination'

const TransactionLogs = () => {
  return (
    <div className="p-[30px] lg:py-[20px] lg:px-[10px] mt-[90px] lg:mt-[60px] md:mt-[40px] rounded-[20px]" style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)'}}>
        <h3 className='text-white text-[18px] mb-[22px] md:mb-[18px] uppercase'>Transaction Logs</h3>
        <div className="md:overflow-x-scroll">
          <TransactionTable/>
        </div>
        <div className='mt-[25px]'>
            <Pagination/>   
        </div>
    </div>
  )
}

export default TransactionLogs