import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

import { buildPath, ROUTES } from '@app/router/routes'

import { DEFAULT_ARTICLE_IMAGE, DEFAULT_READ_TIME } from '../constants'

export default function ArticleCard({ article }) {
  const handleImageError = (event) => {
    event.target.onerror = null
    event.target.src = DEFAULT_ARTICLE_IMAGE
  }

  return (
    <Link
      to={buildPath(ROUTES.blogDetail, { id: article.id })}
      className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
    >
      <div>
        {/* Image banner */}
        <div className="relative h-52 overflow-hidden bg-[#0b1220]">
          <img
            src={article.image || DEFAULT_ARTICLE_IMAGE}
            alt={article.title}
            onError={handleImageError}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/80 via-[#0b1220]/20 to-transparent" />

          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0b1220]/80 backdrop-blur-md text-[#00D4AA] border border-[#009875]/30 shadow-sm">
              {article.category || 'Fintech'}
            </span>
          </div>
        </div>

        {/* Card content */}
        <div className="p-6 md:p-7 space-y-3">
          <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#009875]" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {article.readTime || DEFAULT_READ_TIME}
            </span>
          </div>

          <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#009875] transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h2>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
            {article.description}
          </p>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-6 md:px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-[#009875] font-semibold text-sm group-hover:text-emerald-600 transition-colors">
        <span>Read Article</span>
        <div className="w-8 h-8 rounded-full bg-[#009875]/10 group-hover:bg-emerald-50 flex items-center justify-center transition-all group-hover:translate-x-1">
          <ArrowRight className="w-4 h-4 text-[#009875] group-hover:text-emerald-600 transition-colors" />
        </div>
      </div>
    </Link>
  )
}
