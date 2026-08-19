/** Shown while a lazily-loaded feature bundle is fetched. */
export default function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#434c5d]">
      <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-[#00D4AA] animate-spin" />
    </div>
  )
}
