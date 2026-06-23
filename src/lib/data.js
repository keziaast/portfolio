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
  { platform: "Instagram", url: "https://instagram.com/keziaaaaa.st",   icon: "instagram" },
  { platform: "TikTok",  url: "https://tiktok.com/@keytastic.dev",     icon: "tiktok"    },
  { platform: "Facebook",  url: "https://www.facebook.com/keziaaaaa.st",   icon: "facebook"  },
  { platform: "YouTube",   url: "https://www.youtube.com/@keziaast",   icon: "youtube"   },
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
  {
    title: "Academic Achievement Nominee",   // ← Ganti
    issuer: "USTI Excellent Award",       // ← Ganti
    period: "Mei - 2026",                  // ← Ganti
  },
  // Tambah award? Salin blok di atas
  // Kalau tidak ada award, kosongkan array ini: awards = []
]

// ── PROJECT & TUGAS ───────────────────────────────────────────
// imageUrl: gunakan URL gambar bebas royalti atau taruh di public/images/
// Rekomendasi gambar gratis: https://undraw.co (SVG ilustrasi)
export const projects = [
  {
    id: "tugas-poster-spanduk",
    title: "Kumpulan Poster dan Spanduk",
    description: "Kumpulan hasil desain poster dan spanduk sebagai tugas mata kuliah, dibuat menggunakan Canva dengan tema yang beragam.",
    tags: ["Desain", "Poster", "Spanduk", "Canva"],
    imageUrl: "/images/tugas/poster-cover.jpg",
    imageFallback: "🎨",
    type: "artikel",
    tugasSlug: "tugas-poster-spanduk",
    featured: true,
  },
  {
    id: "tugas-observasi-usaha",
    title: "Observasi Tempat Usaha (Bengkel Pramudinata)",
    description: "Tugas individu melakukan observasi dan wawancara ke Bengkel Pramudinata Family untuk memahami transformasi usaha konvensional menuju usaha berbasis teknologi.",
    tags: ["Teknopreneur", "Observasi", "Wawancara"],
    imageUrl: "/images/tugas/observasi-cover.jpeg",
    imageFallback: "🛠️",
    type: "artikel",
    tugasSlug: "tugas-observasi-usaha",
    featured: true,
  },
  {
    id: "tugas-kelompok-teknopreneur",
    title: "Studi Kasus Teknopreneur: Bengkel Pramudinata Family",
    description: "Presentasi kelompok 5 mata kuliah Teknopreneur membahas konsep kewirausahaan berbasis teknologi dan mindset seorang technopreneur.",
    tags: ["Teknopreneur", "Kelompok", "Presentasi"],
    imageUrl: "/images/tugas/kelompok-cover.jpg",
    imageFallback: "👥",
    type: "artikel",
    tugasSlug: "tugas-kelompok-teknopreneur",
    featured: true,
  },
  {
    id: "tugas-kelompok-3p2p",
    title: "Teknopreneur Analisis 3P+2P Bengkel Pramudinata",
    description: "Tugas kelompok mata kuliah Teknopreneur menganalisis usaha Bengkel Pramudinata Family menggunakan framework 3P+2P sebagai pendekatan pemasaran berbasis teknologi.",
    tags: ["Teknopreneur", "Kelompok", "Analisis Usaha"],
    imageUrl: "/images/tugas/kelompok-3p2p-cover.jpg",
    imageFallback: "🔧",
    type: "artikel",
    tugasSlug: "tugas-kelompok-3p2p",
    featured: true,
  },
  {
    id: "tugas-startup",
    title: "Latihan Start Up: Knowledge, Skill dan Attitude",
    description: "Tugas individu Teknopreneur membahas pentingnya knowledge, skill, dan attitude bagi entrepreneur, serta contoh bisnis start up Canva.",
    tags: ["Teknopreneur", "Start Up", "Entrepreneurship"],
    imageUrl: "/images/tugas/startup-cover.jpg",
    imageFallback: "🚀",
    type: "artikel",
    tugasSlug: "tugas-startup",
    featured: true,
  },
  {
    id: "tugas-manajemen-risiko",
    title: "Latihan Manajemen Risiko",
    description: "Tugas individu Teknopreneur membahas pengertian, tahap-tahap, dan cara pengelolaan risiko bagi mahasiswa dan calon technopreneur.",
    tags: ["Teknopreneur", "Manajemen Risiko", "Presentasi"],
    imageUrl: "/images/tugas/risiko-cover.jpg",
    imageFallback: "⚠️",
    type: "artikel",
    tugasSlug: "tugas-manajemen-risiko",
    featured: true,
  },
  
]

