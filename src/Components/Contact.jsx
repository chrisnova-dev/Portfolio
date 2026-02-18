import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Contact</h2>
      <div className="flex justify-center gap-12">
        
        
        <a href="https://t.me/ChrisNova1" className="flex flex-col items-center">
          <FontAwesomeIcon icon={faTelegram} className="text-4xl text-[#24A1DE]" />
          <span className="mt-2">Telegram</span>
        </a>
        
        <a href="https://x.com/ChrisNova01" className="flex flex-col items-center">
          <FontAwesomeIcon icon={faTwitter} className="text-4xl text-[#1DA1F2]" />
          <span className="mt-2">Twitter</span>
        </a>

        <a href="mailto:mgbenyapeter@gmail.com" className="flex flex-col items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-gray-600" />
          <span className="mt-2">Email</span>
        </a>
      </div>
       <p className="text-gray-400 pt-10">mgbenyapeter@gmail.com</p>
    </section>
  );
};

export default Contact;