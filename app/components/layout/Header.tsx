'use client';

import { AiOutlineHome } from 'react-icons/ai';
import { TbListDetails } from 'react-icons/tb';
import { BiCategory } from 'react-icons/bi';

import { INavItem } from '@app/interfaces';

import Logo from '@components/layout/Logo';
import MenuNav from '@components/layout/MenuNav';
import TabNav from '@components/layout/TabNav';
import ThemeSwitch from '@components/layout/ThemeSwitch';

const navItems = [
  {
    href: '/',
    label: 'Home',
    icon: AiOutlineHome,
  },
  {
    href: '/series',
    label: 'Series',
    icon: TbListDetails,
  },
  {
    href: '/category',
    label: 'Category',
    icon: BiCategory,
  },
] satisfies INavItem[];

const Header = () => {
  return (
    <header className="fixed top-0 z-10 w-full h-16 bg-white border-b border-b-neutral-300 shadow-md">
      <div className="xs:px-4 md:px-12 w-full h-full flex items-center justify-between">
        <Logo href="/" label="GOSH95" />
        <div className="w-fit h-full flex items-center justify-between gap-1">
          <nav className="w-fit h-full">
            <div className="md:hidden xs:block w-full h-full">
              <MenuNav navItems={navItems} />
            </div>
            <div className="xs:hidden md:block w-full h-full">
              <TabNav navItems={navItems} />
            </div>
          </nav>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
