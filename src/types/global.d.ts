export {}

declare global {
  interface Window {
    gtag: (
      category: string,
      action: string,
      data: Record<string, unknown>
    ) => void
  }
}
