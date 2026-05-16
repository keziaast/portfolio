// app/tugas/[slug]/page.js
import { tugasList } from '@/lib/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return tugasList.map(t => ({ slug: t.slug }))
}

export default function TugasDetail({ params }) {
  const tugas = tugasList.find(t => t.slug === params.slug)
  if (!tugas) notFound()

  const idx = tugasList.findIndex(t => t.slug === params.slug)
  const prev = tugasList[idx - 1] || null
  const next = tugasList[idx + 1] || null

  return (
    <main className="min-h-screen bg-white dark:bg-[#0C0C14] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* Tombol kembali */}
        <Link href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[#0BB8D4] mb-8 hover:underline">
          ← Kembali ke daftar tugas
        </Link>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-4">
          {tugas.tags.map(tag => (
            <span key={tag}
              className="text-xs font-semibold px-3 py-1 rounded-full
                         bg-[#0BB8D4]/10 text-[#0BB8D4]">
              {tag}
            </span>
          ))}
        </div>

        {/* Judul */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          {tugas.judul}
        </h1>

        {/* Meta */}
        <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8 flex-wrap">
          <span>📅 {tugas.tanggal}</span>
          <span>📚 {tugas.mataKuliah}</span>
        </div>

        <hr className="border-gray-200 dark:border-white/10 mb-8" />

        {/* Konten artikel */}
        <article className="prose prose-gray dark:prose-invert max-w-none mb-12">
          {tugas.konten.map((blok, i) => {
            if (blok.tipe === 'heading') return (
              <h2 key={i} className="text-xl font-bold mt-8 mb-3
                                     text-gray-900 dark:text-white">
                {blok.isi}
              </h2>
            )
            if (blok.tipe === 'subheading') return (
              <h3 key={i} className="text-lg font-semibold mt-6 mb-2
                                     text-[#0BB8D4]">
                {blok.isi}
              </h3>
            )
            if (blok.tipe === 'paragraf') return (
              <p key={i} className="text-gray-600 dark:text-gray-300
                                    leading-relaxed mb-4">
                {blok.isi}
              </p>
            )
            if (blok.tipe === 'poin') return (
              <div key={i} className="my-4">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {blok.judul}
                </p>
                <ul className="space-y-2">
                  {blok.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2
                                           text-gray-600 dark:text-gray-300 text-sm">
                      <span className="text-[#0BB8D4] mt-1 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
            return null
          })}
        </article>

        {/* Foto (untuk tugas kelompok) */}
        {tugas.foto && tugas.foto.length > 0 && (
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400
                           uppercase tracking-wider mb-4">
              Dokumentasi
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {tugas.foto.map((src, i) => (
                <img key={i} src={src} alt={`Foto ${i+1}`}
                  className="rounded-xl w-full object-cover aspect-video" />
              ))}
            </div>
          </div>
        )}

        {/* File lampiran */}
        <div className="bg-gray-50 dark:bg-[#16161F] border border-gray-200
                        dark:border-white/[0.07] rounded-2xl p-5 mb-10">
          <h3 className="text-xs font-semibold text-gray-400 uppercase
                         tracking-wider mb-4">
            File Lampiran
          </h3>
          <div className="flex flex-col gap-3">
            {tugas.fileLampiran.map((file, i) => (
              <div key={i} className="flex items-center justify-between
                                      bg-white dark:bg-[#0C0C14]
                                      border border-gray-200 dark:border-white/[0.07]
                                      rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    {file.tipe === 'pdf' ? '📄' : file.tipe === 'pptx' ? '📊' : '📝'}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {file.nama}
                    </p>
                    <p className="text-xs text-gray-400">{file.ukuran}</p>
                  </div>
                </div>
                <a href={file.url} download
                  className="text-xs font-semibold text-[#0BB8D4]
                             border border-[#0BB8D4] px-3 py-1.5 rounded-lg
                             hover:bg-[#0BB8D4] hover:text-white transition-colors">
                  ⬇ Unduh
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Navigasi antar tugas */}
        <div className="grid grid-cols-2 gap-4">
          {prev ? (
            <Link href={`/tugas/${prev.slug}`}
              className="bg-gray-50 dark:bg-[#16161F] border border-gray-200
                         dark:border-white/[0.07] rounded-xl p-4 hover:border-[#0BB8D4]
                         transition-colors">
              <p className="text-xs text-gray-400 mb-1">← Sebelumnya</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200
                            line-clamp-2">
                {prev.judul}
              </p>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/tugas/${next.slug}`}
              className="bg-gray-50 dark:bg-[#16161F] border border-gray-200
                         dark:border-white/[0.07] rounded-xl p-4 text-right
                         hover:border-[#0BB8D4] transition-colors">
              <p className="text-xs text-gray-400 mb-1">Berikutnya →</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200
                            line-clamp-2">
                {next.judul}
              </p>
            </Link>
          ) : <div />}
        </div>

      </div>
    </main>
  )
}