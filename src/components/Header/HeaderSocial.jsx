import React from "react";
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsStackOverflow} from 'react-icons/bs';

const SocialLink = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/ashaduzzaman-mondal-b68699214/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ashaduzzaman2002" target="_blank"><BsGithub/></a>
      <a href="https://stackoverflow.com/users/18030067/ashadu-zaman" target="_blank"><BsStackOverflow /></a>
    </div>
  );
};

export default SocialLink;
