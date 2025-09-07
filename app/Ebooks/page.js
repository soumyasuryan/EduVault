
import Card from "../components/Card";
import Ebooks from '../data/Ebooks.json'
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Ebooks</h1>
        <div className="lg:grid 2xl:grid-cols-3 lg:grid-cols-2 flex flex-col">
            {Ebooks.map((book,index)=>{
                return <Card image={book.image} author={book.author} year={book.year} description={book.description} key={index} title={book.title} price={book.price} index={index} ></Card>
            })}
            
        </div>
      
      <ul className=" bg-black/80 text-white mt-2 flex pt-3 pb-3 justify-around  lg:w-[60%] rounded-2xl border-2">
              
              <li>
                <Link
                  href="/Courses"
                  className="block px-4 py-2 hover:underline hover:bg-black/60 text-sm md:text-lg"
                >
                 🎥 Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/CheatSheets"
                  className="block px-4 py-2 hover:underline hover:bg-black/60 text-sm md:text-lg"
                >
                  📝 Cheat Sheets
                </Link>
              </li>
              <li>
                <Link
                  href="/CaseStudy"
                  className="block px-4 py-2 hover:underline hover:bg-black/60 text-sm md:text-lg"
                >
                  📊 Case Studies
                </Link>
              </li>
            </ul>
           </div> 

    </div>
  );
}