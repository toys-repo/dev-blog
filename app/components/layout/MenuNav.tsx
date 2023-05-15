'use client';

import { useCallback, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';

import { INavItem } from '@app/interfaces';

import MenuNavItem from '@components/layout/MenuNavItem';

interface MenuNavProps {
  navItems: INavItem[];
}

const MenuNav = ({ navItems }: MenuNavProps) => {
  const [showMenuNavItems, setShowMenuNavItems] = useState(false);

  const handleShowMenuNavItems = useCallback(() => {
    setShowMenuNavItems(true);
  }, []);

  const handleHideMenuNavItems = useCallback(() => {
    setTimeout(() => {
      setShowMenuNavItems(false);
    }, 100);
  }, []);

  return (
    <div className="relative w-fit h-full flex items-center justify-center">
      <CgMenuGridR
        size={24}
        className={`cursor-pointer focus:outline-none focus:rotate-180 focus:scale-[0.8] transition`}
        tabIndex={0}
        onFocus={handleShowMenuNavItems}
        onBlur={handleHideMenuNavItems}
      />
      {showMenuNavItems && (
        <div className="absolute top-14 z-20 w-36 h-fit flex flex-col border rounded-md border-neutral-300 bg-white">
          {navItems && navItems.map((navItem) => <MenuNavItem key={navItem.href} navItem={navItem} />)}
        </div>
      )}
    </div>
  );
};

export default MenuNav;
