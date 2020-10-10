import { defaultLanguage } from '../../prismic-config'

export const linkResolverBase = (properties) => {
  if (properties.type === 'homepage') {
    return properties.lang === defaultLanguage
      ? '/'
      : `/${properties.lang}`
  }

  if (properties.type === 'page') {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang}/${properties.uid}`
  }

  if (properties.type === 'projects') {
    return properties.lang === defaultLanguage
      ? `/projects/${properties.uid}`
      : `/${properties.lang}/projects/${properties.uid}`
  }

  return properties.lang === defaultLanguage
    ? `/`
    : `/${properties.lang}`;
};