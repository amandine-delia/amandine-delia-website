export const getIframeSrc = (iframeStr: string): string => {
  const srcMatch = (iframeStr || '').match(/src=["']([^"']+)["']/)
  return srcMatch ? srcMatch[1] : ''
}
