import { Link , useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import { ArrowLeft } from "@boxicons/react"
import articles from "../utilities/data/articles";

function ArticlePage(){
    const { to } = useParams()
    const article = articles.find((a)=> a.to === to)

    if(!article) return <p>مقاله ای پیدا نشد</p>
    return (
        <>
            <Navbar></Navbar>
            <div className="p-6 text-xl ">
                <Link className="flex justify-end items-center" to={'/blog'}>لیست  مقالات<ArrowLeft/></Link>
            </div>

            <div className="p-6 md:px-8 lg:px-12 text-center">
                <h2 className="text-2xl xl:text-3xl mb-4">{article?.title}</h2>
                <p className="text-justify">{article?.text}</p>
            </div>
        </>
    )
}
export default ArticlePage