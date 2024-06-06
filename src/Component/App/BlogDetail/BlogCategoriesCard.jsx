import React from 'react'

const BlogCategoriesCard = () => {
  return (
    <div className='blog-categories-card relative px-[30px] py-[40px] mb-[30px] backdrop-blur-[5px] rounded-[20px]' style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)'}}>
        <h3 className="text-white text-[18px] mb-[15px] font-[400] uppercase lexend">Categories</h3>
        <ul className='blog-categories-list'>
            <li className="flex items-center justify-between relative pr-[5px] py-[12px]"><span className='text-white'>Proposal</span> <span>10</span></li>
            <li className="flex items-center justify-between relative pr-[5px] py-[12px]"><span className='text-white'>DAO</span> <span>5</span></li>
            <li className="flex items-center justify-between relative pr-[5px] py-[12px]"><span className='text-white'>Raven Message</span> <span>3</span></li>
            <li className="flex items-center justify-between relative pr-[5px] py-[12px]"><span className='text-white'>Reports</span> <span>2</span></li>
            <li className="flex items-center justify-between relative pr-[5px] py-[12px]"><span className='text-white'>NFT</span> <span>1</span></li>
            <li className="flex items-center justify-between relative pr-[5px] py-[12px]"><span className='text-white'>Updates</span> <span>4</span></li>
        </ul>
    </div>
  )
}

export default BlogCategoriesCard