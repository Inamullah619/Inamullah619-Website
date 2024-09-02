import { useEffect } from 'react';
import './skill.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  useEffect(() => {
    // Animation for the entire .skill section
    gsap.fromTo(
      '.skill',
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.skill',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animation for each progress bar
    document.querySelectorAll('.progress').forEach((progress) => {
      const percent = progress.querySelector('span').innerText;
      const progressBar = progress.querySelector('.progressPercent');

      gsap.fromTo(
        progressBar,
        {
          width: '0%',
        },
        {
          width: percent,
          duration: 1.5,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: progress,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section className='skill'>
      <h1>Skill</h1>

      <div className='skillGrid'>
        <div className='progress'>
          <div className='progressContent'>
            <h2>HTML</h2>
            <span>90%</span>
          </div>
          <div className='progressBox'>
            <div className='progressPercent'></div>
          </div>
        </div>
        <div className='progress'>
          <div className='progressContent'>
            <h2>CSS</h2>
            <span>90%</span>
          </div>
          <div className='progressBox'>
            <div className='progressPercent'></div>
          </div>
        </div>
        <div className='progress'>
          <div className='progressContent'>
            <h2>JavaScript</h2>
            <span>60%</span>
          </div>
          <div className='progressBox'>
            <div className='progressPercent'></div>
          </div>
        </div>
        <div className='progress'>
          <div className='progressContent'>
            <h2>TypeScript</h2>
            <span>55%</span>
          </div>
          <div className='progressBox'>
            <div className='progressPercent'></div>
          </div>
        </div>
        <div className='progress'>
          <div className='progressContent'>
            <h2>React.js</h2>
            <span>80%</span>
          </div>
          <div className='progressBox'>
            <div className='progressPercent'></div>
          </div>
        </div>
        <div className='progress'>
          <div className='progressContent'>
            <h2>Next.js</h2>
            <span>75%</span>
          </div>
          <div className='progressBox'>
            <div className='progressPercent'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
