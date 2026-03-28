import { blogConfig } from './data'

function cleanText(str) {
  if (!str) return ''
  return str
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<p[^>]*>/gi, ' ')
    .replace(/<div[^>]*>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;.*?&gt;/g, '')
    .replace(/&lt;/g, '')
    .replace(/&gt;/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractContent(itemXml) {
  // Coba ambil dari content:encoded (namespace)
  let raw = ''
  const contentMatch = itemXml.match(
    /content:encoded[^>]*>([\s\S]*?)<\/content:encoded>/i
  )
  if (contentMatch) {
    raw = contentMatch[1]
    // Strip CDATA kalau ada
    raw = raw.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    return raw
  }

  // Fallback ke description
  const descMatch = itemXml.match(
    /description[^>]*>([\s\S]*?)<\/description>/i
  )
  if (descMatch) {
    raw = descMatch[1]
    raw = raw.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    return raw
  }

  return ''
}

function extractThumbnail(itemXml, rawContent) {
  // Coba media:thumbnail
  const media = itemXml.match(/media:thumbnail[^>]+url=["']([^"']+)["']/i)
  if (media) return media[1].replace(/\/s\d+(-c)?\//, '/s1600/').replace(/=s\d+/, '=s1600')
  
  // Coba img pertama di konten
  const img = rawContent.match(/<img[^>]+src=["']([^"']+)["']/i)
  if (img && !img[1].includes('feeds/posts')) return img[1].replace(/\/s\d+(-c)?\//, '/s1600/').replace(/=s\d+/, '=s1600')


  return null
}

function getTag(itemXml, tag) {
  const cdataMatch = itemXml.match(
    new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i')
  )
  if (cdataMatch) return cdataMatch[1].trim()

  const plain = itemXml.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i')
  )
  return plain ? plain[1].trim() : ''
}

export async function getBlogPosts(limit = 6) {
  if (!blogConfig.rssUrl) return []

  try {
    const res = await fetch(blogConfig.rssUrl, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []

    const xml = await res.text()
    const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/g)
    if (!itemMatches) return []

    return itemMatches
      .slice(0, limit)
      .map(item => {
        const title   = cleanText(getTag(item, 'title'))
        const link    = getTag(item, 'link') ||
                        item.match(/<link>(.*?)<\/link>/)?.[1] || ''
        const pubDate = getTag(item, 'pubDate')

        const rawContent  = extractContent(item)
        const description = cleanText(rawContent).slice(0, 180) +
                            (cleanText(rawContent).length > 180 ? '...' : '')
        const thumbnail   = extractThumbnail(item, rawContent)

        const dateStr = pubDate
          ? new Date(pubDate).toLocaleDateString('id-ID', {
              day: 'numeric', month: 'long', year: 'numeric',
            })
          : ''

        return { title, link, pubDate: dateStr, rawDate: pubDate, description, thumbnail }
      })
      .filter(p => p.title && p.link)
      .sort((a, b) => new Date(b.rawDate) - new Date(a.rawDate))

  } catch (err) {
    console.error('Gagal fetch blog:', err)
    return []
  }
}