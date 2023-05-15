'use client';

import Link from 'next/link';

import useIsActive from '@hooks/useIsActive';

import { INavItem } from '@app/interfaces';

interface TabNavItemProps {
  navItem: INavItem;
}

const TabNavItem = ({ navItem }: TabNavItemProps) => {
  const { href, label } = navItem;
  const isActive = useIsActive(href);

  return (
    <Link
      href={href}
      className={`w-28 h-full flex items-center justify-center hover:text-black ${
        isActive
          ? 'text-black font-bold border-b-2 border-b-blue-500 hover:bg-blue-50/70'
          : 'text-neutral-600 font-semibold hover:bg-neutral-100'
      }`}
    >
      {label}
    </Link>
  );
};

export default TabNavItem;
