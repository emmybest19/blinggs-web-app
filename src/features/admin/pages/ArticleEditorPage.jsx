import { useDisclosure } from '@shared/hooks/useDisclosure'

import ArticleEditorForm from '../components/ArticleEditorForm'
import ArticlePreviewModal from '../components/ArticlePreviewModal'
import { useArticleDraft } from '../hooks/useArticleDraft'

export default function ArticleEditorPage() {
  const preview = useDisclosure()
  const { article, updateField, updateImage, persistDraft, publish } =
    useArticleDraft()

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-8">Create Article</h1>

      <ArticleEditorForm
        article={article}
        onFieldChange={updateField}
        onImageChange={updateImage}
      />

      {/* Actions */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={preview.open}
          className="rounded-xl bg-gray-900 text-white px-6 py-3"
        >
          Preview
        </button>

        <button onClick={persistDraft} className="rounded-xl border px-6 py-3">
          Save Draft
        </button>

        <button
          onClick={publish}
          className="rounded-xl bg-[#009875] text-white px-6 py-3"
        >
          Publish
        </button>
      </div>

      <ArticlePreviewModal
        article={article}
        isOpen={preview.isOpen}
        onClose={preview.close}
        onPublish={publish}
      />
    </div>
  )
}
