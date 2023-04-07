import { NavLinkType, ProjectPreviewType } from "./types";

import ccImg from '../../public/cc_welcome.png';
import chimeImg from '../../public/chime_desktop.png';
import herettoImg from '../../public/jorsek_docs_home.png';
import sasbImg from '../../public/sasb_nav.png';
import betterReadsImg from '../../public/better_reads.png';

export const navLinks: NavLinkType[] = [
  {
    name: 'Projects',
    route: '/projects',
  },
  {
    name: 'About',
    route: '/#about',
  },
  {
    name: 'Contact',
    route: '/#contact',
  },
];

export const projectPreviews: ProjectPreviewType[] = [
  {
    title: 'CloudCheckr CMx',
    desc: 'A kick-ass cloud platform management system.',
    imgSrc: ccImg,
    imgAlt: 'CloudCheckr welcome page screenshot',
    url: '/projects',
    hash: 'cloudcheckr-cmx',
  },
  {
    title: 'Chime Signup',
    desc: 'A sleek and simple signup flow for onboarding customers to a whole new level of mobile banking.',
    imgSrc: chimeImg,
    imgAlt: 'Chime signup screenshot',
    url: '/projects',
    hash: 'chime',
  },
  {
    title: 'Docs Portal',
    desc: 'A documentation portal that allows ease of access to content.',
    imgSrc: herettoImg,
    imgAlt: 'Heretto Documentation portal screenshot',
    url: '/projects',
    hash: 'heretto-docs',
  },
  {
    title: 'SASB Navigator',
    desc: 'A high-performance navigator to help companies find the right sustainability information.',
    imgSrc: sasbImg,
    imgAlt: 'SASB navigator screenshot',
    url: '/projects',
    hash: 'sasb-nav',
  },
  {
    title: 'Better Reads',
    desc: 'A prototype SPA powered by React.js that leverages Google Books to seamlessly allow book searching and list creation.',
    imgSrc: betterReadsImg,
    imgAlt: 'Better Reads screenshot',
    url: '/projects',
    hash: 'better-reads',
  },
];