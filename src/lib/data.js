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
  { platform: "Kampus USTI", url: "https://usti.ac.id/keziaasithalubis.aff", icon: "kampus"    },
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
    id: "website-profil",
    title: "Website Profil Pribadi",
    description: "Portfolio website sebagai tugas mata kuliah Pemrograman Web semester 6. Dibangun menggunakan Next.js dan Tailwind CSS dengan tampilan modern, responsif, dan mendukung dark mode.",
    tags: ["Next.js", "Tailwind CSS", "React"],

    // Ganti dengan screenshot project kamu — taruh di public/images/proj-portfolio.png
    imageUrl: "",
    imageFallback: "🌐",
    type: "web",
    demoUrl: "https://kezia-asitha.vercel.app",
    githubUrl: "https://github.com/keziaast/portfolio",
    pptEmbedUrl: "",
    pptDownloadUrl: "",
    featured: true,
  },
  {
    id: "sistem-toko-online",
    title: "Sistem Toko Online",
    description: "Aplikasi e-commerce sederhana dengan fitur keranjang belanja, manajemen produk, dan laporan penjualan. Dibuat menggunakan PHP, MySQL, dan Bootstrap.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    imageUrl: "",
    imageFallback: "🛒",
    type: "web",
    demoUrl: "https://cemilanku.wuaze.com/",
    githubUrl: "",
    pptEmbedUrl: "",
    pptDownloadUrl: "",
    featured: true,
  },
  {
    id: "tugas-blog-seo",
    title: "Cara Membuat Blog di Blogspot",
    description: "Presentasi tugas mata kuliah Optimasi Mesin Pencari (SEO) membahas langkah-langkah membuat blog di Blogspot, optimasi konten, pengaturan SEO dasar, dan strategi agar blog mudah ditemukan di Google.",
    tags: ["SEO", "Blogspot", "Presentasi"],
    imageUrl: "",
    imageFallback: "📑",
    type: "ppt",
    demoUrl: "",
    githubUrl: "",
    pptEmbedUrl: "https://drive.google.com/file/d/1XmlI_mewm1v-S6Zy7Ico7vEndUVTTPc9/preview",
    pptDownloadUrl: "https://drive.google.com/uc?export=download&id=1XmlI_mewm1v-S6Zy7Ico7vEndUVTTPc9",
    featured: true,
  },
  {
    id: "sistem-spk-mfep",
    title: "Sistem Informasi SPK Metode MFEP",
    description: "Sistem Pendukung Keputusan (SPK) menggunakan metode Multi Factor Evaluation Process (MFEP) berbasis web. Sistem ini membantu pengambilan keputusan secara objektif berdasarkan bobot dan nilai kriteria.",
    tags: ["PHP", "MySQL", "SPK", "MFEP"],
    imageUrl: "",
    imageFallback: "🧮",
    type: "system",
    demoUrl: "",
    githubUrl: "",
    pptEmbedUrl: "",
    pptDownloadUrl: "",
    featured: true,
  },
  {
    id: "business-review-app",
    title: "Business Review App",
    description: "Aplikasi review bisnis lokal yang memungkinkan pengguna menambahkan bisnis, memberikan rating bintang, dan menulis ulasan. Dibangun dengan Next.js, Supabase, dan Tailwind CSS.",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    imageUrl: "",
    imageFallback: "🏪",
    type: "web",
    demoUrl: "https://business-review-app-one.vercel.app/",
    githubUrl: "https://github.com/keziaast/business-review-app",
    pptEmbedUrl: "",
    pptDownloadUrl: "",
    featured: true,
  },
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
