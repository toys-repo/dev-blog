'use client';

import Link from 'next/link';

interface LogoProps {
  href: string;
  label: string;
}

const Logo = ({ href, label }: LogoProps) => {
  return (
    <Link href={href} className="text-2xl font-extrabold">
      {label}
    </Link>
  );
};

export default Logo;
