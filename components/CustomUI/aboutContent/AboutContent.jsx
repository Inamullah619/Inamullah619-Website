import Image from 'next/image';
import './aboutContent.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutContent = () => {
  const contentRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const content = contentRef.current;
    const img = imgRef.current;

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
    gsap.fromTo(
      img,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: img,
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className='aboutContent'>
      <div ref={contentRef} className='contentDiv'>
        <h1>About Me</h1>
        <p>
          I'm Inamullah, a dedicated Frontend Web Developer with over 3 years of
          experience in building dynamic and responsive web applications. I
          excel at translating design concepts into functional user interfaces
          using modern technologies like React and Next.js. My passion lies in
          creating seamless, user-friendly experiences that not only meet but
          exceed expectations. Let's collaborate to turn your ideas into
          innovative web solutions!
        </p>
      </div>
      <div ref={imgRef} className='aboutImg'>
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

export default AboutContent;
