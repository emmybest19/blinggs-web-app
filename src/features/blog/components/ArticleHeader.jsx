export default function ArticleHeader({ article }) {
  return (
    <section className="w-full flex justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg px-6 py-10 sm:px-10">
        <span className="inline-block mb-6 rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-600">
          {article.category}
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          {article.title}
        </h1>

        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mb-8">
          {article.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="font-medium text-gray-700">{article.category}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
      </div>
    </section>
  )
}
