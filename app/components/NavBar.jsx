"use client"
import React,{useState} from 'react';
import Link from 'next/link';


function NavBar() {
   const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className='flex md:justify-between p-4 font-bold md:flex-row flex-col items-center text-white'>
    <div className='flex justify-center items-center pl-5'><img src="open-book.svg" alt="" className='h-10'/><h1 className='text-3xl p-3 text-white' id='websiteLogo'>EduVault</h1> </div>   
    <ul className='flex md:justify-around justify-around text-md items-center pr-0 pl-0 md:pr-10  md:pl-10 sm:mr-3 mt-3 w-sm sm:w-xl'>
      <li className='hover:scale-125 hover:underline transition-all ease-in'><Link href='/' className=' hover:scale-110 text-xl transition-all ease-in-out'>Home</Link></li>
      <li className="relative">
          <button
            onClick={toggleDropdown}
            className="p-3 flex items-center gap-1  hover:scale-110 text-xl transition-all ease-in"
          >
           <span className='hover:underline'>Services</span>  <span className='text-lg'>{isOpen ? "▲" : "▼"}</span> 
          </button>
          {isOpen && (
            <ul className="absolute bg-black/80 text-white rounded-lg mt-2 w-44 shadow-lg pt-3 pb-3">
              <li>
                <Link
                  href="/Ebooks"
                  className="block px-4 py-2 hover:bg-black/60 text-lg"
                  onClick={()=>{isOpen(false)}}
                >
                  📘 Ebooks
                </Link>
              </li>
              <li>
                <Link
                  href="/Courses"
                  className="block px-4 py-2 hover:bg-black/60 text-lg"
                  onClick={()=>{isOpen(false)}}
                >
                 🎥 Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/CheatSheets"
                  className="block px-4 py-2 hover:bg-black/60 text-lg"
                  onClick={()=>{isOpen(false)}}
                >
                  📝 Cheat Sheets
                </Link>
              </li>
              <li>
                <Link
                  href="/CaseStudy"
                  className="block px-4 py-2 hover:bg-black/60 text-lg"
                  onClick={()=>{isOpen(false)}}
                >
                  📊 Case Studies
                </Link>
              </li>
            </ul>
          )}
        </li>
      <li className='hover:scale-125 hover:underline transition-all ease-in'><Link href='/about' className=' hover:scale-110 text-xl transition-all ease-in-out'>About</Link></li>
      
      <li className='hover:scale-125 hover:underline transition-all ease-in'><Link href='/contact' className='hover:scale-110 text-xl hover:underline transition-all ease-in-out'>Contact</Link></li>
    </ul>
    </div>
  );
}

export default NavBar;
