import React from 'react';
 const Footer = () => {
    const date=new Date();
  return (
    <footer className="mx-5 mt-auto text-white text-center py-2 bg-black"> ©{date.getFullYear()}{""} 
        <a href="https://mms-it/com" className='underline text-gray-300'>MMS IT</a>. All rights reserved.
    </footer>
  );
};
export default Footer;
