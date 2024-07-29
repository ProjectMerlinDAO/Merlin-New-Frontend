import React, { useState } from 'react';

const descriptionItems = [
  { label: 'Address', value: 'x008vv589vv58k589k', icon: './assets/images/icons/copy.svg' },
  { label: 'Token ID', value: '#258963' },
  { label: 'Blockchain', value: 'Ethereum' },
  { label: 'Token Standard', value: 'ERC-721' },
  { label: 'Metadata', value: 'IPFS', underline: true },
  { label: 'Royalty', value: '0.25%' },
];

const formatAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const Descriptions = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (value, index) => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => {
          setCopiedIndex(null);
        }, 3000);
      })
      .catch(err => console.error('Could not copy text: ', err));
  };

  return (
    <div className='pt-[30px]'>
      <ul>
        {descriptionItems.map((item, index) => (
          <li key={index} className='flex items-center justify-start gap-[23px]'>
            <span className="text-[16px] md:text-[14px] font-[400] text-white leading-[225%] outfit uppercase flex items-center justify-start w-[125px]">
              {item.label} :
            </span>
            <span className={`text-[16px] md:text-[14px] font-[400] text-white leading-[225%] outfit flex items-center justify-start ${item.icon ? 'gap-[11px]' : ''} ${item.underline ? 'underline' : ''}`}>
              {item.label === 'Address' ? formatAddress(item.value) : item.value}
              {item.icon && (
                <img
                  src={copiedIndex === index ? './assets/images/icons/check-green.svg' : item.icon}
                  alt="icon"
                  className="opacity-[0.5] hover:opacity-[1] cursor-pointer delay-75"
                  onClick={() => handleCopy(item.value, index)}
                />
              )}
            </span>
          </li>
        ))}
      </ul>
      <p className='mt-[35px] xsm:mt-[20px] text-[16px] md:text-[14px] font-[400] text-white leading-[187.5%] outfit'>
        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition    
      </p>
    </div>
  );
}

export default Descriptions;
