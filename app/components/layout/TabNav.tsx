'use client';

import { INavItem } from '@app/interfaces';

import TabNavItem from '@components/layout/TabNavItem';

interface TabNavProps {
  navItems: INavItem[];
}

const TabNav = ({ navItems }: TabNavProps) => {
  return (
    <div className="w-fit h-full flex flex-row items-center">
      {navItems && navItems.map((navItem) => <TabNavItem key={navItem.label} navItem={navItem} />)}
    </div>
  );
};

export default TabNav;
