export default function ArticleBody({ article }) {
  return (
    <section className="w-full flex justify-center px-4 pb-16">
      <div className="w-full bg-white rounded-3xl shadow-lg px-6 py-8 sm:px-10 sm:py-12">
        <div className="prose prose-gray max-w-none">
          <p>{article.description}</p>
        </div>
      </div>
    </section>
  )
}
