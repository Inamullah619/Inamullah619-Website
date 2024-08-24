'use client';

import Image from 'next/image';
import './home.css';
import { useEffect } from 'react';
import gsap from 'gsap';
// import AboutContent from '@/components/CustomUI/aboutSection/AboutContent';
// import PortfolioSection from '@/components/CustomUI/PortfolioSection/PortfolioSection';
// import AboutContent from '@/components/CustomUI/aboutSection/AboutSection';

const MainPage = () => {
  useEffect(() => {
    // Animate the homeContent div
    gsap.fromTo(
      '.home',
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
    gsap.fromTo(
      '.homeContent',
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
      '.box',
      {
        x: 600,
        opacity: 0,
        // visibility: 'visible',
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
    <>
      <section className='home'>
        <div className='homeContent'>
          <h1>
            Hello ✋ <br /> I'm <span>Inamullah 619</span> a Professional Web
            Developer.
          </h1>
          <p>
            With 3 years of dedicated experience, I specialize in crafting
            responsive and user-friendly web interfaces that adapt seamlessly to
            any device.
          </p>
          <button>Hire Me</button>
        </div>
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
      {/* <hr /> */}
      {/* <AboutContent />
      <hr />
      <PortfolioSection /> */}
    </>
  );
};

export default MainPage;
