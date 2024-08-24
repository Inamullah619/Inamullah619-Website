'use client';

import Image from 'next/image';
import './about.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Skill from '@/components/CustomUI/Skill/Skill';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const contentRef = useRef();
  const imgRef = useRef();
  const mySelfRef = useRef();

  useEffect(() => {
    const content = contentRef.current;
    // const image = imgRef.current;
    const mySelf = mySelfRef.current;

    gsap.fromTo(
      content,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: content,
          once: true,
        },
      }
    );
    // gsap.fromTo(
    //   image,
    //   { scale: 0, opacity: 0 },
    //   {
    //     scale: 1,
    //     opacity: 1,
    //     duration: 1.5,
    //     scrollTrigger: {
    //       trigger: image,
    //       once: true,
    //     },
    //   }
    // );
    gsap.fromTo(
      mySelf,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: mySelf,
          once: true,
        },
      }
    );
  }, []);

  return (
    <>
      <section className='aboutContent'>
        <div ref={contentRef} className='contentDiv'>
          <h1>About Me</h1>
          <div className='paraDiv'>
            <p>
              I'm Inamullah, a Web Developer with 3 years of experience building
              responsive web applications. I specialize in turning design
              concepts into functional interfaces using React and Next.js.
            </p>
            <p>
              My passion lies in creating user-friendly experiences that exceed
              expectations. I aim to deliver innovative solutions that are both
              effective and engaging.
            </p>
            <p>
              Let's collaborate to turn your ideas into reality. Together, we
              can build dynamic and impactful web solutions that stand out and
              perform seamlessly.
            </p>
          </div>
        </div>
        {/* <div ref={imgRef} className='aboutImg'>
          <Image
            src={'/home-bg.png'}
            className='image'
            width={500}
            height={500}
            alt='Home Background'
          />
        </div> */}
        <div className='mySelf' ref={mySelfRef}>
          <div className='list'>
            <b>First Name: </b>
            <span>Inamullah</span>
          </div>
          <div className='list'>
            <b>Nationality: </b>
            <span>Pakistan</span>
          </div>
          <div className='list'>
            <b>Freelance: </b>
            <span>Available</span>
          </div>
          <div className='list'>
            <b>Email: </b>
            <span>inamullahsixonenine@gmail.com</span>
          </div>
          <div className='list'>
            <b>Spoken Language: </b>
            <span>English, Urdu</span>
          </div>
          <div className='list'>
            <b>Years of Experience: </b>
            <span>3+ Years</span>
          </div>
          <div className='list'>
            <b>Current Location: </b>
            <span>Peshawar, Pakistan</span>
          </div>
          {/* <div className='list'>
            <b>Skills: </b>
            <span>React, Next.js, JavaScript, TypeScript, Tailwind CSS</span>
          </div> */}
        </div>
      </section>
      <Skill />
    </>
  );
};

export default About;
