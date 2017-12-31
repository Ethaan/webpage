import AboutItem from '@/components/about/AboutItem';
import GithubItem from '@/components/about/GithubItem';
// import AngelistItem from '@/components/about/AngelistItem';
// import StackOverflowItem from '@/components/about/StackOverflowItem';
// import LinkedinItem from '@/components/about/LinkedinItem';

export const ITEM_VISIBLE_DEFAULT = 'About';
export const SIDEBAR_ITEMS = [
  {
    icon: 'user-o',
    name: ITEM_VISIBLE_DEFAULT,
    component: AboutItem,
    backgroundColor: '#fff',
  },
  {
    icon: 'github',
    name: 'Github',
    color: 'white',
    component: GithubItem,
    backgroundColor: '#24292e',
  },
  /* {
    icon: 'angellist',
    name: 'Angelist',
    component: AngelistItem,
    backgroundColor: '#fff',
  },
  {
    icon: 'stack-overflow',
    name: 'StackOverflow',
    component: StackOverflowItem,
    backgroundColor: '#D2B48C',
  },
  {
    icon: 'linkedin',
    name: 'Linkedin',
    color: 'white',
    component: LinkedinItem,
    backgroundColor: '#007BB5',
  }, */
];
