import React from 'react'

const NftContainerWrapper = ({children}) => {
  return (
    <div className='max-w-[1450px] 2xl:max-w-[1200px] xl:max-w-[992px] lg:max-w-[760px] md:max-w-[639px] px-[20px] mx-[auto] space-grotesk'>
        {children}
    </div>
  )
}

export default NftContainerWrapper