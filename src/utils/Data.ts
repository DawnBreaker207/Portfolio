import CSS from '../assets/icons/languages/css.svg';
import Express from '../assets/icons/languages/express.svg';
import HTML from '../assets/icons/languages/html.svg';
import JS from '../assets/icons/languages/js.svg';
import Mongo from '../assets/icons/languages/mongodb.svg';
import Mongoose from '../assets/icons/languages/mongoose.svg';
import Nodejs from '../assets/icons/languages/nodejs.svg';
import React from '../assets/icons/languages/react.svg';
import Tailwind from '../assets/icons/languages/tailwindcss.svg';
import Discord from '../assets/icons/socials/discord.svg';
import Facebook from '../assets/icons/socials/facebook.svg';
import Github from '../assets/icons/socials/github.svg';
import Instagram from '../assets/icons/socials/instagram.svg';
import LinkedIn from '../assets/icons/socials/linkedin.svg';

export const SKILL_DATA = [
  {
    id: 1,
    type: 'Front-End',
    list: [
      { id: 1, name: 'HTML', icon: HTML },
      { id: 2, name: 'CSS', icon: CSS },
      { id: 3, name: 'JavaScript', icon: JS },
      { id: 4, name: 'TailwindCSS', icon: Tailwind },
      { id: 5, name: 'React', icon: React },
    ],
  },
  {
    id: 2,
    type: 'Back-End',
    list: [
      { id: 1, name: 'Nodejs', icon: Nodejs },
      { id: 2, name: 'ExpressJS', icon: Express },
      { id: 3, name: 'MongoDB', icon: Mongo },
      { id: 4, name: 'Mongoose', icon: Mongoose },
    ],
  },
];
export const PROJECT_DATA = [
  {
    id: 1,
    name: 'RESTFul-Nodejs',
    thumbnail: 'https://picsum.photos/300/200',
    language: 'JavaScript',
    description:
      'This is a services server using Nodejs, Express and MongoDB API',
    link: 'https://github.com/DawnBreaker207/RESTFul-Nodejs',
  },
  {
    id: 2,
    name: 'Portfolio',
    thumbnail: 'https://picsum.photos/seed/picsum/300/200',
    language: 'HTML, CSS, JavaScript, TypeScript ',
    description: 'Portfolio',
    link: 'https://github.com/DawnBreaker207/Portfolio',
  },
  {
    id: 3,
    name: 'Ecommerce-Web-Page',
    thumbnail: 'https://picsum.photos/300/200/?blur=1',
    language: 'TypeScript, JavaScript',
    description: 'Ecommerce web page using react and typescript',
    link: 'https://github.com/DawnBreaker207/Ecommerce-Web-Page',
  },
];
export const SOCIAL_MEDIA = [
  { id: 1, link: 'https://shorturl.at/ljnVu', name: Facebook },
  { id: 2, link: 'https://shorturl.at/aD12d', name: Discord },
  { id: 3, link: 'https://shorturl.at/vhUXe', name: LinkedIn },
  { id: 4, link: 'https://shorturl.at/NDjcz', name: Github },
  { id: 5, link: 'https://shorturl.at/jaGUx', name: Instagram },
];
