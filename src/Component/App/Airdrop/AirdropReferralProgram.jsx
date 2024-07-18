import Image from 'next/image';
import React, { useState } from 'react'

const socialIcons = [
  { src: '/assets/images/icons/telegram.svg', alt: 'Twitter', href: '#', height: '16', width: '18', },
  { src: '/assets/images/icons/x.svg', alt: 'Facebook', href: '#', height: '16', width: '16', },
  { src: '/assets/images/icons/whatsapp.svg', alt: 'Telegram', href: '#', height: '16', width: '16', },
  { src: '/assets/images/icons/messenger.svg', alt: 'Medium', href: '#', height: '16', width: '17', },
  { src: '/assets/images/icons/fb-f.svg', alt: 'Medium', href: '#', height: '18', width: '11', },
];

const AirdropReferralProgram = ({ referralCode }) => {
  const [copied, setCopied] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
  const copyToClipboard = () => {
    const url = `${baseUrl}/member-profile?ref=${referralCode}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };
  return (
    <div className='bg-[rgba(255,255,255,0.05)] rounded-[20px] overflow-hidden mt-[80px] lg:mt-[70px] md:mt-[50px]'>
      <div className="bg-no-repeat bg-cover" style={{ backgroundImage: 'url(../assets/images/bg/airdrop-referral-bg.jpg)', backgroundPosition: 'center center' }}>
        <div className="bg-[rgba(13,16,20,0.50)] py-[80px] px-[60px] lg:py-[40px] xl:px-[40px] lg:px-[30px] sm:px-[20px]">
          <h3 className='text-[#FFFFFF] text-[30px] md:text-[24px] font-[600] quantico uppercase mb-[25px]'>Referral Program</h3>
          <p className='max-w-[768px] text-[16px] lg:text-[14px] text-white mb-[40px]'>
            The Project Merlin community is a special group dedicated to goodness. Goodness grows when shared. Help us spread more goodness. Do a good deed by sharing the invitation link with your friends. Remember, sharing brings good karma.
          </p>
          <div className="flex w-full gap-[20px] lg:flex-wrap">
            <div className="max-w-[730px] w-full">
              <h5 className='text-[16px] lg:text-[14px] font-[500] text-white uppercase mb-[10px]'>Your referral link</h5>
              <div className="flex items-center justify-between rounded-[15px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] h-[55px] pl-[15px] py-[0px] w-full">
              <span className="overflow-hidden text-nowrap text-ellipsis max-w-[267px] text-[16px] font-[500] text-white">{referralCode?`${baseUrl}/member-profile?ref=${referralCode}`:null}</span>
              <span className="cursor-pointer flex items-center justify-center h-[55px] w-[150px] rounded-[15px]" style={{ background: 'linear-gradient(90deg, rgba(18, 207, 167, 0.00) 0%, #12CFA7 100%)' }} onClick={copyToClipboard}>
                {copied ? (
                  <span className='flex items-center justify-end gap-[15px]'>
                    <Image src="/assets/images/icons/check.svg" alt="icon" height="16" width="16" />
                    <span className="text-[#FFFFFF] text-[16px] font-[500]">Copied!</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-end gap-[15px]">
                    <Image src="/assets/images/icons/copy-icon.svg" alt="icon" height="16" width="16" />
                    <span className='text-[#FFFFFF] text-[16px] font-[500]'>Copy</span>
                  </span>
                )}
              </span>
            </div>
            </div>
            

            <div className="min-w-[336px]">
              <h5 className='text-[16px] lg:text-[14px] font-[500] text-white uppercase mb-[10px]'>Share on</h5>
              <ul className="flex items-start justify-start max-w-[370px] lg:mx-auto flex-wrap gap-[15px] sm:gap-[10px]">
              {socialIcons.map((icon, index) => (
                <li key={index} className='social-icon-btn referal-social-icon-btn'>
                  <a href={icon.href} className='flex btn-has-shape items-center justify-center rounded-[16px] sm:rounded-[10px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] h-[55px] w-[55px] sm:h-[40px] sm:w-[40px]' >
                    <span className="btn-icons">
                      <span className="btn-icon my-[0px]">
                        <Image src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} /> 
                      </span>
                      <span className="btn-icon my-[0px]">
                        <Image src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} />
                      </span>
                    </span>
                    
                  </a>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AirdropReferralProgram