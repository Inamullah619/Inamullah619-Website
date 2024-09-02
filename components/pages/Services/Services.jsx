'use client';

import ServicesCard from '@/components/CustomUI/ServicesCard/ServicesCard';
import './services.css';
import { useEffect } from 'react';
import gsap from 'gsap';

const ServicesData = [
  {
    id: 1,
    title: 'Responsive Web Design',
    para: 'Creating websites that look great on any device, using HTML, CSS, and modern design techniques. We ensure seamless user experiences across all screen sizes, enhancing accessibility and engagement.',
  },
  {
    id: 2,
    title: 'Single Page Applications (SPA)',
    para: 'Developing fast-loading single-page applications with React.js or Next.js, providing smooth and interactive experiences. Our SPAs are optimized for performance and user engagement.',
  },
  {
    id: 3,
    title: 'Figma to Code Conversion',
    para: 'Turning Figma or other design mockups into functional web pages using HTML, CSS, and JavaScript. We deliver pixel-perfect code that faithfully represents the original design.',
  },
  {
    id: 4,
    title: 'Performance Optimization',
    para: 'Improving website speed through code optimization, lazy loading, and best practices. Faster loading times lead to better user satisfaction and higher search rankings.',
  },
  {
    id: 5,
    title: 'API Integration',
    para: 'Connecting frontend applications with APIs to create interactive websites. We integrate third-party services and backend systems for real-time data and advanced functionality.',
  },
  {
    id: 6,
    title: 'Accessibility Optimization',
    para: 'Improving website accessibility to ensure it is usable for people with disabilities, following best practices and guidelines such as WCAG, to provide an inclusive digital experience for all users.',
  },
];

const Services = () => {
  useEffect(() => {
    gsap.fromTo(
      '.title',
      {
        duration: 1.5,
        // scale: 0,
        opacity: 0,
      },
      {
        // scale: 1,
        opacity: 1,
      }
    );
    gsap.fromTo(
      '.servicesCard',
      {
        duration: 1.5,
        // scale: 1,
        opacity: 0,
      },
      {
        // scale: 1,
        opacity: 1,
      }
    );
  }, []);

  return (
    <section className='services'>
      <h1 className='title'>Services</h1>
      <div className='services-container'>
        {ServicesData.map((service, index) => {
          // Assign classes based on position
          const positionClass =
            index % 3 === 0
              ? 'card-left'
              : index % 3 === 1
              ? 'card-center'
              : 'card-right';
          return (
            <ServicesCard
              key={service.id}
              cardTitle={service.title}
              cardPara={service.para}
              className={positionClass}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
