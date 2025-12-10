export const getIframeSrc = (iframeStr: string): string => {
  const srcMatch = (iframeStr || '').match(/src=["']([^"']+)["']/)
  return srcMatch ? srcMatch[1] : ''
}

// Base64 encoding for contact info protection
export function encodeContact(str: string | undefined): string | undefined {
  if (!str) return undefined
  // Server-side: use Buffer
  if (typeof window === 'undefined') {
    return Buffer.from(str).toString('base64')
  }
  // Client-side: use btoa
  return btoa(str)
}

export function decodeContact(str: string | undefined): string | undefined {
  if (!str) return undefined
  try {
    // Server-side: use Buffer
    if (typeof window === 'undefined') {
      return Buffer.from(str, 'base64').toString('utf-8')
    }
    // Client-side: use atob
    return atob(str)
  } catch (e) {
    console.error('Failed to decode contact info:', e)
    return undefined
  }
}
