import AccordionItem from './AccordionItem'

export default function FaqCard({ title, items }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-900">
        {title}
      </h3>

      {items.map((item) => (
        <AccordionItem key={item.q} {...item} />
      ))}
    </div>
  )
}
