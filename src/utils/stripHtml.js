export function makeExcerpt(html, maxLength = 120) {
  if (!html) return '';
  const clean = html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
  return clean.length > maxLength ? clean.slice(0, maxLength) + '...' : clean;
}