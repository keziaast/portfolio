'use client'
// src/components/RevealObserver.js
// Komponen ini mengaktifkan animasi reveal saat scroll
// Sudah di-include di layout.js secara otomatis

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}
