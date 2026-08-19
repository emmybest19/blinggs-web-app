import { ARTICLE_CATEGORIES } from '../constants'

export default function ArticleEditorForm({ article, onFieldChange, onImageChange }) {
  return (
    <>
      {/* Title */}
      <label className="block mb-6">
        <span className="text-sm font-medium">Article Title *</span>
        <input
          name="title"
          value={article.title}
          onChange={onFieldChange}
          className="mt-2 w-full rounded-xl border px-4 py-3"
          placeholder="Enter article title..."
        />
      </label>

      {/* Excerpt */}
      <label className="block mb-6">
        <span className="text-sm font-medium">Excerpt *</span>
        <textarea
          name="excerpt"
          value={article.excerpt}
          onChange={onFieldChange}
          className="mt-2 w-full rounded-xl border px-4 py-3 h-24"
          placeholder="Brief description of the article..."
        />
      </label>

      {/* Category */}
      <label className="block mb-6">
        <span className="text-sm font-medium">Category *</span>
        <select
          name="category"
          value={article.category}
          onChange={onFieldChange}
          className="mt-2 w-full rounded-xl border px-4 py-3"
        >
          {ARTICLE_CATEGORIES.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>

      {/* Image */}
      <label className="block mb-8">
        <span className="text-sm font-medium">Featured Image</span>
        <div className="mt-2 flex items-center justify-center rounded-xl border-2 border-dashed p-6">
          <input type="file" accept="image/*" onChange={onImageChange} />
        </div>
      </label>

      {/* Author */}
      <h2 className="font-semibold mb-4">Author Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <input
          name="authorName"
          value={article.authorName}
          onChange={onFieldChange}
          className="rounded-xl border px-4 py-3"
          placeholder="Author name"
        />
        <input
          name="authorRole"
          value={article.authorRole}
          onChange={onFieldChange}
          className="rounded-xl border px-4 py-3"
          placeholder="Author role"
        />
        <input
          name="authorInitials"
          value={article.authorInitials}
          onChange={onFieldChange}
          className="rounded-xl border px-4 py-3"
          placeholder="Initials"
        />
      </div>

      {/* Content */}
      <label className="block mb-10">
        <span className="text-sm font-medium">Article Content *</span>
        <textarea
          name="content"
          value={article.content}
          onChange={onFieldChange}
          className="mt-2 w-full rounded-xl border px-4 py-3 h-64 font-mono text-sm"
          placeholder="<p>Your HTML content here...</p>"
        />
      </label>
    </>
  )
}
