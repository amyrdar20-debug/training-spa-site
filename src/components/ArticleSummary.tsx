import { Link, useParams } from "react-router-dom";
import articles from "../utilities/data/articles";

function ArticleSummary() {
    const { id } = useParams();
    const article = articles.find((a) => a.id == Number(id));

    return (
        <>
            <div className="p-6 md:px-8 lg:px-12 md:text-lg">
                <p className=" text-justify ">
                    {article?.summary}
                </p>

                <Link className="underline text-blue-400 hover:text-black transition-colors duration-400" to={`/blog/articles/${article?.to}`}>متن کامل مقاله</Link>
            </div>
        </>
    );
}
export default ArticleSummary;
