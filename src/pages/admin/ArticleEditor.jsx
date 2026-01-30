import { useState } from "react";
import ArticlePreviewModal from "./ArticlePreviewModal";

export default function ArticleEditor() {
  const [showPreview, setShowPreview] = useState(false);

  const [article, setArticle] = useState({
    title: "",
    excerpt: "",
    category: "Fintech",
    image: null,
    authorName: "",
    authorRole: "",
    authorInitials: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setArticle((prev) => ({ ...prev, [name]: value }));
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (file) {
      setArticle((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  }

  function saveDraft() {
    localStorage.setItem("article_draft", JSON.stringify(article));
    alert("Draft saved");
  }

  function publishArticle() {
    console.log("PUBLISHED ARTICLE:", article);
    alert("Article published");
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 ">
      <h1 className="text-2xl font-bold mb-8">Create Article</h1>

      {/* Title */}
      <label className="block mb-6">
        <span className="text-sm font-medium">Article Title *</span>
        <input
          name="title"
          value={article.title}
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
          className="mt-2 w-full rounded-xl border px-4 py-3"
        >
          <option>Fintech</option>
          <option>Crypto</option>
          <option>Security</option>
        </select>
      </label>

      {/* Image */}
      <label className="block mb-8">
        <span className="text-sm font-medium">Featured Image</span>
        <div className="mt-2 flex items-center justify-center rounded-xl border-2 border-dashed p-6">
          <input type="file" onChange={handleImage} />
        </div>
      </label>

      {/* Author */}
      <h2 className="font-semibold mb-4">Author Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <input
          name="authorName"
          value={article.authorName}
          onChange={handleChange}
          className="rounded-xl border px-4 py-3"
          placeholder="Author name"
        />
        <input
          name="authorRole"
          value={article.authorRole}
          onChange={handleChange}
          className="rounded-xl border px-4 py-3"
          placeholder="Author role"
        />
        <input
          name="authorInitials"
          value={article.authorInitials}
          onChange={handleChange}
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
          onChange={handleChange}
          className="mt-2 w-full rounded-xl border px-4 py-3 h-64 font-mono text-sm"
          placeholder="<p>Your HTML content here...</p>"
        />
      </label>

      {/* Actions */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setShowPreview(true)}
          className="rounded-xl bg-gray-900 text-white px-6 py-3"
        >
          Preview
        </button>

        <button
          onClick={saveDraft}
          className="rounded-xl border px-6 py-3"
        >
          Save Draft
        </button>

        <button
          onClick={publishArticle}
          className="rounded-xl bg-[#009875] text-white px-6 py-3"
        >
          Publish
        </button>
      </div>

      {showPreview && (
        <ArticlePreviewModal
          article={article}
          onClose={() => setShowPreview(false)}
          onPublish={publishArticle}
        />
      )}
    </div>
  );
}
