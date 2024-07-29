import React from 'react'

const NftSectionTitle = ({title, titleMaxW}) => {
  return (
    <h2 className="text-white text-[40px] xl:text-[36px] lg:text-[32px] xsm:text-[28px] leading-[137.5%] font-[700] uppercase" style={{maxWidth: titleMaxW}}>
        {title}
    </h2>
  )
}

export default NftSectionTitle