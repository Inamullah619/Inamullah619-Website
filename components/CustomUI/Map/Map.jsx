import React from 'react';
import '@/components/pages/Contact/contact.css';

const Map = () => {
  return (
    <div className='iframe'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13028.164171572984!2d75.6226448554199!3d35.28010580000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e463c5e95bb3e9%3A0x6fabe4deb7600c93!2sSCO%20Software%20Technology%20Park!5e0!3m2!1sen!2s!4v1724824799842!5m2!1sen!2s'
        allowfullscreen=''
      ></iframe>
    </div>
  );
};

export default Map;
