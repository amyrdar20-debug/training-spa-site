import CourseItem from "../components/CourseItem"
import Navbar from "../components/Navbar"


function Products(){
    return(
        <>
            <Navbar></Navbar>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6">
                <CourseItem></CourseItem>
            </section>
        </>
    )
}
export default Products