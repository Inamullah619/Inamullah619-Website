'use client';

import Image from 'next/image';
import './home.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

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
        duration: 1.5,
      }
    );
    gsap.fromTo(
      '.homeContent',
      {
        opacity: 0,
        x: -600, // Start slightly left of its final position
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
      },
      {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: 'power1.out',
      }
    );
  }, []);

  const [text] = useTypewriter({
    words: [
      'Web Developer',
      'Frontend Developer',
      'Next.js Developer',
      'React Developer',
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  return (
    <>
      <section className='home'>
        <div className='homeContent'>
          <h1>
            Hello ✋ <br /> I'm <span>Inamullah 619</span>, a Professional{' '}
            <br /> {text}
            {/*   <Cursor cursorStyle='|' /> */}.
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
    </>
  );
};

export default MainPage;
