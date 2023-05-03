import { NavLinkType, ProjectPreviewType } from "./types";

import mantlQueue from '../../public/projects/queue.png';
import ccImg from '../../public/cc_welcome.png';
import chimeImg from '../../public/chime_desktop.png';
import herettoImg from '../../public/jorsek_docs_home.png';
import sasbImg from '../../public/sasb_nav.png';
import betterReadsImg from '../../public/better_reads.png';

export const projectHashes = {
  mantl: 'mantl',
  cloudCheckr: 'cloudcheckr-cmx',
  chime: 'chime',
  docsPortal: 'docs-portal',
  sasb: 'sasb',
  betterReads: 'better-reads',
};

export const navLinks: NavLinkType[] = [
  {
    name: 'Projects',
    route: '/projects',
  },
  {
    name: 'Contact',
    route: '/#contact',
  },
];

export const projectPreviews: ProjectPreviewType[] = [
  {
    title: 'MANTL Console',
    desc: 'A CRUD dashboard for managing search filters.',
    imgSrc: mantlQueue,
    imgAlt: 'MANTL dashboard screenshot',
    url: '/projects',
    hash: projectHashes.mantl,
  },
  {
    title: 'CloudCheckr CMx',
    desc: 'A kick-ass cloud platform management system.',
    imgSrc: ccImg,
    imgAlt: 'CloudCheckr welcome page screenshot',
    url: '/projects',
    hash: projectHashes.cloudCheckr,
  },
  {
    title: 'Chime Signup',
    desc: 'A sleek and simple signup flow for onboarding customers to a whole new level of mobile banking.',
    imgSrc: chimeImg,
    imgAlt: 'Chime signup screenshot',
    url: '/projects',
    hash: projectHashes.chime,
  },
  {
    title: 'Docs Portal',
    desc: 'A documentation portal that allows ease of access to content.',
    imgSrc: herettoImg,
    imgAlt: 'Documentation portal screenshot',
    url: '/projects',
    hash: projectHashes.docsPortal,
  },
  {
    title: 'SASB Navigator',
    desc: 'A high-performance navigator to help companies find the right sustainability information.',
    imgSrc: sasbImg,
    imgAlt: 'SASB navigator screenshot',
    url: '/projects',
    hash: projectHashes.sasb,
  },
  {
    title: 'Better Reads',
    desc: 'A prototype SPA powered by React.js that leverages Google Books to seamlessly allow book searching and list creation.',
    imgSrc: betterReadsImg,
    imgAlt: 'Better Reads screenshot',
    url: '/projects',
    hash: projectHashes.betterReads,
  },
];