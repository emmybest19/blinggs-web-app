import { ArticleBody } from "../components/blogDetails/ArticleBody"
import ArticleHeader from "../components/blogDetails/ArticleHeader"
import { ShareArticle } from "../components/blogDetails/ShareArticle"

function BlogDynamic() {
    return (
        <div className="bg-[#434c5d] px-[60px] pb-8">
            <ArticleHeader />
            <ArticleBody />
            <ShareArticle />

        </div>
    )
}

export default BlogDynamic
