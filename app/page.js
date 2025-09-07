import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center mt-32 w-[80%]">
        <h1 className="lg:text-[100px] md:text-[80px] sm:text-[50px] text-[40px] font-serif text-center">Discover and own the knowledge that matters.</h1>
        <h1 className="md:text-2xl text-sm text-center">Your smart vault for books, learning, and beyond</h1>
        <div className="flex lg:flex-row flex-col justify-around w-full items-center">
        <Link
          href="/Ebooks"
          className="bg-black text-white p-4 shadow-lg shadow-gray-600 rounded-xl lg:mt-20 mt-5 text-xl lg:w-62 w-72 flex justify-center 
                     transition duration-500 ease-in-out 
                     hover:shadow-2xl hover:scale-105 hover:border hover:border-gray-500"
        >
          E-Books
        </Link>
        <Link
          href="/Courses"
          className="bg-black text-white p-4 shadow-lg shadow-gray-600 rounded-xl lg:mt-20 mt-5 text-xl lg:w-62 w-72 flex justify-center 
                     transition duration-500 ease-in-out 
                     hover:shadow-2xl hover:scale-105 hover:border hover:border-gray-500"
        >
          Courses
        </Link>
        <Link
          href="/CheatSheets"
          className="bg-black text-white p-4 shadow-lg shadow-gray-600 rounded-xl lg:mt-20 mt-5 text-xl lg:w-62 w-72 flex justify-center 
                     transition duration-500 ease-in-out 
                     hover:shadow-2xl hover:scale-105 hover:border hover:border-gray-500"
        >
          Cheat Sheets
        </Link>
        <Link
          href="/CaseStudy"
          className="bg-black text-white p-4 shadow-lg shadow-gray-600 rounded-xl lg:mt-20 mt-5 text-xl lg:w-62 w-72 flex justify-center 
                     transition duration-500 ease-in-out 
                     hover:shadow-2xl hover:scale-105 hover:border hover:border-gray-500"
        >
          Case Studies
        </Link>
        </div>
      </div>
    </div>
  );
}
