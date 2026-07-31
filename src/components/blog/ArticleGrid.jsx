import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Sparkles, Clock } from 'lucide-react'
import { articles } from '../../lib/data'

// Reliable online fallback image if local paths fail
const DEFAULT_FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80'

export default function ArticlesGrid() {
  const handleImageError = (e) => {
    e.target.onerror = null
    e.target.src = DEFAULT_FALLBACK_IMAGE
  }

  return (
    <section className="relative w-full max-w-7xl mx-auto py-12 px-4 md:px-8 font-sans">
      <div className="mx-auto max-w-7xl space-y-10">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#009875]/20 border border-[#009875]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#00D4AA] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fintech & Insights</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Latest Articles
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl">
            Explore our latest insights on fintech, cryptocurrency, security, and smart group savings.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, idx) => (
            <Link
              key={article.id || idx}
              to={`/blog/${article.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Image Banner Container with Image & Subtle Dark Tint */}
                <div className="relative h-52 overflow-hidden bg-[#0b1220]">
                  <img
                    src={article.image || DEFAULT_FALLBACK_IMAGE}
                    alt={article.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay to ensure text/badges pop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/80 via-[#0b1220]/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0b1220]/80 backdrop-blur-md text-[#00D4AA] border border-[#009875]/30 shadow-sm">
                      {article.category || 'Fintech'}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-7 space-y-3">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#009875]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      5 min read
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

              {/* Card Footer */}
              <div className="px-6 md:px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-[#009875] font-semibold text-sm group-hover:text-emerald-600 transition-colors">
                <span>Read Article</span>
                <div className="w-8 h-8 rounded-full bg-[#009875]/10 group-hover:bg-emerald-50 flex items-center justify-center transition-all group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 text-[#009875] group-hover:text-emerald-600 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}