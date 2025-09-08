import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <div className='flex flex-col items-center justify-center w-full bottom-0 text-xs p-5 mt-50 bg-white/10 text-white'>

      <ul>
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=soumyasuryan86@gmail.com"
          target="_blank"
          rel="noopener noreferrer" className='m-2'>GMail</Link >
        <Link href='https://github.com/soumyasuryan/' target='_blank' className='m-2'>GitHub</Link >
      </ul>

      <ul className='flex'>
        <Link href='/' className='m-1'>Home</Link >
        <Link href='/about' className='m-1'>About</Link >
        <Link href='/contact' className='m-1'>Contact</Link >
      </ul>

    </div>
  );
}

export default Footer;
