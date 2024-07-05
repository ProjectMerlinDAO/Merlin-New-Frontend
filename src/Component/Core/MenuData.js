import { ImProfile } from "react-icons/im";

const Data = [
  {
    title: "Home",
    src: "/assets/images/menuIcons/IconHome.svg",
    url: "/launch-app",
  },
  {
    title: "Proposals",
    src: "/assets/images/menuIcons/IconFileDollar.svg",
    url: "#",
    subMenus: [
      {
        title: "Camelot Proposal",
        url: "/camelot-proposals",
      },
      {
        title: "community Assesment",
        url: "/community-assesment",
      },
      {
        title: "Senator Assessment",
        url: "/senatorAssesment",
      },
      {
        title: "Excalibur Proposal",
        url: "#",
      },
    ],
  },
  {
    title: "The Crystal Cave",
    src: "/assets/images/menuIcons/IconDiamond.svg",
    url: "/crystal-cave",
  },
  {
    title: "Raven Message",
    src: "/assets/images/menuIcons/IconMessage.svg",
    url: "/create-raven-message",
  },
  {
    title: "Treasury",
    src: "/assets/images/menuIcons/IconTreasury.svg",
    url: "#",
    subMenus: [
      {
        title: "Claim Rewards",
        url: "/treasury",
      },
    ],
  },
  {
    title: "Grants",
    src: "/assets/images/menuIcons/grants.svg",
    url: "#",
    subMenus: [
      {
        title: "projects",
        url: "#",
      },
      {
        title: "Grant bonuses",
        url: "#",
      },
      {
        title: "Apply for a grant",
        url: "#",
      },
    ],
  },
  // {
  //   title: "Profile",
  //   src: "/assets/images/menuIcons/user.svg",
  //   url: "/member-profile",
  // },
  // {
  //   title: "Airdrop",
  //   src: "/assets/images/menuIcons/money.svg",
  //   url: "airdrop",
  // }
];

export default Data;
