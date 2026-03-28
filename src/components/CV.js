// src/components/CV.js

import { profileData } from '../lib/data'

export default function CV() {
  return (
    <section id="cv" className="py-24 px-[6%] max-w-[1180px] mx-auto">
      <div className="reveal">
        <span className="sec-tag">Curriculum Vitae</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-1">
          Download <span className="text-[#0BB8D4]">CV</span>
        </h2>
        <div className="sec-line" />
      </div>

      <div className="card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between
                      gap-8 relative overflow-hidden reveal">
        {/* Glow kanan */}
        <div className="absolute right-0 top-0 w-72 h-72 rounded-full pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(11,184,212,0.07), transparent 70%)',
                      transform: 'translate(30%, -30%)' }} />

        {/* Garis kiri aksen */}
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
             style={{ background: 'linear-gradient(180deg, #0BB8D4, #0891B2)' }} />

        <div className="pl-4">
          <h3 className="text-2xl font-bold mb-2">Tertarik untuk berkolaborasi? 🤝</h3>
          <p className="text-sm text-gray-500 dark:text-[#7878A0] leading-relaxed max-w-lg">
            Unduh CV saya untuk mengetahui lebih lanjut tentang pengalaman, pendidikan,
            dan kemampuan saya secara lengkap. Siap untuk berdiskusi tentang peluang kolaborasi!
          </p>
        </div>

        <div className="flex gap-3 flex-shrink-0">
          <a href={profileData.cvUrl} download
             className="btn-primary whitespace-nowrap">
            ⬇ Download CV
          </a>
          <a href={profileData.cvUrl} target="_blank" rel="noopener noreferrer"
             className="btn-outline whitespace-nowrap">
            Lihat Online
          </a>
        </div>
      </div>
    </section>
  )
}
