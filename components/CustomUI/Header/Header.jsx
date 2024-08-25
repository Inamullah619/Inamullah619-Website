'use client';

import NavLink from '../NavLink/NavLink';
import './header.css';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const Header = () => {
  useEffect(() => {
    gsap.fromTo(
      'header',
      {
        scale: 0,
        opacity: 0,
        visibility: 'visible',
      },
      {
        duration: 1.5,
        scale: 1,
        opacity: 1,
        ease: 'power1.out',
      }
    );
  }, []);
  const [nav, setNav] = useState(false);

  const navToggle = () => {
    setNav(!nav);
  };
  return (
    <>
      <header>
        <Link className='logo' href={'/'}>
          Inam 619
        </Link>
        <nav className={nav ? 'open' : ''}>
          <NavLink href={'/'}>Home</NavLink>
          <NavLink href={'/about'}>About</NavLink>
          <NavLink href={'/portfolio'}>Portfolio</NavLink>
          <NavLink href={'/services'}>Services</NavLink>
          <NavLink href={'/contact'}>Contact</NavLink>
        </nav>{' '}
        <div
          className={`hamburgerMenu ${nav ? 'open' : ''}`}
          onClick={navToggle}
        >
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </header>
    </>
  );
};

export default Header;
