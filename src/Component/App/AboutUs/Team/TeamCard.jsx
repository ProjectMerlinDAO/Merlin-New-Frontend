import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TeamCard = ({teamMemberImg, cardSize, teamMebername, degnation, url}) => {
  return (
    <div className={`team-card ${cardSize}`}>
        <div className="card-content">
            <div className="team-member-img">
                <img src={teamMemberImg} alt="img" />
            </div>
            <h5>{teamMebername}</h5>
            <h6>{degnation}</h6>
            <Link href={`${url}`} target='_blank' className="pt-[20px] text-center flex items-center justify-center opacity-[80%] hover:opacity-[100%] delay-[0.2s]">
              <Image src="/assets/images/icons/in.svg" alt="icon" height='24' width='24' />
            </Link>
        </div>
    </div>
  )
}

export default TeamCard