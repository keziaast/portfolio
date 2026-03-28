'use client'
// src/components/About.js

import { useState } from 'react'
import Image from 'next/image'
import { profileData, courses } from '../lib/data'

export default function About() {
  const [dosenErr,   setDosenErr]   = useState(false)
  const [profileErr, setProfileErr] = useState(false)

  // Info cards — grid 2 kolom, setiap value dijamin tidak wrap aneh
  const infoCards = [
    { k: 'Nama Lengkap', v: profileData.name },
    { k: 'NIM',          v: profileData.nim  },
    { k: 'Semester',     v: `${profileData.semester} (Genap 2025)` },
    { k: 'Jurusan / Prodi', v: profileData.major },
  ]

  return (
    <section id="about" className="py-24 px-[6%] max-w-[1180px] mx-auto">
      <div className="reveal mb-1">
        <span className="sec-tag">Tentang Saya</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-1">
          About <span className="text-[#0BB8D4]">Me</span>
        </h2>
        <div className="sec-line" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-start">

        {/* Foto profil */}
        <div className="reveal-left">
          <div className="relative bg-gray-100 dark:bg-[#13131E] border border-gray-200
                          dark:border-white/[0.07] rounded-2xl aspect-[3/4] flex items-center
                          justify-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                 style={{ background: 'linear-gradient(90deg,#0BB8D4,#0891B2)' }} />
            {!profileErr ? (
              <Image src={profileData.photo} alt={profileData.name} fill
                     className="object-cover" onError={() => setProfileErr(true)} />
            ) : (
              <span className="text-8xl">📸</span>
            )}
          </div>
        </div>

        {/* Info kanan */}
        <div className="reveal-right space-y-5">
          <p className="text-sm text-gray-500 dark:text-[#7878A0] leading-loose">
            {profileData.bio}
          </p>

          {/* ✅ FIX: Grid info 2 kolom — nilai tidak terpotong */}
          <div className="grid grid-cols-2 gap-3">
            {infoCards.map(item => (
              <div key={item.k}
                   className="bg-gray-50 dark:bg-[#13131E] border border-gray-200
                              dark:border-white/[0.07] rounded-xl p-3
                              hover:border-[#0BB8D4] transition-colors min-w-0">
                <div className="text-[10px] font-semibold text-[#0BB8D4] uppercase tracking-wider mb-1">
                  {item.k}
                </div>
                {/* ✅ truncate diganti text wrap normal supaya terbaca semua */}
                <div className="text-sm font-medium break-words leading-snug">{item.v}</div>
              </div>
            ))}

            {/* Universitas — full width supaya nama panjang tidak terpotong */}
            <div className="col-span-2 bg-gray-50 dark:bg-[#13131E] border border-gray-200
                            dark:border-white/[0.07] rounded-xl p-3
                            hover:border-[#0BB8D4] transition-colors">
              <div className="text-[10px] font-semibold text-[#0BB8D4] uppercase tracking-wider mb-1">
                Universitas
              </div>
              <div className="text-sm font-medium">{profileData.university}</div>
            </div>

            {/* Dosen Card — full width */}
            <div className="col-span-2 bg-gray-50 dark:bg-[#13131E] border border-gray-200
                            dark:border-white/[0.07] rounded-xl p-4 flex items-center gap-4
                            hover:border-[#0BB8D4] transition-all duration-200 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl"
                   style={{ background: 'linear-gradient(180deg,#0BB8D4,#0891B2)' }} />

              {/* Avatar dosen */}
              <div className="ml-1 flex-shrink-0">
                <div className="w-[68px] h-[68px] rounded-full border-[2.5px] border-[#0BB8D4]
                                bg-gray-200 dark:bg-[#1E1E2E] flex items-center justify-center
                                overflow-hidden text-4xl">
                  {!dosenErr ? (
                    <Image src={profileData.dosen.photo} alt={profileData.dosen.name}
                           width={68} height={68}
                           className="object-cover w-full h-full rounded-full"
                           onError={() => setDosenErr(true)} />
                  ) : (
                    <span>👨‍🏫</span>
                  )}
                </div>
              </div>

              {/* Info dosen */}
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold text-[#0BB8D4] uppercase tracking-wider mb-1">
                  Dosen Pengampu
                </div>
                <div className="text-sm font-bold leading-snug">{profileData.dosen.name}</div>
                <div className="text-xs text-gray-500 dark:text-[#7878A0] mt-0.5">
                  {profileData.dosen.mataKuliah}
                </div>
                <span className="inline-flex items-center gap-1.5 mt-2 text-[10px] font-semibold
                                 bg-[rgba(11,184,212,.10)] text-[#0891B2] dark:text-[#67E8F9]
                                 px-2.5 py-0.5 rounded-full border border-[rgba(11,184,212,.2)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0BB8D4]" />
                  Dosen Aktif · 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
