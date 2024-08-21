'use client';

import NavLink from '../NavLink/NavLink';
import './header.css';
import { useEffect } from 'react';
import gsap from 'gsap';
// import { SiLinktree } from 'react-icons/si';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { SiLinktree } from 'react-icons/si';
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
  return (
    <header className='header'>
      <nav>
        <NavLink href={'/'}>Home</NavLink>
        <NavLink href={'/about'}>About</NavLink>
        <NavLink href={'/services'}>Services</NavLink>
        <NavLink href={'/contact'}>Contact</NavLink>
      </nav>
      <div className='icon'>
        {/* <SiLinktree /> */}
        <Link target='blank' href={'https://linktr.ee/inamullah619'}>
          <SiLinktree />
        </Link>
        <Link
          target='blank'
          href={'https://www.linkedin.com/in/inamullah-fida-hussain-a3791b308/'}
        >
          <FaLinkedinIn />
        </Link>
        <Link target='blank' href={'https://github.com/Inamullah619'}>
          <FaGithub />
        </Link>
      </div>
    </header>
  );
};

export default Header;
