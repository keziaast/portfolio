// src/components/Blog.js

import { blogConfig } from '../lib/data'

export default function Blog({ posts }) {
  if (!blogConfig.rssUrl && (!posts || posts.length === 0)) return null

  return (
    <section id="blog" className="py-24 px-[6%] max-w-[1180px] mx-auto">
      <div className="reveal">
        <span className="sec-tag">Blog</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-1">
          Artikel <span className="text-[#0BB8D4]">Terbaru</span>
        </h2>
        <div className="sec-line" />
        <p className="text-sm text-gray-500 dark:text-[#7878A0] mb-8">
          Tulisan terbaru dari blog saya di Blogspot.
        </p>
      </div>

      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <a key={i} href={post.link} target="_blank" rel="noopener noreferrer"
               className="card overflow-hidden hover:-translate-y-1 hover:shadow-xl reveal block group">

              {/* Thumbnail */}
              <div className="h-44 bg-gray-100 dark:bg-[#13131E] flex items-center justify-center
                              border-b border-gray-200 dark:border-white/[0.07] overflow-hidden">
                {post.thumbnail ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.thumbnail} alt={post.title}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  /* Placeholder bergaya kalau tidak ada gambar */
                  <div className="flex flex-col items-center gap-2 text-gray-300 dark:text-[#3a3a50]">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    <span className="text-xs font-medium">Artikel Blog</span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="text-xs text-gray-400 dark:text-[#7878A0] mb-2">{post.pubDate}</div>
                <h3 className="font-bold text-sm mb-2 line-clamp-2 leading-snug group-hover:text-[#0BB8D4] transition-colors">
                  {post.title}
                </h3>
                {/* ✅ FIX: Deskripsi sudah bersih dari HTML entity di blogspot.js */}
                
                <p className="text-xs text-gray-500 dark:text-[#7878A0] line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
                
                <div className="mt-3 text-xs font-semibold text-[#0BB8D4] flex items-center gap-1">
                  Baca selengkapnya →
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="card p-10 text-center reveal">
          <div className="text-5xl mb-4">📝</div>
          <h3 className="font-bold text-lg mb-2">Blog akan tampil di sini</h3>
          <p className="text-sm text-gray-500 dark:text-[#7878A0] mb-4">
            Isi <code className="bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs">rssUrl</code> di{' '}
            <code className="bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs">src/lib/data.js</code>
          </p>
        </div>
      )}

      {posts && posts.length > 0 && (
        <div className="text-center mt-8 reveal">
          <a href={blogConfig.blogUrl} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex">
            Lihat Semua Artikel →
          </a>
        </div>
      )}
    </section>
  )
}
