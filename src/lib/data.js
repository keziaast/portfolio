// ============================================================
// 📝 FILE INI ADALAH PUSAT DATA PORTOFOLIOMU
// Edit bagian ini sesuai data dirimu!
// ============================================================

export const profileData = {
  name: "Kezia Asitha",           // ← Ganti nama kamu di sini
  nim: "2310031806040",
  university: "Universitas Sains dan Teknologi Indonesia",
  major: "Sistem Informasi",
  semester: "6",
  bio: "Halo! Saya mahasiswa semester 6 yang passionate di bidang pengembangan web dan teknologi digital. Saya senang belajar hal baru dan mengerjakan proyek yang memberikan dampak nyata bagi banyak orang.",

  dosen: {
    name: "H. Dwi Haryono, S.Kom, M.Kom.",
    mataKuliah: "Teknopreneurship",
    photo: "/images/foto-dosen.jpeg",
  },

  photo: "/images/gambar1.jpeg",
  cvUrl: "/files/cv-kezia.pdf",
}

// ── MEDIA SOSIAL ─────────────────────────────────────────────
export const socialLinks = [
  { platform: "Instagram", url: "https://instagram.com/kezia.ast",   icon: "instagram" },
  { platform: "TikTok",  url: "https://tiktok.com/keytastic.dev",     icon: "tiktok"    },
  { platform: "Twitter",  url: "https://twitter.com/kezaassss",     icon: "twitter"   },
  { platform: "LinkedIn",  url: "https://linkedin.com/in/kezia-asitha", icon: "linkedin"  },
  { platform: "GitHub",  url: "https://github.com/keziaast",      icon: "github"    },
]

// ── SKILL ─────────────────────────────────────────────────────
export const skills = [
  { name: "HTML",       icon: "🌐", category: "frontend", level: "Advanced"     },
  { name: "CSS",        icon: "🎨", category: "frontend", level: "Advanced"     },
  { name: "JavaScript", icon: "⚡", category: "frontend", level: "Intermediate" },
  { name: "React",      icon: "⚛️", category: "frontend", level: "Intermediate" },
  { name: "Next.js",    icon: "▲",  category: "frontend", level: "Beginner"     },
  { name: "Tailwind",   icon: "💨", category: "frontend", level: "Beginner" },
  { name: "PHP",        icon: "🐘", category: "backend",  level: "Intermediate" },
  { name: "MySQL",      icon: "🗄️", category: "backend",  level: "Intermediate" },
  { name: "Laravel",    icon: "🔥", category: "backend",  level: "Beginner"     },
  { name: "Git",        icon: "🐙", category: "tools",    level: "Intermediate" },
  { name: "Figma",      icon: "🎨", category: "tools",    level: "Beginner"     },
  { name: "VS Code",    icon: "💻", category: "tools",    level: "Advanced"     },
]

// ── EDUCATION & AWARDS ────────────────────────────────────────
// Ganti dengan data pendidikan dan penghargaan kamu
export const educations = [
  {
    school: "Universitas Sains dan Teknologi Indonesia",        // ← Ganti nama kampus
    major: "Sistem Informasi",         // ← Ganti jurusan
    period: "20223 - Sekarang",
  },
  {
    school: "SMAN 06 Pekanbaru",          // ← Ganti nama sekolah
    major: "MIPA",          // ← Ganti jurusan
    period: "2020 - 2023",
  },
]

export const awards = [
  {
    title: "Certificate of Appreciation Python",   // ← Ganti
    issuer: "Bisa.AI Academy",       // ← Ganti
    period: "Mei - 2024",                  // ← Ganti
  },
  // Tambah award? Salin blok di atas
  // Kalau tidak ada award, kosongkan array ini: awards = []
]

