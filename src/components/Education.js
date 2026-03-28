// src/components/Education.js
// Section Education & Awards menggantikan section Media Sosial terpisah
// (Media Sosial sudah ada di social bar kiri)

import { educations, awards } from '../lib/data'

export default function Education() {
  return (
    <section id="education" className="py-24 px-[6%] max-w-[1180px] mx-auto">
      <div className="reveal">
        <span className="sec-tag">Akademik</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-1">
          Educations 🎓 & <span className="text-[#0BB8D4]">Awards</span> 🏆
        </h2>
        <div className="sec-line" />
        <p className="text-sm text-gray-500 dark:text-[#7878A0] mb-8">
          Riwayat pendidikan formal dan penghargaan yang telah dicapai.
        </p>
      </div>

      <div className="card p-0 overflow-hidden reveal">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* ── EDUCATIONS ── */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/[0.07]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg mb-6
                            bg-[#0BB8D4] text-white text-xs font-bold uppercase tracking-wider">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Educations
            </div>

            <div className="relative">
              {/* Garis vertikal timeline */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[1.5px] bg-gray-200 dark:bg-white/[0.07]" />

              <div className="space-y-6 pl-6">
                {educations.map((edu, i) => (
                  <div key={i} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full border-2 border-[#0BB8D4] bg-white dark:bg-[#16161F]" />
                    <h3 className="font-bold text-sm leading-snug mb-1">{edu.institution}</h3>
                    <p className="text-xs text-gray-500 dark:text-[#7878A0] mb-1.5">{edu.major}</p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-[#5a5a7a]">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── AWARDS ── */}
          <div className="p-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg mb-6
                            bg-[#0BB8D4] text-white text-xs font-bold uppercase tracking-wider">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
              Awards
            </div>

            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-[1.5px] bg-gray-200 dark:bg-white/[0.07]" />

              <div className="space-y-6 pl-6">
                {awards.map((award, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full border-2 border-[#0BB8D4] bg-white dark:bg-[#16161F]" />
                    <h3 className="font-bold text-sm leading-snug mb-1">{award.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-[#7878A0] mb-1.5">{award.organization}</p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-[#5a5a7a]">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {award.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
