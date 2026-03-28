// src/components/EducationAwards.js
// Menggantikan section Media Sosial — menampilkan pendidikan & penghargaan
// seperti website Muhammad Sufyan

import { educations, awards } from '../lib/data'

export default function EducationAwards() {
  return (
    <section id="education" className="py-24 px-[6%] max-w-[1180px] mx-auto">
      <div className="reveal">
        <span className="sec-tag">Perjalanan</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-1">
          Educations <span className="text-[#0BB8D4]">&</span> Awards
        </h2>
        <div className="sec-line" />
        <p className="text-sm text-gray-500 dark:text-[#7878A0] mb-8">
          Riwayat pendidikan formal dan penghargaan yang telah saya raih.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start reveal">

        {/* Label kiri */}
        <div className="lg:sticky lg:top-24">
          <h3 className="text-2xl font-bold text-[#0BB8D4] leading-tight mb-3">
            Educations 🎓<br/>& Awards 🏆
          </h3>
          <p className="text-sm text-gray-500 dark:text-[#7878A0] leading-relaxed">
            Riwayat pendidikan formal & penghargaan yang telah saya capai.
          </p>
        </div>

        {/* Timeline kanan */}
        <div className="card p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Kolom Pendidikan */}
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                                 bg-[#0BB8D4] text-white text-xs font-bold tracking-wider uppercase">
                  🎓 Educations
                </span>
              </div>

              {/* Timeline items */}
              <div className="relative pl-5">
                {/* Garis vertikal */}
                <div className="absolute left-[7px] top-2 bottom-2 w-[2px]
                                bg-gradient-to-b from-[#0BB8D4] to-[#0BB8D4]/20 rounded-full" />

                <div className="flex flex-col gap-7">
                  {educations.map((edu, i) => (
                    <div key={i} className="relative">
                      {/* Titik bulat */}
                      <div className="absolute -left-5 top-1 w-3.5 h-3.5 rounded-full
                                      bg-[#0BB8D4] border-2 border-white dark:border-[#16161F]
                                      shadow-sm" />
                      <h4 className="font-bold text-sm leading-snug mb-1">{edu.school}</h4>
                      <p className="text-xs text-gray-500 dark:text-[#7878A0] mb-1.5">{edu.major}</p>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-[#5a5a7a]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2">
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

            {/* Kolom Awards */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                                 bg-[#0BB8D4] text-white text-xs font-bold tracking-wider uppercase">
                  🏆 Awards
                </span>
              </div>

              {awards.length > 0 ? (
                <div className="relative pl-5">
                  <div className="absolute left-[7px] top-2 bottom-2 w-[2px]
                                  bg-gradient-to-b from-[#0BB8D4] to-[#0BB8D4]/20 rounded-full" />
                  <div className="flex flex-col gap-7">
                    {awards.map((aw, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-5 top-1 w-3.5 h-3.5 rounded-full
                                        bg-[#0BB8D4] border-2 border-white dark:border-[#16161F]
                                        shadow-sm" />
                        <h4 className="font-bold text-sm leading-snug mb-1">{aw.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-[#7878A0] mb-1.5">{aw.issuer}</p>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-[#5a5a7a]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                               stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                          {aw.period}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-400 dark:text-[#5a5a7a] italic">
                  Belum ada penghargaan yang ditambahkan.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
