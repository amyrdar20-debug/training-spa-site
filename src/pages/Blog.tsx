import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import articles from "../utilities/data/articles";
function Articles() {
    return (
        <>
            <Navbar></Navbar>
            <section>
                <div className="border-b border-gray-300 p-6 text-center">
                    <h2 className="text-2xl md:text-3xl">صفحه مقالات</h2>
                </div>
                <div className="border-b border-gray-300 p-6 text-center flex justify-center">
                    {articles.map((article) => (
                        <>
                            <NavLink
                                className={({isActive}) => `text-sm md:text-lg px-4 py-2 rounded-lg mx-2 border hover:text-black transition-colors duration-400 ${isActive ? 'text-black': 'text-gray-500'}`}
                                to={`/blog/${article.id}`}
                            >
                                {article.title}
                            </NavLink>
                            
                        </>
                    ))}
                </div>

                <Outlet></Outlet>
            </section>
        </>
    );
}
export default Articles;
