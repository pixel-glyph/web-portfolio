import { NavLinkType, ProjectPreviewType } from "./types";

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
    imgSrc: '',
    imgAlt: '',
    url: '/projects#cloudcheckr-cmx',
  },
  {
    title: 'Chime Signup',
    desc: 'A sleek and simple signup flow for onboarding customers to a whole new level of mobile banking.',
    imgSrc: '',
    imgAlt: '',
    url: '/projects#chime',
  },
  {
    title: 'Docs Portal',
    desc: 'A documentation portal that allows ease of access to content.',
    imgSrc: '',
    imgAlt: '',
    url: '/projects#heretto-docs',
  },
  {
    title: 'SASB Navigator',
    desc: 'A high-performance navigator to help companies find the right sustainability information.',
    imgSrc: '',
    imgAlt: '',
    url: '/projects#sasb-nav',
  },
  {
    title: '/projects#better-reads',
    desc: 'A prototype SPA powered by React.js that leverages Google Books to seamlessly allow book searching and list creation.',
    imgSrc: '',
    imgAlt: '',
    url: '/projects#better-reads',
  },
];