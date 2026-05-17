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
  {
    id: "tugas-manajemen-risiko",
    title: "Tugas Manajemen Risiko",
    description: "Tugas individu Technopreneurship membahas pengertian, tahap-tahap, dan cara pengelolaan risiko bagi mahasiswa dan calon technopreneur.",
    tags: ["Technopreneurship", "Manajemen Risiko", "Presentasi"],
    imageUrl: "/images/tugas/risiko-cover.jpg",
    imageFallback: "⚠️",
    type: "artikel",
    tugasSlug: "tugas-manajemen-risiko",
    featured: true,
  }
  
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
    deskripsi: "Tugas kelompok 5 mata kuliah Technopreneurship membahas konsep kewirausahaan berbasis teknologi, pentingnya inovasi, dan bagaimana mahasiswa bisa mulai berpikir dan bergerak seperti seorang technopreneur.",
    thumbnail: "/images/tugas/kelompok-cover.jpg",
    fileLampiran: [
      {
        nama: "Presentasi Kelompok 5.pdf",
        ukuran: "3.1 MB",
        tipe: "pdf",
        url: "/files/tugas/TECHNOPRENEURSHIP_KEL_5.pdf"
      }
    ],
    foto: [
      "/images/tugas/kelompok-poster.png",
      "/images/tugas/kelompok-foto1.jpeg"
    ],
    pptEmbedUrl: "https://drive.google.com/file/d/1UG8Yq8tTBpQ_TSoE7Xl4vEUeRvddpYUf/view?usp=sharing/preview",
    konten: [
      { tipe: "paragraf", isi: "Tugas kelompok ini merupakan presentasi bersama teman-teman kelompok 5 untuk mata kuliah Technopreneurship. Kami membahas konsep kewirausahaan berbasis teknologi dan bagaimana mahasiswa bisa mulai berpikir seperti seorang technopreneur — seseorang yang menggabungkan kemampuan teknologi dengan jiwa wirausaha." },
      { tipe: "heading", isi: "Apa itu Technopreneurship?" },
      { tipe: "paragraf", isi: "Technopreneurship adalah gabungan dari dua kata: technology dan entrepreneurship. Sederhananya, ini adalah kewirausahaan yang berbasis teknologi. Seorang technopreneur tidak hanya punya ide bisnis, tapi juga memanfaatkan teknologi sebagai alat utama untuk menjalankan dan mengembangkan bisnisnya." },
      { tipe: "paragraf", isi: "Contoh nyata technopreneur yang sukses adalah pendiri Gojek, Tokopedia, dan Canva — mereka semua memulai dari masalah sehari-hari yang kemudian diselesaikan dengan solusi berbasis teknologi. Yang menarik, banyak dari mereka yang memulainya dari bangku kuliah, sama seperti kita sekarang." },
      { tipe: "heading", isi: "Kenapa Mahasiswa Perlu Punya Jiwa Technopreneur?" },
      { tipe: "paragraf", isi: "Dunia kerja saat ini sudah berubah sangat cepat. Tidak cukup hanya punya ijazah — mahasiswa juga perlu punya kemampuan untuk menciptakan sesuatu yang bernilai. Dengan jiwa technopreneur, kita tidak hanya menunggu lowongan kerja, tapi bisa menciptakan lapangan kerja sendiri." },
      {
        tipe: "poin",
        judul: "Beberapa alasan pentingnya jiwa technopreneur bagi mahasiswa:",
        items: [
          "Teknologi terus berkembang — mahasiswa IT punya keunggulan karena sudah familiar dengan tools dan pemrograman yang dibutuhkan dunia bisnis.",
          "Modal bisa dimulai dari kecil — banyak startup sukses yang dimulai hanya dengan laptop dan koneksi internet.",
          "Peluang pasar digital masih sangat besar — banyak masalah di sekitar kita yang belum punya solusi teknologi yang baik.",
          "Pengalaman nyata lebih berharga — membuat project atau bisnis kecil saat kuliah memberikan pengalaman yang tidak bisa didapat dari teori saja."
        ]
      },
      { tipe: "heading", isi: "Inovasi sebagai Kunci Utama" },
      { tipe: "paragraf", isi: "Dalam presentasi kelompok kami, salah satu poin yang paling ditekankan adalah pentingnya inovasi. Inovasi bukan berarti harus menciptakan sesuatu yang benar-benar baru dari nol — tapi bisa juga dengan memperbaiki atau meningkatkan sesuatu yang sudah ada menjadi lebih efisien, lebih murah, atau lebih mudah digunakan." },
      { tipe: "paragraf", isi: "Contohnya Gojek — ojek sudah ada sejak lama, tapi dengan inovasi teknologi berupa aplikasi pemesanan online, Gojek berhasil mengubahnya menjadi bisnis yang bernilai miliaran dolar. Inilah yang disebut disruptive innovation — inovasi yang mengubah cara lama menjadi jauh lebih baik." },
      { tipe: "heading", isi: "Kesimpulan" },
      { tipe: "paragraf", isi: "Dari tugas kelompok ini, saya pribadi jadi lebih sadar bahwa peluang untuk menjadi technopreneur itu sangat terbuka lebar, terutama bagi mahasiswa IT. Modal utamanya bukan uang, tapi ide, skill teknologi, dan keberanian untuk mencoba. Mulai dari hal kecil, konsisten belajar, dan jangan takut gagal — karena dari kegagalan itulah kita bisa tumbuh dan berkembang." }
    ]
  },
  {
    slug: "tugas-manajemen-risiko",
    judul: "Tugas Manajemen Risiko dalam Technopreneurship",
    mataKuliah: "Technopreneurship",
    tanggal: "2026",
    tags: ["Technopreneurship", "Manajemen Risiko", "Presentasi"],
    deskripsi: "Tugas individu mata kuliah Technopreneurship membahas pengertian risiko, tahap-tahap manajemen risiko, cara pengelolaan risiko, dan pentingnya mempelajari manajemen risiko bagi mahasiswa dan calon technopreneur.",
    thumbnail: "/images/tugas/risiko-cover.jpg",
    fileLampiran: [
      {
        nama: "Presentasi Manajemen Risiko.pdf",
        ukuran: "1.8 MB",
        tipe: "pdf",
        url: "/files/tugas/Tugas_Teknopreneur_Kezia.pdf"
      }
    ],
    foto: [],
    pptEmbedUrl: "https://drive.google.com/file/d/1MtduwasFwHrBNyFZsUpPBb7sZDkGJ5sK/view?usp=sharing/preview",
    konten: [
      { tipe: "paragraf", isi: "Pada tugas mata kuliah Technopreneurship ini, saya diminta untuk membahas tentang manajemen risiko — mulai dari pengertiannya, tahap-tahapnya, cara pengelolaannya, sampai mengapa hal ini penting untuk dipelajari, terutama bagi mahasiswa Sistem Informasi yang nantinya akan terjun ke dunia teknologi dan bisnis." },
      { tipe: "heading", isi: "1. Apa yang Dimaksud dengan Risiko dan Manajemen Risiko?" },
      { tipe: "paragraf", isi: "Menurut saya, risiko itu adalah kemungkinan terjadinya hal yang tidak diinginkan dan bisa membuat hasil akhirnya tidak sesuai harapan. Contoh nyata yang pernah saya alami adalah saat mengerjakan proyek kuliah, tiba-tiba laptop error atau file hilang begitu saja. Itu adalah bentuk risiko yang nyata dalam kehidupan sehari-hari sebagai mahasiswa." },
      { tipe: "paragraf", isi: "Sedangkan manajemen risiko adalah cara kita mengelola kemungkinan tersebut supaya dampaknya bisa dikurangi. Misalnya dengan backup data secara rutin atau menyiapkan rencana cadangan sebelum masalah benar-benar terjadi. Intinya, kita tidak bisa menghilangkan risiko sepenuhnya, tapi kita bisa mempersiapkan diri menghadapinya." },
      { tipe: "heading", isi: "2. Tahap-Tahap dalam Manajemen Risiko" },
      { tipe: "paragraf", isi: "Manajemen risiko bukan sesuatu yang dilakukan secara asal-asalan. Ada tahapan yang perlu diikuti agar pengelolaan risikonya efektif dan terstruktur." },
      {
        tipe: "poin",
        judul: "Berikut tahap-tahapnya:",
        items: [
          "Identifikasi Risiko — Tahap pertama adalah mencari tahu masalah apa saja yang mungkin terjadi. Contohnya saat membuat aplikasi, risikonya bisa berupa error coding atau server down yang tidak terduga.",
          "Analisis Risiko — Setelah diidentifikasi, kita menilai seberapa besar kemungkinan risiko itu terjadi dan seberapa besar dampaknya. Misalnya error coding memang sering terjadi, tapi masih bisa diperbaiki jika kita tahu caranya.",
          "Pengelolaan Risiko — Tahap menentukan solusi untuk mengurangi risiko tersebut, seperti menyiapkan waktu testing tambahan atau selalu melakukan backup data sebelum mengerjakan sesuatu.",
          "Implementasi — Tahap menjalankan solusi yang sudah direncanakan. Misalnya benar-benar melakukan testing menyeluruh sebelum aplikasi digunakan oleh pengguna nyata.",
          "Monitoring — Tahap terakhir adalah memantau kondisi secara berkala untuk memastikan semuanya tetap aman dan terkendali, bahkan setelah solusi diterapkan."
        ]
      },
      { tipe: "heading", isi: "3. Cara-Cara Pengelolaan Risiko" },
      { tipe: "paragraf", isi: "Selain tahapan, ada juga beberapa cara yang bisa dipakai untuk mengelola risiko tergantung situasinya. Tidak semua risiko harus dihindari — ada yang memang perlu diterima dan dihadapi." },
      {
        tipe: "poin",
        judul: "Lima cara pengelolaan risiko:",
        items: [
          "Risk Avoidance (Menghindari Risiko) — Artinya kita menghindari aktivitas yang terlalu berisiko. Contohnya tidak memakai fitur yang belum kita pahami dalam proyek supaya tidak menimbulkan masalah yang tidak perlu.",
          "Risk Reduction (Mengurangi Risiko) — Mengurangi kemungkinan atau dampak risiko. Misalnya menyimpan file di Google Drive dan flashdisk sekaligus agar data lebih aman dari kemungkinan hilang.",
          "Risk Transfer (Memindahkan Risiko) — Memindahkan sebagian risiko ke pihak lain. Contohnya menggunakan layanan cloud hosting agar keamanan server dibantu oleh penyedia layanan yang lebih berpengalaman.",
          "Risk Deferral (Menunda Risiko) — Berarti menunda hal yang berisiko sampai kondisi lebih aman dan siap. Misalnya menunda fitur tambahan dan fokus ke fitur utama terlebih dahulu agar lebih stabil.",
          "Risk Retention (Menerima Risiko) — Artinya kita menerima risiko yang memang tidak bisa dihindari, tetapi tetap menyiapkan antisipasi agar dampaknya tidak terlalu besar."
        ]
      },
      { tipe: "heading", isi: "4. Mengapa Penting Mempelajari Manajemen Risiko?" },
      { tipe: "paragraf", isi: "Sebagai mahasiswa Sistem Informasi, menurut saya mempelajari manajemen risiko itu sangat penting. Kita sering punya ide yang bagus, tetapi tanpa tahu cara mengelola risikonya, ide tersebut bisa gagal di tengah jalan karena masalah yang sebenarnya bisa diantisipasi sejak awal." },
      { tipe: "paragraf", isi: "Saya sendiri pernah mengalami tugas terganggu karena laptop rusak dan tidak ada cadangan data. Dari situ saya jadi lebih terbiasa melakukan backup file secara rutin dan menyiapkan rencana alternatif sebelum masalah terjadi. Pengalaman kecil seperti itu ternyata mengajarkan banyak hal tentang pentingnya antisipasi." },
      { tipe: "paragraf", isi: "Sebagai pribadi, pemahaman tentang manajemen risiko juga membuat saya lebih berhati-hati dalam kehidupan sehari-hari. Misalnya menyimpan file di lebih dari satu tempat, menggunakan antivirus, dan tidak sembarangan mengklik tautan yang mencurigakan. Dengan memahami manajemen risiko, saya jadi lebih tenang dalam mengambil keputusan karena sudah punya langkah antisipasi." },
      { tipe: "heading", isi: "Kesimpulan" },
      { tipe: "paragraf", isi: "Menurut saya, manajemen risiko itu penting karena membantu kita lebih siap menghadapi masalah dan mengurangi kemungkinan kerugian. Dengan memahami risiko, tahap pengelolaannya, dan cara mengatasinya, kita jadi bisa mengambil keputusan dengan lebih tenang dan terarah." },
      { tipe: "paragraf", isi: "Bagi mahasiswa Sistem Informasi maupun calon technopreneur, kemampuan mengelola risiko sangat dibutuhkan agar proyek atau ide yang dijalankan bisa berjalan lebih aman dan terencana. Seperti kata pepatah — kesuksesan lahir dari keberanian menghadapi risiko." }
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