// ── PROJECT & TUGAS ───────────────────────────────────────────
// imageUrl: gunakan URL gambar bebas royalti atau taruh di public/images/
// Rekomendasi gambar gratis: https://undraw.co (SVG ilustrasi)
export const projects = [
  {
    id: "tugas-startup",
    title: "Tugas Start Up: Knowledge, Skill & Attitude",
    description: "Tugas individu mata kuliah Technopreneurship membahas pentingnya knowledge, skill, dan attitude bagi entrepreneur, serta contoh bisnis start up Canva.",
    tags: ["Technopreneurship", "Start Up", "Entrepreneurship"],
    imageUrl: "/images/tugas/startup-cover.jpg",
    imageFallback: "🚀",
    type: "artikel",
    tugasSlug: "tugas-startup",
    featured: true,
  },
  {
    id: "tugas-kelompok-teknopreneur",
    title: "Tugas Kelompok: Presentasi Technopreneurship",
    description: "Presentasi kelompok 5 mata kuliah Technopreneurship membahas konsep kewirausahaan berbasis teknologi dan mindset seorang technopreneur.",
    tags: ["Technopreneurship", "Kelompok", "Presentasi"],
    imageUrl: "/images/tugas/kelompok-cover.jpg",
    imageFallback: "👥",
    type: "artikel",
    tugasSlug: "tugas-kelompok-teknopreneur",
    featured: true,
  },
]

