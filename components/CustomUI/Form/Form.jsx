import React from 'react';
// import './contact.css'
import '@/components/pages/Contact/contact.css';

const Form = () => {
  return (
    <div className='formPage'>
      <form action=''>
        <input type='text' name='name' placeholder='First Name' />
        <input type='text' name='name' placeholder='Last Name' />
        <input type='email' name='email' placeholder='Email' />
        <input type='text' name='subject' placeholder='Subject' />
        <textarea name='message' placeholder='Message' />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Form;
