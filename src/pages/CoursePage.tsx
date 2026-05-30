import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Courses from "../utilities/data/courses";
function CoursePage() {
    const { id } = useParams();
    const course = Courses.find((c)=> c.to === id)
    if(!course) return <p>دوره ای پیدا نشد</p>
    return (
        <>
            <Navbar />
            <section className="my-12 px-6 lg:px-8 xl:px-12 text-center ">
                <div className=" flex flex-col gap-6 lg:flex-row ">
                    <img className="lg:max-w-[50%] rounded-lg" src={course.image} alt={course.imageAlt} />
                    <div className="flex flex-col gap-4 lg:gap-6 px-6 items-center lg:items-start">
                        <h2 className="text-2xl md:text-3xl">{course.title}</h2>
                        <h3 className="font-bold md:text-xl">مدرس: {course.teacher}</h3>
                        <p className="text-justify md:text-[16px]">{course.fullInfo}</p>
                        <button className="w-full xl:w-max xl:px-12 md:text-xl mt-8 mx-auto bg-blue-600 py-1 md:py-2 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors duration-400">خرید دوره</button>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CoursePage;