// ── TUGAS ──────────────────────────────────────────
export const tugasList = [
  {
    slug: "tugas-poster-spanduk",
    judul: "Kumpulan Poster dan Spanduk",
    mataKuliah: "Teknopreneur",
    tanggal: "2026",
    tags: ["Desain", "Poster", "Spanduk", "Canva"],
    deskripsi: "Kumpulan hasil desain poster dan spanduk sebagai tugas mata kuliah Teknopreneur, dibuat menggunakan Canva.",
    thumbnail: "/images/tugas/poster-cover.jpg",
    fileLampiran: [],
    foto: [
      "/images/tugas/poster-bengkel1.png",
      "/images/tugas/poster-bengkel2.png",
      "/images/tugas/poster-bengkel3.png",
      "/images/tugas/spanduk-bengkel.jpeg",
    ],
    pptEmbedUrl: "",
    konten: [
      { tipe: "paragraf", isi: "Selain tugas berupa presentasi dan analisis usaha, saya juga mendapatkan tugas untuk membuat desain poster dan spanduk sebagai bagian dari mata kuliah Teknopreneur. Tugas ini melatih kemampuan visual communication yang merupakan salah satu skill penting bagi seorang technopreneur dalam memasarkan produk atau jasanya." },
      { tipe: "heading", isi: "Tools yang Digunakan" },
      { tipe: "paragraf", isi: "Semua desain dibuat menggunakan Canva, platform desain online yang sudah saya bahas juga di tugas Start Up sebelumnya. Canva sangat membantu karena menyediakan banyak template siap pakai yang bisa disesuaikan dengan kebutuhan, sehingga proses desain menjadi lebih cepat dan hasilnya tetap terlihat profesional." },
      { tipe: "heading", isi: "Hasil Desain" },
      { tipe: "paragraf", isi: "Kumpulan hasil desain poster dan spanduk dapat dilihat pada galeri dokumentasi di bawah." }
    ]
  },

  {
    slug: "tugas-observasi-usaha",
    judul: "Observasi Tempat Usaha (Bengkel Pramudinata Family)",
    mataKuliah: "Teknopreneur",
    tanggal: "2026",
    tags: ["Teknopreneur", "Observasi", "Wawancara"],
    deskripsi: "Tugas observasi dan wawancara di Bengkel Pramudinata Family untuk mempelajari bagaimana usaha konvensional mulai memanfaatkan teknologi dalam menjalankan bisnisnya.",
    thumbnail: "/images/tugas/observasi-cover.jpeg",
    fileLampiran: [],
    foto: [
      "/images/tugas/observasi-bengkel1.jpeg",
      "/images/tugas/observasi-bengkel2.jpeg",
      "/images/tugas/dokumentasi-kelompok.jpeg",
    ],
    pptEmbedUrl: "",
    konten: [
      { tipe: "paragraf", isi: "Pada mata kuliah Teknopreneur, kelompok kami melakukan observasi dan wawancara langsung di Bengkel Pramudinata Family yang berlokasi di Jl. Cemara, Purwodadi Ujung. Kegiatan ini bertujuan untuk memahami bagaimana sebuah usaha bengkel berkembang serta mulai memanfaatkan teknologi dalam mendukung operasional dan pelayanannya."},
      { tipe: "heading", isi: "Profil Usaha" },
      {
        tipe: "poin",
        judul: "Informasi singkat mengenai Bengkel Pramudinata Family:",
        items: [
          "Jenis usaha: Bengkel servis motor",
          "Jam operasional: Setiap hari, pukul 08.00–22.00",
          "Layanan utama: Servis, ganti oli, tune up",
          "Pemilik: Bapak Eka (Keluarga Pramudinatha)"
        ]
      },
      { tipe: "heading", isi: "Latar Belakang Observasi" },
      { tipe: "paragraf", isi: "Bengkel Pramudinata Family dipilih sebagai objek observasi karena merupakan usaha yang awalnya dijalankan secara konvensional, namun telah mulai mengadopsi teknologi seperti media sosial untuk promosi dan QRIS sebagai metode pembayaran. Dari kegiatan ini, kami ingin mengetahui bagaimana teknologi dapat membantu perkembangan usaha skala kecil secara bertahap."},      
      { tipe: "heading", isi: "Tahapan Kegiatan Sebelum Kunjungan" },
      {
        tipe: "poin",
        judul: "Beberapa persiapan yang dilakukan sebelum kunjungan:",
        items: [
          "Menentukan objek observasi bersama anggota kelompok",
          "Survei awal lokasi untuk memahami kondisi fisik bengkel",
          "Menyusun pertanyaan wawancara mencakup aspek internalization, paradigm alteration, spirit initiation, dan competition",
          "Pembagian tugas antar anggota kelompok saat wawancara",
          "Konfirmasi jadwal kunjungan dengan pemilik bengkel"
        ]
      },
      { tipe: "heading", isi: "Hasil Wawancara: Internalization" },
      { tipe: "paragraf", isi: "Pemilik membuka usaha karena ingin memiliki usaha sendiri. Kemampuan mekaniknya dipelajari secara otodidak dan dari pengalaman kerja. Bengkel dibuka setiap hari dari pagi sampai malam, yang menunjukkan konsistensi dan komitmen pemilik dalam menjalankan usahanya." },
      { tipe: "heading", isi: "Hasil Wawancara: Paradigm Alteration" },
      {
        tipe: "poin",
        judul: "Perubahan yang sudah dilakukan pemilik usaha:",
        items: [
          "Menggunakan media sosial untuk promosi",
          "Menggunakan WhatsApp untuk komunikasi dengan pelanggan",
          "Menerima pembayaran digital seperti QRIS"
        ]
      },
      { tipe: "paragraf", isi: "Meskipun masih menggunakan sistem yang sederhana, penggunaan media sosial dan pembayaran digital merupakan langkah awal dalam proses transformasi menuju usaha yang lebih modern." },
      { tipe: "heading", isi: "Hasil Wawancara: Spirit Initiation" },
      {
        tipe: "poin",
        judul: "Faktor yang mendorong semangat pemilik usaha:",
        items: [
          "Keinginan memiliki penghasilan sendiri",
          "Dukungan dari keluarga",
          "Melihat peluang kebutuhan servis motor di lingkungan sekitar",
          "Semangat terjaga karena kepuasan pelanggan"
        ]
      },
      { tipe: "heading", isi: "Hasil Wawancara: Competition" },
      {
        tipe: "poin",
        judul: "Strategi menghadapi persaingan usaha:",
        items: [
          "Memberikan pelayanan yang ramah",
          "Menjaga kualitas servis",
          "Jam operasional yang lebih panjang",
          "Menggunakan media sosial untuk promosi"
        ]
      },
      { tipe: "heading", isi: "Kesimpulan" },
      {
        tipe: "poin",
        judul: "Indikator usaha yang cukup berkembang:",
        items: [
          "Aktif di 3 platform media sosial: WhatsApp, Instagram, dan TikTok",
          "Menerima 3 metode pembayaran termasuk QRIS",
          "Pemilik terbuka terhadap pengembangan sistem digital selama mudah digunakan"
        ]
      },
      { tipe: "paragraf", isi: "Dari hasil wawancara dan observasi, Bengkel Pramudinata Family tergolong usaha yang cukup maju, terlihat dari motor yang selalu antri untuk ditangani dan pemilik yang terbuka terhadap perkembangan teknologi." }
    ]
  },

{
  slug: "tugas-kelompok-teknopreneur",
  judul: "Studi Kasus Teknopreneur: Bengkel Pramudinata Family",
  mataKuliah: "Teknopreneur",
  tanggal: "2026",
  tags: ["Teknopreneur", "Kelompok", "Presentasi"],
  deskripsi: "Presentasi kelompok mengenai konsep teknopreneur serta penerapannya melalui studi kasus Bengkel Pramudinata Family.",
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
  pptEmbedUrl: "/files/tugas/TECHNOPRENEURSHIP_KEL_5.pdf",
  konten: [
    {
      tipe: "paragraf",
      isi: "Tugas ini merupakan presentasi kelompok pada mata kuliah Teknopreneur yang membahas konsep kewirausahaan berbasis teknologi. Melalui kegiatan ini, kami mempelajari bagaimana teknologi dapat dimanfaatkan untuk menciptakan peluang usaha, meningkatkan nilai bisnis, serta memberikan solusi terhadap berbagai permasalahan di masyarakat."
    },

    {
      tipe: "heading",
      isi: "Tentang Teknopreneur"
    },

    {
      tipe: "paragraf",
      isi: "Teknopreneur merupakan perpaduan antara teknologi dan kewirausahaan. Seorang teknopreneur tidak hanya memiliki ide bisnis, tetapi juga mampu memanfaatkan teknologi sebagai sarana untuk mengembangkan produk, layanan, maupun proses bisnis agar lebih efektif dan inovatif."
    },

    {
      tipe: "paragraf",
      isi: "Dalam presentasi ini, kami juga membahas beberapa contoh perusahaan berbasis teknologi yang berhasil berkembang melalui inovasi dan pemanfaatan teknologi digital. Contoh-contoh tersebut menunjukkan bahwa ide sederhana dapat berkembang menjadi bisnis yang besar apabila mampu menjawab kebutuhan masyarakat."
    },

    {
      tipe: "heading",
      isi: "Mengapa Teknopreneur Penting bagi Mahasiswa?"
    },

    {
      tipe: "paragraf",
      isi: "Sebagai mahasiswa di bidang teknologi, memahami konsep teknopreneur menjadi bekal yang penting. Selain mempersiapkan diri untuk dunia kerja, kemampuan ini juga membuka peluang untuk membangun usaha sendiri dengan memanfaatkan pengetahuan dan keterampilan yang dimiliki."
    },

    {
      tipe: "poin",
      judul: "Beberapa manfaat yang kami pelajari melalui materi ini:",
      items: [
        "Memahami peran teknologi dalam mengembangkan sebuah usaha.",
        "Melatih kemampuan melihat peluang bisnis dari permasalahan di sekitar.",
        "Mendorong kreativitas dan inovasi dalam menciptakan solusi yang bermanfaat.",
        "Membangun pola pikir untuk terus belajar, beradaptasi, dan berani mencoba hal baru."
      ]
    },

    {
      tipe: "heading",
      isi: "Inovasi sebagai Kunci Pengembangan Usaha"
    },

    {
      tipe: "paragraf",
      isi: "Salah satu pembahasan utama dalam presentasi ini adalah pentingnya inovasi. Inovasi tidak selalu berarti menciptakan sesuatu yang benar-benar baru, tetapi juga dapat berupa pengembangan dari produk atau layanan yang sudah ada agar menjadi lebih efektif, lebih praktis, dan lebih sesuai dengan kebutuhan pengguna."
    },

    {
      tipe: "heading",
      isi: "Kesimpulan"
    },

    {
      tipe: "paragraf",
      isi: "Melalui tugas kelompok ini, saya memperoleh pemahaman yang lebih luas mengenai konsep teknopreneur dan pentingnya inovasi dalam dunia bisnis. Pengalaman berdiskusi, menyusun materi, hingga melakukan presentasi juga membantu meningkatkan kemampuan bekerja sama, berkomunikasi, serta menyampaikan informasi secara sistematis."
    }
  ]
},

{
  slug: "tugas-kelompok-3p2p",
  judul: "Analisis Usaha Menggunakan Framework 3P+2P",
  mataKuliah: "Teknopreneur",
  tanggal: "2026",
  tags: ["Teknopreneur", "Kelompok", "Analisis Usaha"],
  deskripsi: "Analisis Bengkel Pramudinata Family menggunakan framework 3P+2P untuk mengevaluasi strategi pemasaran serta peluang pengembangan berbasis teknologi.",
  thumbnail: "/images/tugas/kelompok-3p2p-cover.jpg",
  fileLampiran: [
    {
      nama: "Analisis 3P+2P Bengkel Pramudinata.pdf",
      ukuran: "2.8 MB",
      tipe: "pdf",
      url: "/files/tugas/KEL__TEKNOPRENEUR_3P_2P.pdf"
    }
  ],
  foto: [],
  pptEmbedUrl: "/files/tugas/KEL__TEKNOPRENEUR_3P_2P.pdf",
  konten: [
    {
      tipe: "paragraf",
      isi: "Pada tugas kelompok ini, kami melakukan analisis terhadap Bengkel Pramudinata Family menggunakan framework 3P+2P. Analisis ini bertujuan untuk memahami kondisi usaha dari berbagai aspek sekaligus mengidentifikasi peluang pengembangan, khususnya melalui pemanfaatan teknologi dalam kegiatan operasional maupun pemasaran."
    },

    {
      tipe: "heading",
      isi: "Framework 3P+2P"
    },

    {
      tipe: "paragraf",
      isi: "Framework 3P+2P merupakan salah satu pendekatan yang digunakan untuk mengevaluasi sebuah usaha secara menyeluruh. Melalui lima aspek utama, kami dapat melihat kelebihan usaha yang sudah dimiliki sekaligus menemukan peluang yang masih dapat dikembangkan."
    },

    {
      tipe: "poin",
      judul: "Aspek yang dianalisis meliputi:",
      items: [
        "Product: Produk atau layanan yang ditawarkan kepada pelanggan.",
        "Price: Penentuan harga yang sesuai dengan nilai layanan.",
        "Place: Lokasi dan cara usaha menjangkau pelanggan.",
        "Promotion: Strategi promosi yang digunakan untuk menarik pelanggan.",
        "People: Sumber daya manusia yang terlibat dalam menjalankan usaha."
      ]
    },

    {
      tipe: "heading",
      isi: "Hasil Analisis"
    },

    {
      tipe: "subheading",
      isi: "Product"
    },

    {
      tipe: "paragraf",
      isi: "Bengkel menyediakan berbagai layanan, seperti servis motor, ganti oli, penggantian sparepart, tambal ban, hingga perbaikan komponen lainnya. Ragam layanan yang cukup lengkap menjadi salah satu nilai tambah dalam memenuhi kebutuhan pelanggan."
    },

    {
      tipe: "subheading",
      isi: "Price"
    },

    {
      tipe: "paragraf",
      isi: "Harga layanan disesuaikan dengan jenis pekerjaan yang dilakukan sehingga tetap fleksibel. Selain pembayaran tunai, bengkel juga telah menyediakan transfer bank dan QRIS sebagai alternatif pembayaran yang lebih praktis."
    },

    {
      tipe: "subheading",
      isi: "Place"
    },

    {
      tipe: "paragraf",
      isi: "Lokasi bengkel mudah dijangkau dan memiliki jam operasional yang cukup panjang. Meskipun saat ini masih beroperasi di satu lokasi, kondisi bengkel terlihat rapi dan mendukung kenyamanan pelanggan."
    },

    {
      tipe: "subheading",
      isi: "Promotion"
    },

    {
      tipe: "paragraf",
      isi: "Promosi dilakukan melalui media sosial seperti WhatsApp, Instagram, dan TikTok. Selain itu, bengkel juga mulai menyediakan layanan booking sehingga pelanggan dapat mengatur jadwal servis dengan lebih mudah."
    },

    {
      tipe: "subheading",
      isi: "People"
    },

    {
      tipe: "paragraf",
      isi: "Operasional bengkel dijalankan langsung oleh pemilik bersama dua orang karyawan. Dari hasil wawancara, pemilik juga menunjukkan sikap terbuka terhadap penerapan teknologi yang dapat membantu operasional selama mudah digunakan."
    },

    {
      tipe: "heading",
      isi: "Peluang Pengembangan"
    },

    {
      tipe: "paragraf",
      isi: "Salah satu peluang yang kami temukan adalah proses pencatatan transaksi yang masih dilakukan secara manual. Kondisi ini membuka kesempatan untuk menerapkan sistem pencatatan digital yang lebih praktis sehingga pengelolaan data pelanggan dan transaksi dapat dilakukan dengan lebih rapi dan efisien."
    },

    {
      tipe: "paragraf",
      isi: "Di sisi lain, penggunaan media sosial dan pembayaran digital menunjukkan bahwa usaha ini telah mulai beradaptasi dengan perkembangan teknologi. Langkah tersebut menjadi fondasi yang baik untuk mendukung proses digitalisasi di masa mendatang."
    },

    {
      tipe: "heading",
      isi: "Kesimpulan"
    },

    {
      tipe: "paragraf",
      isi: "Melalui tugas ini, saya belajar menerapkan framework 3P+2P sebagai alat untuk menganalisis sebuah usaha secara lebih terstruktur. Pengalaman ini membantu saya memahami bahwa setiap aspek dalam sebuah bisnis saling berkaitan, dan pemanfaatan teknologi dapat menjadi salah satu faktor penting dalam meningkatkan kualitas layanan serta daya saing usaha."
    }
  ]
},

{
  slug: "tugas-startup",
  judul: "Latihan Start Up: Knowledge, Skill, Attitude, dan Contoh Bisnis",
  mataKuliah: "Teknopreneur",
  tanggal: "2026",
  tags: ["Teknopreneur", "Start Up", "Entrepreneurship"],
  deskripsi: "Tugas individu yang membahas pentingnya knowledge, skill, dan attitude dalam membangun jiwa entrepreneur, serta mengulas Canva sebagai salah satu contoh startup berbasis teknologi.",
  thumbnail: "/images/tugas/startup-cover.jpg",
  fileLampiran: [
    {
      nama: "Presentasi Start Up.pdf",
      ukuran: "2.4 MB",
      tipe: "pdf",
      url: "/files/tugas/TUGAS_START_UP_Kezia.pdf"
    }
  ],
  foto: [],
  pptEmbedUrl: "/files/tugas/TUGAS_START_UP_Kezia.pdf",
  konten: [
    {
      tipe: "paragraf",
      isi: "Melalui tugas individu pada mata kuliah Teknopreneur ini, saya mempelajari pentingnya tiga hal yang menjadi dasar dalam membangun jiwa entrepreneur, yaitu knowledge, skill, dan attitude. Selain itu, saya juga mengulas salah satu contoh startup yang dekat dengan kehidupan sehari-hari, yaitu Canva, untuk memahami bagaimana sebuah bisnis berbasis teknologi dapat berkembang dan memberikan manfaat bagi banyak orang."
    },

    {
      tipe: "heading",
      isi: "Knowledge, Skill, dan Attitude"
    },

    {
      tipe: "subheading",
      isi: "Knowledge (Pengetahuan)"
    },

    {
      tipe: "paragraf",
      isi: "Pengetahuan menjadi dasar dalam mengambil keputusan yang tepat. Saya pernah mengalami kesulitan saat mengerjakan proyek perkuliahan karena belum memahami konsep dasarnya dengan baik. Pengalaman tersebut membuat saya menyadari bahwa memahami teori sebelum mulai bekerja akan membantu menghasilkan keputusan dan solusi yang lebih tepat."
    },

    {
      tipe: "subheading",
      isi: "Skill (Kemampuan)"
    },

    {
      tipe: "paragraf",
      isi: "Selain pengetahuan, kemampuan untuk menerapkan apa yang telah dipelajari juga sangat penting. Sebagai mahasiswa Sistem Informasi, saya belajar bahwa sebuah ide akan lebih bernilai jika dapat diwujudkan menjadi solusi yang nyata. Oleh karena itu, keterampilan teknis perlu terus diasah agar mampu mengembangkan berbagai proyek maupun produk digital."
    },

    {
      tipe: "subheading",
      isi: "Attitude (Sikap)"
    },

    {
      tipe: "paragraf",
      isi: "Sikap menjadi faktor yang melengkapi pengetahuan dan kemampuan. Kemauan untuk terus belajar, beradaptasi, serta tidak mudah menyerah ketika menghadapi tantangan merupakan bekal yang penting bagi seorang entrepreneur. Dengan sikap yang baik, proses belajar dan pengembangan diri akan berjalan lebih konsisten."
    },

    {
      tipe: "heading",
      isi: "Contoh Startup: Canva"
    },

    {
      tipe: "paragraf",
      isi: "Sebagai contoh startup, saya memilih Canva karena merupakan platform desain yang cukup sering saya gunakan, baik untuk mengerjakan tugas kuliah maupun membuat berbagai kebutuhan desain. Canva mempermudah proses pembuatan desain melalui template yang beragam sehingga dapat digunakan oleh siapa saja, termasuk pengguna yang belum memiliki pengalaman di bidang desain grafis."
    },

    {
      tipe: "poin",
      judul: "Alur penggunaan Canva secara sederhana:",
      items: [
        "Masuk ke aplikasi atau website Canva menggunakan akun yang dimiliki.",
        "Memilih jenis desain yang ingin dibuat.",
        "Menggunakan template yang tersedia sebagai dasar desain.",
        "Menyesuaikan teks, gambar, warna, maupun elemen sesuai kebutuhan.",
        "Mengunduh atau membagikan hasil desain setelah selesai."
      ]
    },

    {
      tipe: "paragraf",
      isi: "Selain dimanfaatkan untuk kebutuhan pribadi maupun akademik, Canva juga membuka peluang usaha di bidang desain digital. Dengan memanfaatkan fitur yang tersedia, seseorang dapat menawarkan jasa pembuatan poster, presentasi, media promosi, maupun konten media sosial dengan modal yang relatif terjangkau."
    },

    {
      tipe: "heading",
      isi: "Kesimpulan"
    },

    {
      tipe: "paragraf",
      isi: "Melalui tugas ini, saya memahami bahwa membangun sebuah startup tidak hanya membutuhkan ide yang menarik, tetapi juga didukung oleh pengetahuan, keterampilan, dan sikap yang saling melengkapi. Ketiga aspek tersebut menjadi bekal penting bagi seorang entrepreneur untuk terus belajar, berinovasi, dan mengembangkan solusi yang bermanfaat."
    }
  ]
},

{
  slug: "tugas-manajemen-risiko",
  judul: "Latihan Manajemen Risiko dalam Teknopreneur",
  mataKuliah: "Teknopreneur",
  tanggal: "2026",
  tags: ["Teknopreneur", "Manajemen Risiko", "Presentasi"],
  deskripsi: "Tugas individu yang membahas konsep dasar manajemen risiko, tahapan pengelolaannya, serta pentingnya penerapan manajemen risiko dalam dunia teknologi dan kewirausahaan.",
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
  pptEmbedUrl: "/files/tugas/Tugas_Teknopreneur_Kezia.pdf",
  konten: [
    {
      tipe: "paragraf",
      isi: "Pada tugas individu ini, saya mempelajari konsep dasar manajemen risiko, mulai dari pengertian risiko, tahapan pengelolaannya, hingga pentingnya penerapan manajemen risiko dalam mendukung keberhasilan sebuah proyek maupun usaha berbasis teknologi."
    },

    {
      tipe: "heading",
      isi: "Memahami Risiko dan Manajemen Risiko"
    },

    {
      tipe: "paragraf",
      isi: "Risiko merupakan kemungkinan terjadinya suatu peristiwa yang dapat menghambat pencapaian tujuan. Dalam kegiatan sehari-hari, risiko dapat muncul kapan saja, termasuk saat mengerjakan proyek perkuliahan. Saya pernah mengalami kendala ketika laptop mengalami kerusakan sehingga beberapa data penting tidak dapat diakses. Dari pengalaman tersebut, saya mulai memahami pentingnya mengantisipasi risiko sejak awal."
    },

    {
      tipe: "paragraf",
      isi: "Manajemen risiko adalah proses mengidentifikasi, menganalisis, dan mengendalikan risiko agar dampaknya dapat diminimalkan. Salah satu langkah sederhana yang kini saya biasakan adalah melakukan backup data secara rutin serta menyiapkan alternatif apabila terjadi kendala selama proses pengerjaan."
    },

    {
      tipe: "heading",
      isi: "Tahapan Manajemen Risiko"
    },

    {
      tipe: "poin",
      judul: "Tahapan yang dipelajari dalam proses manajemen risiko:",
      items: [
        "Identifikasi risiko untuk mengetahui potensi masalah yang mungkin terjadi.",
        "Analisis risiko guna menilai kemungkinan serta dampak yang ditimbulkan.",
        "Menentukan strategi pengelolaan risiko sesuai tingkat prioritas.",
        "Menerapkan solusi yang telah direncanakan.",
        "Melakukan pemantauan secara berkala agar risiko tetap terkendali."
      ]
    },

    {
      tipe: "heading",
      isi: "Strategi Pengelolaan Risiko"
    },

    {
      tipe: "poin",
      judul: "Beberapa strategi yang umum digunakan:",
      items: [
        "Menghindari risiko (Risk Avoidance).",
        "Mengurangi dampak risiko (Risk Reduction).",
        "Mengalihkan risiko kepada pihak lain (Risk Transfer).",
        "Menunda aktivitas yang berisiko (Risk Deferral).",
        "Menerima risiko dengan tetap menyiapkan langkah antisipasi (Risk Retention)."
      ]
    },

    {
      tipe: "heading",
      isi: "Pentingnya Manajemen Risiko"
    },

    {
      tipe: "paragraf",
      isi: "Sebagai mahasiswa Sistem Informasi, saya menyadari bahwa setiap proyek selalu memiliki risiko yang perlu dikelola dengan baik. Kemampuan mengidentifikasi potensi masalah sejak awal dapat membantu proses pengerjaan menjadi lebih terarah serta mengurangi kemungkinan terjadinya kendala yang berdampak pada hasil akhir."
    },

    {
      tipe: "paragraf",
      isi: "Melalui tugas ini, saya juga belajar bahwa manajemen risiko tidak hanya diterapkan dalam dunia bisnis, tetapi juga dapat diterapkan dalam aktivitas sehari-hari, termasuk saat mengerjakan tugas, mengembangkan aplikasi, maupun menjalankan sebuah proyek."
    },

    {
      tipe: "heading",
      isi: "Kesimpulan"
    },

    {
      tipe: "paragraf",
      isi: "Tugas ini memberikan pemahaman bahwa manajemen risiko merupakan bagian penting dalam proses pengambilan keputusan. Dengan mengenali potensi risiko lebih awal dan menyiapkan langkah antisipasi yang tepat, sebuah proyek atau usaha dapat berjalan dengan lebih terencana, efektif, dan siap menghadapi berbagai tantangan."
    }
  ]
},

]

export const blogConfig = {
  rssUrl: "https://keziaasitha.blogspot.com/feeds/posts/default?alt=rss",
  blogUrl: "https://keziaasitha.blogspot.com",
}

// ── KONTAK ───────────────────────────────────────────────────
export const contactInfo = [
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
