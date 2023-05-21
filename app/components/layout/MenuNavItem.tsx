'use client';

import Link from 'next/link';

import useIsActive from '@hooks/useIsActive';

import { INavItem } from '@app/interfaces';

interface MenuNavItemProps {
  navItem: INavItem;
}

const MenuNavItem = ({ navItem }: MenuNavItemProps) => {
  const { href, label, icon: Icon } = navItem;
  const isActive = useIsActive(href);

  return (
    <Link
      href={href}
      className={`w-full h-8 px-2 flex flex-row items-center gap-2 border-b last:border-b-0 border-b-neutral-300 hover:bg-neutral-100 first:rounded-t-md last:rounded-b-md transition-color`}
    >
      {Icon && <Icon size={16} className={`${isActive ? 'text-blue-500' : 'text-black'}`} />}
      <span className={`text-sm ${isActive ? 'text-blue-500' : 'text-black'}`}>{label}</span>
    </Link>
  );
};

export default MenuNavItem;
