import FaqGroup from './FaqGroup'

export default function FaqList({ groups, query, isSearching, onClearSearch }) {
  if (!groups.length) {
    return (
      <div className="rounded-xl border border-[#232323] bg-[#121212] px-6 py-14 text-center">
        <p className="text-sm font-semibold text-[#d6d6d6]">No answers found</p>

        <p className="mx-auto mt-2 max-w-[400px] font-sans text-[13px] leading-[1.7] text-[#7c8184]">
          Nothing matches &ldquo;{query}&rdquo;. Try a different term, or send
          the team a message below.
        </p>

        <button
          type="button"
          onClick={onClearSearch}
          className="mt-5 cursor-pointer font-sans text-[12.5px] font-semibold text-brand hover:underline"
        >
          Clear search
        </button>
      </div>
    )
  }

  return (
    <div>
      {groups.map((group) => (
        // Re-key on the query so each group's open item resets to the first
        // match when the result set changes.
        <FaqGroup key={`${group.id}-${isSearching ? query : ''}`} group={group} />
      ))}
    </div>
  )
}
