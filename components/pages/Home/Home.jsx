'use client';

import Image from 'next/image';
import './home.css';
import { useEffect } from 'react';
import gsap from 'gsap';

const MainPage = () => {
  useEffect(() => {
    // Animate the header text
    gsap.fromTo(
      '.home h1',
      {
        x: -600,
        opacity: 0,
        visibility: 'visible',
      },
      {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: 'power1.out',
      }
    );

    // Animate the image
    gsap.fromTo(
      '.box',
      {
        x: 600,
        opacity: 0,
        visibility: 'visible',
      },
      {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: 'power1.out',
      }
    );
  }, []);

  return (
    <section className='home'>
      <h1>
        Hi I'm <span>Inamullah 619 </span> Professional Frontend Web Developer.
      </h1>
      <div className='box'>
        <Image
          src={'/home-bg.png'}
          className='image'
          width={500}
          height={500}
          alt='Home Background'
        />
      </div>
    </section>
  );
};

export default MainPage;
