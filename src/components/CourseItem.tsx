import { Link } from "react-router-dom";
import Courses from "../utilities/data/courses";

function CourseItem() {
    return (
        <>
            {Courses.map((course) => {
                return (
                    <div
                        key={course.id}
                        className="border border-gray-300 shadow-xl rounded-lg hover:shadow-2xl"
                    >
                        <img
                            className="rounded-t-lg"
                            src={course.image}
                            alt={course.imageAlt}
                        />
                        <div className="flex flex-col gap-2 p-4">
                            <h3 className="text-lg">{course.title}</h3>
                            <p className="min-h-12">{course.desc}</p>
                            <button className="bg-blue-600 px-3 py-1 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors duration-400">
                                <Link to={`/products/${course.to}`}>خرید دوره</Link>
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
export default CourseItem;
