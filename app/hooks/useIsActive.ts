import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const useIsActive = (href: string) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(pathname === href);

  useEffect(() => {
    setIsActive(pathname === href);
  }, [href, pathname]);

  return isActive;
};

export default useIsActive;
