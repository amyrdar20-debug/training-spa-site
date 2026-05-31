import { ArrowLeft } from "@boxicons/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom"
import CourseItem from "../components/CourseItem";
import homeLogo from "../assets/images/programming.svg";

function Home() {
    return (
        <>
            <Navbar></Navbar>

            <section className="w-full p-8 md:px-12 md:p-20">
                <div className=" flex flex-col justify-between items-center gap-8 md:flex-row">
                    <div className="md:w-[50%]">
                        <h1 className="text-center md:text-start text-xl md:text-2xl pb-2 lg:pb-4 xl:text-3xl">
                            برنامه نویسی با{" "}
                            <span className="font-[lalezar]">amyrdar</span>
                        </h1>
                        <p className="text-justify text-sm md:text-base text-gray-700 xl:text-lg">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا
                            با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                            علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                            ایجاد کرد، در این صورت می توان امید داشت که تمام و
                            دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
                            پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                            اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                            اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                    <div className=" md:w-[40%] ">
                        <img
                            src={homeLogo}
                            alt="Placeholder Image"
                        />
                    </div>
                </div>
            </section>


            <section className="my-12">
                <div className="w-full p-6 md:px-8 lg:px-12 flex justify-between items-center">
                    <h2 className="text-xl md:text-2xl xl:text-3xl">دوره های آموزشی</h2>
                    <Link to={'/products'} className="flex hover:text-gray-700 transition-colors duration-400 lg:text-lg">همه دوره ها <ArrowLeft/></Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6">
                    <CourseItem></CourseItem>
                </div>
            </section>


            <Footer></Footer>
        </>
    );
}
export default Home;