// ── TUGAS ──────────────────────────────────────────
export const tugasList = [
  {
    slug: "tugas-startup",
    judul: "Tugas Start Up: Knowledge, Skill, Attitude & Contoh Bisnis",
    mataKuliah: "Technopreneurship",
    tanggal: "2026",
    tags: ["Technopreneurship", "Start Up", "Entrepreneurship"],
    deskripsi: "Tugas individu membahas pentingnya knowledge, skill, dan attitude bagi seorang entrepreneur, serta contoh bisnis start up Canva dan cara kerjanya.",
    thumbnail: "/images/tugas/startup-cover.jpg",
    fileLampiran: [
      {
        nama: "Start Up Kezia.pdf",
        ukuran: "2.4 MB",
        tipe: "pdf",
        url: "/files/tugas/TUGAS_START_UP_Kezia_.pdf"
      }
    ],
    konten: [
      {
        tipe: "paragraf",
        isi: "Pada tugas mata kuliah Technopreneurship ini, saya diminta untuk menjawab dua pertanyaan utama: pertama, mengapa seorang entrepreneur harus memiliki jiwa knowledge, skill, dan attitude. Kedua, memberikan contoh bisnis start up beserta cara kerjanya."
      },
      {
        tipe: "heading",
        isi: "1. Mengapa Entrepreneur Harus Punya Knowledge, Skill, dan Attitude?"
      },
      {
        tipe: "subheading",
        isi: "A. Knowledge (Pengetahuan)"
      },
      {
        tipe: "paragraf",
        isi: "Menurut saya, knowledge itu penting banget karena tanpa pengetahuan yang cukup kita bisa salah langkah. Saya pernah mengalaminya sendiri saat mengerjakan proyek kuliah — karena kurang paham konsep dasarnya, hasilnya tidak maksimal dan harus mengulang dari awal. Dari pengalaman itu saya sadar, seorang entrepreneur harus punya knowledge yang cukup supaya setiap keputusan yang diambil tidak asal-asalan dan punya dasar yang kuat."
      },
      {
        tipe: "subheading",
        isi: "B. Skill (Kemampuan)"
      },
      {
        tipe: "paragraf",
        isi: "Pengetahuan saja ternyata tidak cukup kalau tidak bisa dipraktikkan. Sebagai mahasiswa IT, skill seperti coding itu sangat penting karena ide sebagus apapun tidak akan berarti kalau tidak bisa dieksekusi. Skill itulah yang menjadi jembatan antara pengetahuan dan hasil nyata yang bisa dilihat dan dirasakan orang lain."
      },
      {
        tipe: "subheading",
        isi: "C. Attitude (Sikap)"
      },
      {
        tipe: "paragraf",
        isi: "Dari ketiga hal ini, attitude menurut saya yang paling susah dibentuk tapi justru paling menentukan. Sikap pantang menyerah itu sangat penting karena kegagalan memang bagian dari proses. Banyak orang yang sebenarnya sudah punya pengetahuan dan kemampuan yang bagus, tetapi berhenti di tengah jalan karena tidak kuat menghadapi tekanan. Karena itu, attitude menjadi fondasi utama agar knowledge dan skill bisa benar-benar bermanfaat."
      },
      {
        tipe: "heading",
        isi: "2. Contoh Bisnis Start Up: Canva"
      },
      {
        tipe: "paragraf",
        isi: "Salah satu contoh start up yang paling sering saya gunakan sebagai mahasiswa adalah Canva. Canva adalah platform desain online yang memudahkan siapa saja untuk membuat berbagai jenis desain — mulai dari poster, presentasi, CV, sampai konten media sosial — tanpa harus punya kemampuan desain yang tinggi."
      },
      {
        tipe: "poin",
        judul: "Cara kerja Canva:",
        items: [
          "Pengguna membuka aplikasi atau website Canva, lalu login atau daftar akun.",
          "Pilih jenis desain yang ingin dibuat, misalnya poster, presentasi, atau CV.",
          "Pilih template yang sudah tersedia agar lebih mudah dan cepat.",
          "Edit desain sesuai kebutuhan — ganti teks, warna, gambar, atau tambahkan elemen.",
          "Setelah selesai, desain bisa langsung diunduh atau dibagikan ke orang lain."
        ]
      },
      {
        tipe: "paragraf",
        isi: "Dalam konteks bisnis, mahasiswa bisa memanfaatkan Canva untuk membuka jasa desain sederhana, misalnya membuat poster, feed Instagram, atau CV. Jadi Canva tidak hanya berguna untuk keperluan pribadi, tapi juga bisa jadi peluang usaha dengan modal yang relatif kecil."
      },
      {
        tipe: "heading",
        isi: "Kesimpulan"
      },
      {
        tipe: "paragraf",
        isi: "Menurut saya, start up itu bukan cuma soal punya ide bisnis yang keren, tapi lebih ke kesiapan orang yang menjalankannya. Seorang technopreneur harus punya knowledge, skill, dan attitude yang saling melengkapi. Karena tanpa ketiga hal itu, ide sebagus apapun akan sulit diwujudkan jadi bisnis yang nyata dan bisa bertahan lama."
      }
    ]
  },
  {
    slug: "tugas-kelompok-teknopreneur",
    judul: "Tugas Kelompok: Presentasi Technopreneurship",
    mataKuliah: "Technopreneurship",
    tanggal: "2026",
    tags: ["Technopreneurship", "Kelompok", "Presentasi"],
    deskripsi: "Tugas kelompok mata kuliah Technopreneurship membahas konsep kewirausahaan berbasis teknologi.",
    thumbnail: "/images/tugas/kelompok-cover.jpg",
    fileLampiran: [
      {
        nama: "Presentasi Kelompok 5.pdf",
        ukuran: "3.1 MB",
        tipe: "pdf",
        url: "/files/tugas/TECHNOPRENEURSHIP_KEL_5.pdf"
      }
    ],
    foto: [],
    konten: [
      {
        tipe: "paragraf",
        isi: "Tugas kelompok ini merupakan presentasi bersama teman-teman kelompok 5 untuk mata kuliah Technopreneurship. Kami membahas konsep kewirausahaan berbasis teknologi dan bagaimana mahasiswa bisa mulai berpikir seperti seorang technopreneur."
      }
    ]
  }
]

// ── BLOG ─────────────────────────────────────────────────────
export const blogConfig = {
  rssUrl: "https://keziaasitha.blogspot.com/feeds/posts/default?alt=rss",
  blogUrl: "https://keziaasitha.blogspot.com",
}

// ── KONTAK ───────────────────────────────────────────────────
export const contactInfo = [
  { label: "Telegram", url: "https://t.me/n0tkeyyyy",    icon: "telegram" },
  { label: "Email",  url: "mailto:keziaasitha06@gmail.com",        icon: "email"    },
  { label: "Spotify",  url: "https://open.spotify.com/user/31ivjirjf4e6epkvv2fqn4juz4qm",         icon: "spotify"  },
  { label: "LinkedIn", url: "https://linkedin.com/in/kezia-asitha", icon: "linkedin" },
]

// ── TYPING ANIMATION ─────────────────────────────────────────
export const typingRoles = [
  "Mahasiswa Informatika",
  "Web Developer Pemula",
  "Membangun Project Secara Bertahap",
  "Problem Solver",
  "Terus Belajar dan Berkembang",
  "Menuju Developer Profesional",
]
