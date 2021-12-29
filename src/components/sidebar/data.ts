import { AiOutlineBell, AiOutlineMail } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiHomeCircle } from 'react-icons/bi';
import { BsCardList, BsFillPersonFill } from 'react-icons/bs';
import { HiOutlineHashtag, HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { IoBookmarkSharp } from 'react-icons/io5';

const buttonsData = [
  {
    id: 0,
    label: '',
    href: '/',
    Icon: AiOutlineTwitter,
  },
  {
    id: 1,
    label: 'Home',
    href: '/',
    Icon: BiHomeCircle,
  },
  {
    id: 2,
    label: 'Explore',
    href: '/explore',
    Icon: HiOutlineHashtag,
  },
  {
    id: 3,
    label: 'Notifications',
    href: '/notifications',
    Icon: AiOutlineBell,
  },
  {
    id: 4,
    label: 'Messages',
    href: '/messages',
    Icon: AiOutlineMail,
  },
  {
    id: 5,
    label: 'Bookmarks',
    href: '/bookmarks',
    Icon: IoBookmarkSharp,
  },
  {
    id: 6,
    label: 'Lists',
    href: '/lists',
    Icon: BsCardList,
  },
  {
    id: 7,
    label: 'Profile',
    href: '/profile',
    Icon: BsFillPersonFill,
  },
  {
    id: 8,
    label: 'More',
    href: '/more',
    Icon: HiOutlineDotsCircleHorizontal,
  },
];

export default buttonsData;
