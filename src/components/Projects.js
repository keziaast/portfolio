'use client'
// src/components/Projects.js

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { projects } from '../lib/data'

function getAutoImage(project) {
  if (project.imageUrl) return project.imageUrl
  if (project.demoUrl) {
    return `https://api.microlink.io/?url=${encodeURIComponent(project.demoUrl)}&screenshot=true&meta=false&embed=screenshot.url`
  }
  if (project.pptEmbedUrl) {
    const idMatch = project.pptEmbedUrl.match(/\/d\/([a-zA-Z0-9_-]+)/)
    if (idMatch) {
      return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w800`
    }
  }
  return null
}

const typeBadge = {
  
  web:    { label: 'Web App',    style: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' },
  ppt:    { label: 'Presentasi', style: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' },
  system: { label: 'Sistem',     style: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' },
  other:  { label: 'Lainnya',    style: 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400' },
}

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [showPpt,  setShowPpt]  = useState(false)
  const [imgErrors, setImgErrors] = useState({})

  const featured = projects.filter(p => p.featured)

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  function openModal(project) { setSelected(project); setShowPpt(false) }
  function closeModal()       { setSelected(null);    setShowPpt(false) }

  function handleImgError(id) {
    setImgErrors(prev => ({ ...prev, [id]: true }))
  }

  return (
    <>
      <section id="projects" className="py-24 px-[6%] max-w-[1180px] mx-auto">
        <div className="reveal">
          <span className="sec-tag">Karya Saya</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-1">
            Projects & <span className="text-[#0BB8D4]">Tugas</span>
          </h2>
          <div className="sec-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => {
            const badge    = typeBadge[project.type] || typeBadge.other
const autoImg = getAutoImage(project)
const hasImg  = autoImg && !imgErrors[project.id]
            return (
              <div key={project.id}
                className="card overflow-hidden hover:-translate-y-1 hover:shadow-xl reveal
                           flex flex-col cursor-pointer group"
                style={{ transitionDelay: `${i * 0.07}s` }}
                onClick={() => openModal(project)}
              >
                {/* ── Thumbnail dengan gambar asli atau fallback emoji ── */}
                <div className="h-40 flex items-center justify-center relative
                                bg-gray-50 dark:bg-[#13131E] border-b border-gray-200
                                dark:border-white/[0.07] overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0"
                       style={{ background: 'linear-gradient(135deg,rgba(11,184,212,.06),transparent 60%)' }} />

                  {hasImg ? (
                    <Image
                      src={autoImg}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImgError(project.id)}
                    />
                  ) : (
                    <span className="relative z-10 text-5xl
                                     group-hover:scale-110 transition-transform duration-300">
                      {project.imageFallback}
                    </span>
                  )}
                </div>

                {/* ── Body: flex col + mt-auto pada tombol ── */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Badge + tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${badge.style}`}>
                      {badge.label}
                    </span>
                    {project.tags.map(tag => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>

                  <h3 className="font-bold text-base mb-2">{project.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-[#7878A0] leading-relaxed
                                mb-4 line-clamp-2 flex-1">
                    {project.description}
                  </p>

                  {/* ✅ Tombol selalu di bawah (mt-auto) → sejajar antar card */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-1"
                       onClick={e => e.stopPropagation()}>
                    <button onClick={() => openModal(project)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#0BB8D4] text-white
                                 hover:bg-[#0891B2] transition-colors flex-shrink-0">
                      Details
                    </button>
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                         className="text-xs font-semibold px-3 py-1.5 rounded-lg border
                                    border-gray-200 dark:border-white/[0.07] text-gray-500
                                    hover:border-[#0BB8D4] hover:text-[#0BB8D4] transition-colors flex-shrink-0">
                        Preview
                      </a>
                    )}
                    {project.pptEmbedUrl && (
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-lg border
                                       border-amber-300 dark:border-amber-700
                                       text-amber-600 dark:text-amber-400 cursor-pointer
                                       hover:bg-amber-50 dark:hover:bg-amber-900/20
                                       transition-colors flex-shrink-0">
                        📑 Lihat PPT
                      </span>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                         className="text-xs font-semibold px-3 py-1.5 rounded-lg border
                                    border-gray-200 dark:border-white/[0.07] text-gray-500
                                    hover:border-[#0BB8D4] hover:text-[#0BB8D4] transition-colors flex-shrink-0">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── MODAL ── */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
             style={{ background: 'rgba(0,0,0,0.75)' }}
             onClick={closeModal}>
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto
                          bg-white dark:bg-[#16161F] rounded-2xl
                          border border-gray-200 dark:border-white/[0.1] shadow-2xl"
               onClick={e => e.stopPropagation()}>

            {/* Tutup */}
            <button onClick={closeModal}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center
                         bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400
                         hover:bg-gray-200 dark:hover:bg-white/20 transition-colors font-bold text-sm">
              ✕
            </button>

            {/* Thumbnail modal */}
            <div className="h-52 flex items-center justify-center relative
                            bg-gray-50 dark:bg-[#13131E] border-b border-gray-200
                            dark:border-white/[0.07] rounded-t-2xl overflow-hidden">
              <div className="absolute inset-0"
                   style={{ background: 'linear-gradient(135deg,rgba(11,184,212,.08),transparent 60%)' }} />
              {getAutoImage(selected) && !imgErrors[selected.id] ? (
  <Image src={getAutoImage(selected)} alt={selected.title} fill
         className="object-cover" onError={() => handleImgError(selected.id)} />
) : (
  <span className="relative z-10 text-7xl">{selected.imageFallback}</span>
)}
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full
                  ${(typeBadge[selected.type] || typeBadge.other).style}`}>
                  {(typeBadge[selected.type] || typeBadge.other).label}
                </span>
                {selected.tags.map(tag => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-3">{selected.title}</h3>
              <p className="text-sm text-gray-500 dark:text-[#7878A0] leading-relaxed mb-5">
                {selected.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {selected.demoUrl && (
                  <a href={selected.demoUrl} target="_blank" rel="noopener noreferrer"
                     className="btn-primary text-sm">🔗 Preview Live</a>
                )}
                {selected.githubUrl && (
                  <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer"
                     className="btn-outline text-sm">GitHub</a>
                )}
                {selected.pptEmbedUrl && (
                  <button onClick={() => setShowPpt(v => !v)}
                    className="text-sm font-semibold px-4 py-2 rounded-lg border
                               border-amber-300 dark:border-amber-700 text-amber-600
                               dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors">
                    {showPpt ? '🔼 Sembunyikan PPT' : '📑 Lihat PPT Langsung'}
                  </button>
                )}
                {selected.pptDownloadUrl && (
                  <a href={selected.pptDownloadUrl} target="_blank" rel="noopener noreferrer"
                     className="text-sm font-semibold px-4 py-2 rounded-lg border
                                border-gray-200 dark:border-white/[0.07] text-gray-500
                                hover:border-[#0BB8D4] hover:text-[#0BB8D4] transition-colors">
                    ⬇ Download File
                  </a>
                )}
              </div>

              {/* PPT embed iframe */}
              {selected.pptEmbedUrl && showPpt && (
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.07]">
                  <div className="bg-gray-50 dark:bg-[#13131E] px-4 py-2 flex items-center
                                  justify-between border-b border-gray-200 dark:border-white/[0.07]">
                    <span className="text-xs font-semibold text-gray-500">📑 {selected.title}</span>
                    <a href={selected.pptDownloadUrl || selected.pptEmbedUrl}
                       target="_blank" rel="noopener noreferrer"
                       className="text-xs text-[#0BB8D4] font-semibold hover:underline">
                      Buka di tab baru ↗
                    </a>
                  </div>
                  <iframe src={selected.pptEmbedUrl} className="w-full" style={{ height: '420px', border: 'none' }}
                          allow="autoplay" title={selected.title} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
