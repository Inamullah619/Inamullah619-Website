'use client';

import NavLink from '../NavLink/NavLink';
import './header.css';
import { useEffect } from 'react';
import gsap from 'gsap';

const Header = () => {
  useEffect(() => {
    gsap.fromTo(
      'header',
      { scale: 0, opacity: 0 },
      {
        duration: 1.5,
        scale: 1,
        opacity: 1,
        ease: 'power1.out',
      }
    );
  }, []);

  return (
    <header>
      <nav>
        <NavLink href={'/'}>Home</NavLink>
        <NavLink href={'/about'}>About</NavLink>
        <NavLink href={'/services'}>Services</NavLink>
      </nav>
    </header>
  );
};

export default Header;
