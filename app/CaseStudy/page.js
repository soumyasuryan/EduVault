import CaseStudyCard from "../components/CaseStudyCard";
import CaseStudy from "../data/CaseStudy.json"
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Case Study</h1>
        <div className="gap-10 mt-10 lg:grid lg:grid-cols-2 flex flex-col">
            {CaseStudy.map((CaseStudy,index)=>{
                return <CaseStudyCard {...CaseStudy} key={index}  ></CaseStudyCard>
            })}
            
        </div>
        <ul className=" bg-black/80 text-white mt-20 flex pt-3 pb-3 justify-around  lg:w-[60%] rounded-2xl border-2">
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
                  href="/CheatSheets"
                  className="block px-4 py-2 hover:underline hover:bg-black/60 md:text-lg"
                >
                  📝 Cheat Sheets
                </Link>
              </li>
              
            </ul>
      </div>
    </div>
  );
}