import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      links: [
        {
          text: 'Contact',
          href: getPermalink('/homes/contact'),
        },
        {
          text: 'Education',
          href: getPermalink('/homes/education'),
        },
        {
          text: 'Technical Skills',
          href: getPermalink('/homes/technical-skills'),
        },
      ],
    },

    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Coaches Dashboard Project',
          href: getPermalink('coaches-dashboard', 'post'),
        },
      ],
    },
  ],
};


