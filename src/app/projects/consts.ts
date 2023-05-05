import { ProjectType } from "./types";
import { projectHashes } from "../consts";

import mantlQueue from '../../../public/projects/queue.png';
import mantlCreateModal from '../../../public/projects/queue_create_modal.png';
import mantlPopover from '../../../public/projects/queue_popover.png';
import mantlSavedDropdown from '../../../public/projects/queue_saved_filters_dropdown.png';
import mantlSelectedOptions from '../../../public/projects/queue_selected_options.png';
import mantlSuccessToast from '../../../public/projects/queue_success_toast.png';

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
    title: 'MANTL Search Filters',
    copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores repellat nemo commodi nihil, in, quasi aspernatur officia nam ex id iure autem. Repellat ab soluta quas.',
    images: [
      { src: mantlQueue },
      { src: mantlPopover },
      { src: mantlSelectedOptions },
      { src: mantlCreateModal },
      { src: mantlSuccessToast },
      { src: mantlSavedDropdown },
    ],
    externalData: {
      url: '/projects/Saved_Filters.mp4',
      linkText: 'Check out a short demo of the search filters UI here'
    },
  },
  {
    id: projectHashes.cloudCheckr,
    title: 'CloudCheckr CMx',
    copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores repellat nemo commodi nihil, in, quasi aspernatur officia nam ex id iure autem. Repellat ab soluta quas.',
    images: [
      { src: ccWelcome },
      { src: ccDashboards },
      { src: ccCustomize },
      { src: ccAccountList },
      { src: ccMobile, size: 'mobile' },
    ],
    externalData: {
      url: 'https://cloudcheckr.com/products/cmx/',
      linkText: 'See the latest in cloud management software'
    },
  },
  {
    id: projectHashes.chime,
    title: 'Chime Signup',
    copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores repellat nemo commodi nihil, in, quasi aspernatur officia nam ex id iure autem. Repellat ab soluta quas.',
    images: [
      { src: chimeDesktop, size: 'tablet' },
      { src: chimeMobile, size: 'mobile' },
    ],
    externalData: {
      url: 'https://www.chime.com/',
      linkText: 'Have a look at Chime\'s signup flow'
    },
  },
  {
    id: projectHashes.docsPortal,
    title: 'Docs Portal',
    copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores repellat nemo commodi nihil, in, quasi aspernatur officia nam ex id iure autem. Repellat ab soluta quas.',
    images: [
      { src: docsPortalHome },
      { src: docsPortalContent },
    ],
    externalData: {
      url: 'https://help.heretto.com/en/content-management/23/heretto-ccms-overview',
      linkText: 'See the current iteration'
    },
  },
  {
    id: projectHashes.sasb,
    title: 'SASB Navigator',
    copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores repellat nemo commodi nihil, in, quasi aspernatur officia nam ex id iure autem. Repellat ab soluta quas.',
    images: [
      { src: sasbNav },
    ],
    externalData: {
      url: 'https://www.sasb.org/blog/check-sasb-navigators-new-features-functionality/',
      linkText: 'Read up on the SASB Navigator here'
    },
  },
  {
    id: projectHashes.betterReads,
    title: 'BetterReads',
    copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores repellat nemo commodi nihil, in, quasi aspernatur officia nam ex id iure autem. Repellat ab soluta quas.',
    images: [
      { src: betterReadsList },
    ],
  },
];