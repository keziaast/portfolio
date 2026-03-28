// src/components/Footer.js
// Footer biru/cyan seperti website Muhammad Sufyan

import { profileData, socialLinks } from '../lib/data'

const navLinks = [
  { label: 'Home',      href: '#home'      },
  { label: 'About',     href: '#about'     },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Education', href: '#education' },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Blog',      href: '#blog'      },
  { label: 'CV',        href: '#cv'        },
  { label: 'Contact',   href: '#contact'   },
]

// Ikon SVG per platform untuk footer (white)
const FooterSocialIcon = ({ platform }) => {
  const p = platform.toLowerCase()
  const cls = "w-5 h-5"

  if (p === 'facebook') return (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
  if (p === 'instagram') return (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
  if (p === 'tiktok') return (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.21 8.21 0 0 0 4.81 1.55V6.79a4.85 4.85 0 0 1-1.04-.1z"/>
    </svg>
  )
  if (p === 'github') return (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
  if (p === 'discord') return (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
    </svg>
  )
  if (p === 'linkedin') return (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
  if (p === 'twitter' || p === 'twitter/x' || p === 'x') return (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
  if (p === 'youtube') return (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.5a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  )
  return <span className="text-sm font-bold">{platform.charAt(0)}</span>
}

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0BB8D4] text-white">
      <div className="max-w-[1180px] mx-auto px-[6%] py-14 flex flex-col items-center gap-6">

        {/* Nama */}
        <h3 className="text-2xl font-bold tracking-tight">{profileData.name}</h3>

        {/* Role/tagline */}
        <p className="text-white/80 text-sm font-medium">
          {profileData.major} 🧑‍💻
        </p>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
               className="text-sm text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Social icons — lingkaran putih transparan */}
        <div className="flex gap-3 mt-2">
          {socialLinks.map(social => (
            <a key={social.platform}
               href={social.url}
               target="_blank"
               rel="noopener noreferrer"
               title={social.platform}
               className="w-11 h-11 rounded-full flex items-center justify-center
                          bg-white/20 hover:bg-white/30
                          border border-white/30
                          text-white
                          hover:scale-110
                          transition-all duration-200">
              <FooterSocialIcon platform={social.platform} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/20 mt-2" />

        {/* Copyright */}
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Created by{' '}
          <span className="font-semibold text-white">{profileData.name}</span>.
          All right reserved.
        </p>
      </div>
    </footer>
  )
}
