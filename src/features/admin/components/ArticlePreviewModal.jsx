import Modal from '@shared/ui/Modal'

export default function ArticlePreviewModal({ article, isOpen, onClose, onPublish }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-4xl">
      <div className="bg-[#434c5d] text-white rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold">Article Preview</h2>
          <button onClick={onClose} aria-label="Close preview" className="text-white/60">
            ✕
          </button>
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
          <p className="text-white/70">{article.excerpt}</p>

          <div className="flex items-center gap-4 text-sm text-white/60">
            <span className="font-semibold">{article.authorName}</span>
            <span>{article.authorRole}</span>
          </div>

          {/*
            Content is authored by a trusted sub-admin in this editor, so it is
            rendered as HTML. Sanitize server-side before this ever accepts
            third-party input.
          */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 px-6 py-4 border-t border-white/10">
          <button onClick={onClose} className="rounded-xl border border-white/20 px-6 py-3">
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
    </Modal>
  )
}
