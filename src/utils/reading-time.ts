/**
 * 읽기 시간 계산 (한국어 기준 분당 500자)
 */
export function getReadingTime(content: string): string {
  const cleanContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const charCount = cleanContent.length;
  const minutes = Math.max(1, Math.ceil(charCount / 500));
  return `${minutes}분`;
}
