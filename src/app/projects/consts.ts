import { ProjectType } from "./types";
import { projectHashes } from "../consts";
import { getDifferenceInYears } from "./helpers";

import mantlQueue from '../../../public/projects/queue.png';
import mantlCreateModal from '../../../public/projects/queue_create_modal.png';
import mantlSelectedOptions from '../../../public/projects/queue_selected_options.png';

import ccWelcome from '../../../public/projects/cc_welcome.png';
import ccDashboards from '../../../public/projects/cc_dashboards.png';
import ccCustomize from '../../../public/projects/cc_customization.png';
import ccMobile from '../../../public/projects/cc_mobile_welcome.png';
import ccAccountList from '../../../public/projects/cc_accounts_list.png';

import chimeDesktop from '../../../public/projects/chime_desktop.png';
import chimeMobile from '../../../public/projects/chime_mobile.png';

import docsPortalHome from '../../../public/projects/jorsek_docs_home.png';
import docsPortalContent from '../../../public/projects/jorsek_docs_content.png';

import sasbNav from '../../../public/projects/sasb_nav.png';

import betterReadsList from '../../../public/projects/better_reads_list.png';

export const projects: ProjectType[] = [
  {
    id: projectHashes.mantl,
    title: 'MANTL Console',
    copy: [
      'MANTL offers its clients two main products, one for in-branch bankers (B2B) and one for banking customers (B2C). When I joined the company, separate teams were assigned to each product; I was the first developer at MANTL to have the opportunity of working on both applications in tandem. This involved absorbing tons of domain knowledge and getting up to speed on all the various tooling both applications utilized. It was a wild ride and there was never a dull moment.',
      'I worked on many features for both of these products during my time at MANTL, but there was one big project I took the lead on and was given sole ownership of. This project consisted of building out a complex search UI within the MANTL Console (MANTL’s internal name for its B2B product). This new UI gives bankers the flexibility of advanced searching and filtering of customer data by leveraging Elasticsearch to allow for variable matching based on a specific field being searched (for example, Application ID requires an exact match while the Customer Name field will match on a partial search term). In addition to (or in combination with) text searching, this UI allows users to filter data based on various criteria (application status, customer type, etc.) as well as the ability to create and update custom, reusable filters.',
    ],
    images: [
      { src: mantlQueue },
      { src: mantlSelectedOptions },
      { src: mantlCreateModal },
    ],
    externalData: {
      url: '/projects/Saved_Filters.mp4',
      linkText: 'Check out my short demo of the search UI',
    },
  },
  {
    id: projectHashes.cloudCheckr,
    title: 'CloudCheckr CMx',
    copy: [
      'At CloudCheckr, my small team and I spearheaded the massive undertaking of a complete front-end rewrite of the company’s main cloud management application. The new application, what came to be known as CloudCheckr CMx, needed to be fully responsive, compatible across all major browsers (including IE 11 :rip:), and thoroughly tested using both unit and end-to-end testing frameworks. As such, we were responsible for building out all kinds of new pages from the ground up using React as our framework of choice. Along the way, I took advantage of various opportunities to help steer decisions around tooling and architecture. Though the project was a tall order, the chance to build something new, complex, and large, using the latest tooling of the JS ecosystem, was an amazing experience, one in which my team and I grew by leaps and bounds.',
      'Below is a small sampling of the some of the UIs I worked on.',
    ],
    images: [
      { src: ccWelcome },
      { src: ccDashboards },
      { src: ccCustomize },
      { src: ccAccountList },
      { src: ccMobile, size: 'mobile' },
    ],
    externalData: {
      url: 'https://cloudcheckr.com/products/cmx/',
      linkText: 'Curious to know more about CloudCheckr CMx?',
    },
  },
  {
    id: projectHashes.chime,
    title: 'Chime Signup',
    copy: [
      'I had a brief stint working for a US-based contractor. One of the main projects I was given during that time was to help with a front-end rewrite of Chime’s user signup flow using React. Chime is a San Francisco-based fintech company that provides mobile banking services. While working on the new signup flow, I had the wonderful chance to collaborate and work closely with one of the dev teams at Chime. Some of the highest priority items for the design and architecture of this flow included performance, cross-browser compatibility, and ease of use — anything to make the signup process as effortless and smooth as possible.',
      'Though it’s been quite some time since I was a part of this effort, and the current signup flow is definitely different in some ways, there remain many similarities to the look and feel of the UI from that initial iteration I had a part in. Below is a desktop and mobile screenshot of different steps in the flow that more closely resemble how it looked back when I was working on it. If interested, feel free to check out how the flow looks today!',
    ],
    images: [
      { src: chimeDesktop, size: 'tablet' },
      { src: chimeMobile, size: 'mobile' },
    ],
    externalData: {
      url: 'https://www.chime.com/',
      linkText: "Have a look at Chime's signup flow",
    },
  },
  {
    id: projectHashes.docsPortal,
    title: 'Docs Portal',
    copy: [
      'The very first project I took ownership on as a Frontend Developer was a documentation portal, an all-in-one CMS reference guide, complete with versioning and DITA spec guides. DITA (Darwin Information Typing Architecture) is a specification that defines a set of document types for authoring and organizing topic-oriented information, and serves as a basis for Jorsek’s (since rebranded to Heretto) in-browser documentation management application. This portal was built using an XML-based templating framework in combination with XQuery, a query language used for transforming structured and unstructured collections of data.',
      'Since my time working at Jorsek, the docs portal has been redesigned, though the basic concepts remain. To get a feel for how the portal functions, click the link below and poke around.',
    ],
    images: [
      { src: docsPortalHome },
      { src: docsPortalContent },
    ],
    externalData: {
      url: 'https://help.heretto.com/en/content-management/23/heretto-ccms-overview',
      linkText: "See the portal's current iteration",
    },
  },
  {
    id: projectHashes.sasb,
    title: 'SASB Navigator',
    copy: [
      'The SASB Navigator was the first product I worked on for a client. This navigational UI was a big help for SASB’s clients in parsing large amounts of data on sustainability.',
    ],
    images: [
      { src: sasbNav },
    ],
    externalData: {
      url: 'https://www.sasb.org/blog/check-sasb-navigators-new-features-functionality/',
      linkText: 'Read up on the SASB Navigator here',
    },
  },
  {
    id: projectHashes.betterReads,
    title: 'BetterReads',
    copy: [
      `About ${getDifferenceInYears(2017)} years ago I took some time outside of my nine-to-five dev work to read up on React. I had been hearing and reading a bunch about the new-ish framework and its rising popularity, and was excited to jump in. After a month or so studying, I decided to go ahead and build my first React application, BetterReads, a small single-page app that utilizes the Google Books API and Firebase to allow for creating and updating lists of books.`,
      'I admit it’s with some hesitation that I include this project here. Looking back over the my old code for this app induces quite a bit of cringing. However, the endeavor was only ever meant to be a fun experiment, nothing more. And since it resulted in a functioning list-building application, it was overall a rewarding and highly educational experience!',
    ],
    images: [
      { src: betterReadsList },
    ],
  },
];