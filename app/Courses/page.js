import CoursesCard from "../components/CoursesCard";
import Courses from "../data/Courses.json"
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Courses</h1>
        <div className="lg:grid 2xl:grid-cols-3 lg:grid-cols-2 flex flex-col">
            {Courses.map((course,index)=>{
                return <CoursesCard course_image={course.course_image} tutor_name={course.tutor_name} skills={course.skills} description={course.description} key={index} course_name={course.course_name} price={course.price} ></CoursesCard>
            })}
            
        </div>
      
      <ul className=" bg-black/80 text-white mt-2 flex pt-3 pb-3 justify-around  lg:w-[60%] rounded-2xl border-2">
              <li>
                <Link
                  href="/Ebooks"
                  className="block px-4 py-2 hover:underline hover:bg-black/60 text-sm md:text-lg"
                >
                  📘 Ebooks
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