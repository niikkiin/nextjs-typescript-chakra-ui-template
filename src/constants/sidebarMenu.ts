// import ExternalLink from 'constants/externalLink'

import { FiHome } from 'react-icons/fi'

export const SidebarMenuItems = [
  {
    label: 'ITEM 1',
    items: [
      { label: 'Home', icon: FiHome, href: '/' },
      { label: 'Home 2', icon: FiHome, href: '/home2' },
    ],
  },
  {
    label: 'ITEM 2',
    items: [
      { label: 'Sub 1', icon: FiHome, href: '/sub1' },
      { label: 'Sub 2', icon: FiHome, href: '/sub2' },
    ],
  },
]
