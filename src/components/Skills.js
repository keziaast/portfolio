'use client'
// src/components/Skills.js

import { useState } from 'react'
import { skills } from '../lib/data'

const tabs = [
  { key: 'all',      label: 'Semua' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend',  label: 'Backend' },
  { key: 'tools',    label: 'Tools' },
]

const levelStyle = {
  'Advanced':     'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  'Intermediate': 'bg-blue-100  dark:bg-blue-900/30  text-blue-700  dark:text-blue-400',
  'Beginner':     'bg-gray-100  dark:bg-white/10     text-gray-500  dark:text-gray-400',
}

// Icon asli dari devicons CDN — https://devicon.dev untuk cari yang lain
const devicons = {
  'HTML':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'JavaScript':  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Tailwind':    'https://muhammadsufyan.my.id/assets/svg/tailwind.svg',
  'PHP':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'MySQL':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Laravel':     'https://muhammadsufyan.my.id/assets/svg/laravel.svg',
  'Git':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'GitHub':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'Figma':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'VS Code':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'Bootstrap':   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'CodeIgniter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
  'Python':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Node.js':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'TypeScript':  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Flutter':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  'Firebase':    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'Vue.js':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'MongoDB':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'XAMPP':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xampp/xampp-original.svg',
}

// Icon ini berwarna hitam — perlu invert di dark mode
const needsInvert = ['Next.js', 'GitHub']

export default function Skills() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? skills : skills.filter(s => s.category === active)

  return (
    <section id="skills" className="py-24 px-[6%] max-w-[1180px] mx-auto">
      <div className="reveal">
        <span className="sec-tag">Kemampuan</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-1">
          My <span className="text-[#0BB8D4]">Skills</span>
        </h2>
        <div className="sec-line" />
        <p className="text-sm text-gray-500 dark:text-[#7878A0] mb-0 max-w-md">
          Teknologi dan tools yang telah saya pelajari selama kuliah.
        </p>
      </div>

      {/* Tab filter */}
      <div className="flex flex-wrap gap-2 mt-5 mb-6 reveal">
        {tabs.map(tab => (
          <button key={tab.key} onClick={() => setActive(tab.key)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
              ${active === tab.key
                ? 'bg-[#0BB8D4] text-white border-[#0BB8D4]'
                : 'bg-transparent text-gray-500 dark:text-[#7878A0] border-gray-200 dark:border-white/[0.07] hover:border-[#0BB8D4] hover:text-[#0BB8D4]'
              }`}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 reveal">
        {filtered.map(skill => {
          const iconUrl = devicons[skill.name]
          const invert  = needsInvert.includes(skill.name)
          return (
            <div key={skill.name}
              className="card flex flex-col items-center text-center p-4 hover:-translate-y-1 cursor-default">
              <div className="w-10 h-10 mb-2 flex items-center justify-center">
                {iconUrl
                  ? <img src={iconUrl} alt={skill.name} width={40} height={40}
                         className={`w-10 h-10 object-contain ${invert ? 'dark:invert' : ''}`} />
                  : <span className="text-3xl">{skill.icon}</span>
                }
              </div>
              <div className="text-xs font-semibold mb-1.5 leading-tight">{skill.name}</div>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${levelStyle[skill.level]}`}>
                {skill.level}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
