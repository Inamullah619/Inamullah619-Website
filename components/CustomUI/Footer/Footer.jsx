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

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      'footer',
      {
        opacity: 0,
        // display: 'none',
      },
      {
        opacity: 1,
        // display: 'flex',
      }
    );

    gsap.fromTo(
      '.footerPara',
      {
        opacity: 0,
        x: -600, // Start slightly below its final position
      },
      {
        duration: 1.5,
        opacity: 1,
        x: 0,
        ease: 'power1.out',
      }
    );

    // Animate the image
    gsap.fromTo(
      '.footerIcon',
      {
        x: 600,
        opacity: 0,
      },
      {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: 'power1.out',
      }
    );
    console.log('Hi');
  }, []);
  return (
    <footer>
      <p className='footerPara'>&copy;Copyright. All rights Reseverd.</p>
      {/* <div className='footerIcon'>
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
      </div> */}
    </footer>
  );
};

export default Footer;
