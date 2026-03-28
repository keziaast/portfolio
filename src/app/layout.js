// src/app/layout.js
// Ini adalah "bungkus" dari seluruh website — navbar dan footer ada di sini

import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { profileData } from '../lib/data'

export const metadata = {
  title: `${profileData.name} | Portfolio Website`,
  description: `Portfolio mahasiswa ${profileData.name}, ${profileData.major} ${profileData.university}`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        {/* Script ini mendeteksi dark/light mode sebelum halaman render
            supaya tidak ada "kedip" saat pertama load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const saved = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />

        {/* Background glow effect */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-glow" />

        {/* Navbar selalu di atas */}
        <Navbar />

        {/* Isi halaman */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Footer selalu di bawah */}
        <Footer />
      </body>
    </html>
  )
}
