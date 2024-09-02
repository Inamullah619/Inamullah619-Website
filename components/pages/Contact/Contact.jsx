'use client';

import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import './contact.css';
import { IoMdMail } from 'react-icons/io';
import Map from '@/components/CustomUI/Map/Map';
import Form from '@/components/CustomUI/Form/Form';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.fromTo(
      '.contactInformation',
      {
        x: -600,
        duration: 1.5,
        opacity: 0,
      },
      {
        x: 0,
        ease: 'power1.out',
        opacity: 1,
      }
    );
    gsap.fromTo(
      '.formPage',
      {
        x: 600,
        opacity: 0,
        duration: 0.5,
      },
      {
        x: 0,
        ease: 'power1.out',
        opacity: 1,
      }
    );
    gsap.fromTo(
      '.iframe',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: '.iframe',
        },
        duration: 1.5,
        ease: 'power1.out',
      }
    );
  }, []);

  return (
    <>
      <section className='contact'>
        <div className='contactInformation'>
          <div className='contactText'>
            <h1>Send me a message</h1>
            <p>
              Whether you wish to discuss new ideas or have a project for me,
              simply fill this form and I’ll get back to you soon.
            </p>
          </div>
          <div className='listParent'>
            <div className='contacList'>
              <span>
                <FaLocationDot />
              </span>
              <div>
                <h3>Address</h3>
                <p>Satelite Town, Skardu</p>
              </div>
            </div>
            <div className='contacList'>
              <span>
                <FaPhone />
              </span>
              <div>
                <h3>Phone Number</h3>
                <p>0123-456-7890</p>
              </div>
            </div>
            <div className='contacList'>
              <span>
                <IoMdMail />
              </span>
              <div>
                <h3>E-Mail</h3>
                <p>Inamullahsixonenine@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <Form />
        <Map />
      </section>
    </>
  );
};

export default Contact;
