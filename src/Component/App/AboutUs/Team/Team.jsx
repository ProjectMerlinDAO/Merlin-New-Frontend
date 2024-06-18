import React from 'react'
import HomeSectionTitle from '../../Home/HomeSectionTitle';
import TeamCard from './TeamCard';

const firstTeamMembers = [
  { id: 1, img: "../assets/images/team/team1.png", name: "HAKAN BEKTAŞ", designation: "Co-Founder-CEO" , url:"https://www.linkedin.com/in/bektashakan/"},
  { id: 2, img: "../assets/images/team/team2.png", name: "ÇAĞRI İMAL", designation: "Co-Founder-COO",url:"https://www.linkedin.com/in/cagriimal/" },
  { id: 3, img: "../assets/images/team/team3.png", name: "Nazım Karaalp", designation: "Chief Marketing Officer",url:"https://www.linkedin.com/in/naz%C4%B1m-karaalp-a35331160/" },
  { id: 4, img: "../assets/images/team/team4.png", name: "IQBAL SINGH", designation: "Chief Technology Officer",url:"https://www.linkedin.com/in/iqbalsinghbhatti/" },
  { id: 5, img: "../assets/images/team/team5.png", name: "METE ALI BAŞKAYA", designation: "Advisor",url:"https://www.linkedin.com/in/metealibaskaya/" },
  { id: 6, img: "../assets/images/team/team6.png", name: "AV. ELIF HILAL UMUCU", designation: "Legal Counsel" ,url:"https://www.linkedin.com/in/elif-hilal-umucu/"},
  { id: 7, img: "../assets/images/team/team7.png", name: "AV. SUNA DONDAR", designation: "Legal Counsel",url:"https://www.linkedin.com/in/av-suna-d%C3%B6ndar-5a1b3020a/" }
];

const remainingTeamMembers = [
  { id: 8, img: "../assets/images/team/team8.png", name: "Kubilay Serbest", designation: "Growth Marketing Manager",url:"https://www.linkedin.com/in/kubilay-serbest/" },
  { id: 9, img: "../assets/images/team/team9.png", name: "HASAN MUMCU", designation: "Community Manager",url:"https://www.linkedin.com/in/hasannmumcu/" },
  { id: 10, img: "../assets/images/team/team10.png", name: "ONUR YUCEL", designation: "Developer Team Lead" ,url:"https://www.linkedin.com/in/yasin-onur-y%C3%BCcel-2023de/"},
  { id: 11, img: "../assets/images/team/team11.png", name: "MUHARREM OZEL", designation: "Art Director" ,url:"https://www.linkedin.com/in/mahoni/ "},
  { id: 12, img: "../assets/images/team/team12.png", name: "QUEEN WILLIAMS", designation: "Public Relations Director" ,url:"#"},
  { id: 13, img: "../assets/images/team/team13.png", name: "MALKEET SINGH", designation: "Blockchain Solution Architect",url:"https://www.linkedin.com/in/malkeet-singh-4b2ba1153/" },
  { id: 14, img: "../assets/images/team/team14.png", name: "JIGYASA MALHOTRA", designation: "Project Coordinator",url:"#" },
  { id: 15, img: "../assets/images/team/team15.png", name: "MUNISH SANGRA", designation: "Sr. Content Strategist" ,url:"https://www.linkedin.com/in/munishsangra/"},
  { id: 16, img: "../assets/images/team/team16.png", name: "ASHUTOSH MAURYA", designation: "Sr. Software Developer" ,url:"https://www.linkedin.com/in/ashutosh-kumar-1363b0162/"},
  { id: 17, img: "../assets/images/team/team17.png", name: "AKSHAY GARG", designation: "Sr. DevOps Engineer",url:"" },
  { id: 18, img: "../assets/images/team/team18.png", name: "MANISH JINDAL", designation: "QA Engineer",url:"https://www.linkedin.com/in/manish-jindal-57a009114/" },
  { id: 19, img: "../assets/images/team/team19.png", name: "RIDHIM RAIZADA", designation: "Software Developer" ,url:"https://www.linkedin.com/in/ridhim-singh-raizada-811832116/"},
  { id: 20, img: "../assets/images/team/team20.png", name: "DEEPAK MINHAS", designation: "Software Developer",url:"https://www.linkedin.com/in/deepak-thakur-64b13524b/" },
  { id: 21, img: "../assets/images/team/team21.png", name: "ERGIN YANAR", designation: "Artist",url:"https://www.linkedin.com/in/erginyanar/" },
  { id: 22, img: "../assets/images/team/team22.png", name: "ANIL KUMAR", designation: "UX/UI Developer",url:"https://www.linkedin.com/in/anil-kumar-037a85223/"}
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
              <TeamCard cardSize="big-card" teamMemberImg={member.img} teamMebername={member.name} degnation={member.designation} url={member.url} />
            </div>
          ))}
        </div>
        <div className="team-row">
          {remainingTeamMembers.map(member => (
            <div className="team-col" key={member.id}>
              <TeamCard cardSize="small-card" teamMemberImg={member.img} teamMebername={member.name} degnation={member.designation} url={member.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
