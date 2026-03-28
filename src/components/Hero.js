'use client'
// src/components/Hero.js

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { profileData, typingRoles } from '../lib/data'

export default function Hero() {
  const [typed, setTyped]       = useState('')
  const [roleIdx, setRoleIdx]   = useState(0)
  const [charIdx, setCharIdx]   = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [imgError, setImgError] = useState(false)

  // Typing animation
  useEffect(() => {
    const current = typingRoles[roleIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setTyped(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setTyped(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setRoleIdx(i => (i + 1) % typingRoles.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? 55 : 90)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, roleIdx])

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 items-center
                 pt-[88px] pb-16 px-[6%] max-w-[1180px] mx-auto"
    >
      {/* Teks kiri */}
      <div className="reveal-left">
        <p className="text-sm text-gray-500 dark:text-[#7878A0] mb-1 flex items-center gap-1.5">
          Hi There 👋
        </p>

        {/* ✅ FIX: nama tampil satu baris, tidak dipecah */}
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-[#0BB8D4]
                       leading-tight mb-2 whitespace-nowrap">
          {profileData.name}
        </h1>

        {/* Typing text */}
        <div className="text-lg font-semibold text-[#1A1A2E] dark:text-[#E8E8F5]
                        mb-5 h-7 flex items-center gap-0.5">
          <span>{typed}</span>
          <span className="inline-block w-[2px] h-[1em] bg-[#0BB8D4] animate-blink align-middle" />
        </div>

        <p className="text-sm text-gray-500 dark:text-[#7878A0] leading-relaxed max-w-md mb-8">
          {profileData.bio}
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#cv" className="btn-primary">
            Download CV
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
          <a href="#projects" className="btn-outline">
            Lihat Projects
          </a>
        </div>
      </div>

      {/* Foto kanan */}
      <div className="hidden lg:flex justify-center items-center reveal-right">
        <div className="relative w-[320px] aspect-square">
          <div className="w-full h-full rounded-full bg-[#0BB8D4] flex items-end justify-center overflow-hidden">
            {!imgError ? (
              <Image
                src={profileData.photo}
                alt={profileData.name}
                width={320} height={320}
                className="w-full h-full object-cover rounded-full"
                onError={() => setImgError(true)}
                priority
              />
            ) : (
              <span className="text-[7rem] pb-4 leading-none text-white/90">🧑‍💻</span>
            )}
          </div>

          {/* Badge */}
          <div className="absolute bottom-[10%] left-[-8%] bg-white dark:bg-[#16161F]
                          border border-gray-200 dark:border-white/[0.07]
                          rounded-xl px-3 py-2 flex items-center gap-2
                          shadow-lg whitespace-nowrap">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-dot" />
            <div>
              <div className="text-xs font-semibold">Mahasiswa Aktif</div>
              <div className="text-[10px] text-gray-500 dark:text-[#7878A0]">Semester {profileData.semester}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
