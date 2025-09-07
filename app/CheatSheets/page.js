import CScard from "../components/CScard";
import CheatSheet from "../data/CheatSheet.json"
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Cheat Sheets</h1>
        <div className="lg:grid 2xl:grid-cols-3 lg:grid-cols-2 flex flex-col">
            {CheatSheet.map((CheatSheet,index)=>{
                return <CScard cheat_sheet_image={CheatSheet.cheat_sheet_image} language={CheatSheet.language} author={CheatSheet.author} key={index} price={CheatSheet.price} ></CScard>
            })}
            
        </div>
        <ul className=" bg-black/80 text-white  mt-2 flex pt-3 pb-3 justify-around  lg:w-[60%] rounded-2xl border-2">
              <li>
                <Link
                  href="/Ebooks"
                  className="block px-4 py-2 hover:underline hover:bg-black/60 md:text-lg"
                >
                  📘 Ebooks
                </Link>
              </li>
              <li>
                <Link
                  href="/Courses"
                  className="block px-4 py-2 hover:underline hover:bg-black/60 md:text-lg"
                >
                 🎥 Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/CaseStudy"
                  className="block px-4 py-2 hover:underline hover:bg-black/60 md:text-lg"
                >
                  📊 Case Studies
                </Link>
              </li>
            </ul>
      </div>
    </div>
  );
}