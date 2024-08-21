'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`navLink ${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  );
};

export default NavLink;
