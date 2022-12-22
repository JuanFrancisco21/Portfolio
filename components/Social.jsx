import React from "react";
import {
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiBookOpen,
  FiLinkedin,
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiGithub />,
    link: "https://github.com/JuanFrancisco21",
  },
  { iconName: <FiTwitter />, link: "https://twitter.com/" },
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/juanfran_ags/?theme=dark",
  },
  { iconName: <FiBookOpen />, link: "https://www.iesfranciscodelosrios.es/" },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/juan-fco-aguilar-sanchez/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
