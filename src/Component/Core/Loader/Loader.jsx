import Image from 'next/image';
import React from 'react'

const Loader = () => {
  return (
    <div className="SiteLoader">
      <Image src="/assets/images/LOADER.gif" width={100} height={100} />
    </div>
  )
}

export default Loader;