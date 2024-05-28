import React from 'react'
import HomeSectionTitle from '../../Home/HomeSectionTitle';
import TeamCard from './TeamCard';

const firstTeamMembers = [
  { id: 1, img: "../assets/images/team/team1.png", name: "HAKAN BEKTAŞ", designation: "Co-Founder-CEO" },
  { id: 2, img: "../assets/images/team/team2.png", name: "ÇAĞRI İMAL", designation: "Co-Founder-COO" },
  { id: 3, img: "../assets/images/team/team3.png", name: "Nazım Karaalp", designation: "Chief Marketing Officer" },
  { id: 4, img: "../assets/images/team/team4.png", name: "IQBAL SINGH", designation: "Chief Technology Officer" },
  { id: 5, img: "../assets/images/team/team5.png", name: "METE ALI BAŞKAYA", designation: "Advisor" },
  { id: 6, img: "../assets/images/team/team6.png", name: "AV. ELIF HILAL UMUCU", designation: "Legal Counsel" },
  { id: 7, img: "../assets/images/team/team7.png", name: "AV. SUNA DONDAR", designation: "Legal Counsel" }
];

const remainingTeamMembers = [
  { id: 8, img: "../assets/images/team/team8.png", name: "Kubilay Serbest", designation: "Growth Marketing Manager" },
  { id: 9, img: "../assets/images/team/team9.png", name: "HASAN MUMCU", designation: "Community Manager" },
  { id: 10, img: "../assets/images/team/team10.png", name: "ONUR YUCEL", designation: "Developer Team Lead" },
  { id: 11, img: "../assets/images/team/team11.png", name: "MUHARREM OZEL", designation: "Art Director" },
  { id: 12, img: "../assets/images/team/team12.png", name: "QUEEN WILLIAMS", designation: "Public Relations Director" },
  { id: 13, img: "../assets/images/team/team13.png", name: "MALKEET SINGH", designation: "Blockchain Solution Architect" },
  { id: 14, img: "../assets/images/team/team14.png", name: "JIGYASA MALHOTRA", designation: "Project Coordinator" },
  { id: 15, img: "../assets/images/team/team15.png", name: "MUNISH SANGRA", designation: "Sr. Content Strategist" },
  { id: 16, img: "../assets/images/team/team16.png", name: "ASHUTOSH MAURYA", designation: "Sr. Software Developer" },
  { id: 17, img: "../assets/images/team/team17.png", name: "AKSHAY GARG", designation: "Sr. DevOps Engineer" },
  { id: 18, img: "../assets/images/team/team18.png", name: "MANISH JINDAL", designation: "QA Engineer" },
  { id: 19, img: "../assets/images/team/team19.png", name: "RIDHIM RAIZADA", designation: "Software Developer" },
  { id: 20, img: "../assets/images/team/team20.png", name: "DEEPAK MINHAS", designation: "Software Developer" },
  { id: 21, img: "../assets/images/team/team21.png", name: "ERGIN YANAR", designation: "Artist" },
  { id: 22, img: "../assets/images/team/team22.png", name: "ANIL KUMAR", designation: "UX/UI Developer" }
];

const Team = () => {
  return (
    <div className='team-section'>
      <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
        <div className='mx-auto max-w-[469px] text-center'>
            <HomeSectionTitle
                title="Meet The Team Members"
            />
        </div>
        <div className="team-row author">
          {firstTeamMembers.map(member => (
            <div className="team-col" key={member.id}>
              <TeamCard cardSize="big-card" teamMemberImg={member.img} teamMebername={member.name} degnation={member.designation} />
            </div>
          ))}
        </div>
        <div className="team-row">
          {remainingTeamMembers.map(member => (
            <div className="team-col" key={member.id}>
              <TeamCard cardSize="small-card" teamMemberImg={member.img} teamMebername={member.name} degnation={member.designation} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
