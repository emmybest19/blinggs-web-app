export default function ArticlePreviewModal({ article, onClose, onPublish }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-[#434c5d] text-white max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Article Preview</h2>
          <button onClick={onClose} className="text-gray-500">✕</button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {article.image && (
            <img
              src={article.image}
              alt=""
              className="w-full h-64 object-cover rounded-2xl"
            />
          )}

          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm text-indigo-600">
            {article.category}
          </span>

          <h1 className="text-3xl font-bold">{article.title}</h1>
          <p className="text-gray-600">{article.excerpt}</p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="font-semibold">{article.authorName}</span>
            <span>{article.authorRole}</span>
          </div>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 px-6 py-4 border-t">
          <button
            onClick={onClose}
            className="rounded-xl border px-6 py-3"
          >
            Close Preview
          </button>

          <button
            onClick={onPublish}
            className="rounded-xl bg-[#009875] text-white px-6 py-3"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
