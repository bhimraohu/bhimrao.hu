export function currentLanguage() {
  if (typeof window === 'object') {
    return window?.location.pathname.indexOf('/en-us') === 0 ? 'en-us' : 'hu';
  }
  return 'hu';
}