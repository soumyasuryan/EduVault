"use client"
import React,{useState} from 'react';
import Link from 'next/link';


function NavBar() {
   const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
   const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2((prev) => !prev);
  };
  return (
    <div className='flex md:justify-between p-4 font-bold md:flex-row flex-col items-center text-white'>
    <div className='flex justify-between w-full md:w-auto'>
      <button onClick={toggleDropdown2}>
        <img src="/hamburger.svg" className='h-10 md:hidden' alt="" />
      </button>
      <div className='flex justify-center items-center pl-5'><img src="open-book.svg" alt="" className='h-10'/><h1 className='text-3xl p-3 text-white' id='websiteLogo'>EduVault</h1> </div> 
      <a href="/contact" className='mt-3'>
                <img src="/contact_icon.svg" className="h-10 md:invisible" alt="Contact Icon" />
              </a>
       </div> 
       {isOpen2 && (
            <ul className="absolute top-15 w-90 mx-auto rounded-md text-sm left-0 right-0 bg-gray-800/30 mt-2 rounded shadow-md sm:hidden z-50 flex flex-co items-center justify-around">
              <li><a href="/" className="block px-4 py-2 hover:bg-gray-700/10 text-[10px]">HOME</a></li>
              <li><a className="block px-4 py-2 hover:bg-gray-700/10 text-[10px]"
                onClick={toggleDropdown}
                >FEATURES</a></li>
              <li><a href="/about" className="block px-4 py-2 hover:bg-gray-700/10 text-[10px]">ABOUT</a></li>
             
            </ul>
            
            
          )}
                    {isOpen && (
            <ul className="md:hidden absolute bg-black/80 text-white rounded-lg mt-20 w-80 shadow-lg pt-3 pb-3 flex">
              <li>
                <Link
                  href="/Ebooks"
                  className="block px-4 py-2 hover:bg-black/60 sm:text-lg text-[10px] "
                  onClick={()=>{isOpen(false)}}
                >
                 <div className='flex flex-col items-center justify-center'><span> 📘 </span><span> Ebooks
      </span></div>           </Link>
              </li>
              <li>
                <Link
                  href="/Courses"
                  className="block px-4 py-2 hover:bg-black/60 sm:text-lg text-[10px] "
                  onClick={()=>{isOpen(false)}}
                >
                 <div className='flex flex-col items-center justify-center'><span>🎥  </span><span>Courses
      </span></div>           </Link>
              </li>
              <li>
                <Link
                  href="/CheatSheets"
                  className="block px-4 py-2 hover:bg-black/60 sm:text-lg text-[10px] "
                  onClick={()=>{isOpen(false)}}
                >
                 <div className='flex flex-col items-center justify-center'><span> 📝 </span><span> Cheat Sheets </span></div>
                </Link>
              </li>
              <li>
                <Link
                  href="/CaseStudy"
                  className="block px-4 py-2 hover:bg-black/60 sm:text-lg text-[10px] "
                  onClick={()=>{isOpen(false)}}
                >
                 <div className='flex flex-col items-center justify-center'><span> 📊 </span><span> Case Studies </span></div>
                </Link>
              </li>
            </ul>)}
          
    <ul className='hidden md:flex md:justify-around justify-around text-md items-center pr-0 pl-0 md:pr-10  md:pl-10 sm:mr-3 mt-3 w-sm sm:w-xl'>
      <li className='hover:scale-125 hover:underline transition-all ease-in'><Link href='/' onClick={()=>{isOpen(false)}} className='text-sm hover:scale-110 md:text-xl transition-all ease-in-out'>Home</Link></li>
      <li className="relative">
          <button
            onClick={toggleDropdown}
            className="p-3 flex items-center gap-1  hover:scale-110 text-sm sm:text-xl transition-all ease-in"
          >
           <span className='hover:underline text-sm md:text-xl'>Services</span>  <span className='text-lg'>{isOpen ? "▲" : "▼"}</span> 
          </button>
          {isOpen && (
            <ul className="absolute bg-black/80 text-white rounded-lg mt-2 w-44 shadow-lg pt-3 pb-3">
              <li>
                <Link
                  href="/Ebooks"
                  className="block px-4 py-2 hover:bg-black/60 sm:text-lg text-sm "
                  onClick={()=>{isOpen(false)}}
                >
                  📘 Ebooks
                </Link>
              </li>
              <li>
                <Link
                  href="/Courses"
                  className="block px-4 py-2 hover:bg-black/60 sm:text-lg text-sm "
                  onClick={()=>{isOpen(false)}}
                >
                 🎥 Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/CheatSheets"
                  className="block px-4 py-2 hover:bg-black/60 sm:text-lg text-sm "
                  onClick={()=>{isOpen(false)}}
                >
                  📝 Cheat Sheets
                </Link>
              </li>
              <li>
                <Link
                  href="/CaseStudy"
                  className="block px-4 py-2 hover:bg-black/60 sm:text-lg text-sm "
                  onClick={()=>{isOpen(false)}}
                >
                  📊 Case Studies
                </Link>
              </li>
            </ul>
          )}
        </li>
      <li className='hover:scale-125 hover:underline transition-all ease-in'><Link href='/about' onClick={()=>{isOpen(false)}} className='text-sm hover:scale-110 md:text-xl transition-all ease-in-out'>About</Link></li>
      
      <li className='hover:scale-125 hover:underline transition-all ease-in'><Link href='/contact' onClick={()=>{isOpen(false)}} className='text-smhover:scale-110 tmd:ext-xl hover:underline transition-all ease-in-out'>Contact</Link></li>
    </ul>
    </div>
  );
}

export default NavBar;
