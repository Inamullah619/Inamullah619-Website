'use client';

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa6';
import './footer.css';
import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      'footer',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power1.out',
      }
    );

    gsap.fromTo(
      '.footerPara',
      {
        x: -300,
      },
      {
        duration: 1.5,
        x: 0,
        ease: 'power1.out',
      }
    );

    gsap.fromTo(
      '.footerIcon',
      {
        x: 300,
      },
      {
        duration: 1.5,
        x: 0,
        ease: 'power1.out',
      }
    );
  }, []);

  return (
    <footer>
      <p className='footerPara'>&copy; Copyright. All rights Reserved.</p>
      <div className='footerIcon'>
        <Link
          target='blank'
          href={'https://www.facebook.com/profile.php?id=61550480851426'}
        >
          <FaFacebookF />
        </Link>
        <Link target='blank' href={'https://www.instagram.com/inamsixonenine/'}>
          <FaInstagram />
        </Link>
        <Link target='blank' href={'https://www.tiktok.com/@inamparkour619'}>
          <FaTiktok />
        </Link>
        <Link target='blank' href={'https://github.com/Inamullah619'}>
          <FaGithub />
        </Link>
        <Link
          target='blank'
          href={'https://www.linkedin.com/in/inamullah-fida-hussain-a3791b308/'}
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
