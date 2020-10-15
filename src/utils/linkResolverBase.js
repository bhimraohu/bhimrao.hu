import { defaultLanguage } from '../../prismic-config'

export const linkResolverBase = (properties) => {
  if (properties.type === 'homepage') {
    return properties.lang === defaultLanguage
      ? '/'
      : `/${properties.lang}`
  }

  if (
    properties.type === 'about_us'
    || properties.type === 'news'
    || properties.type === 'projects'
    || properties.type === 'contact_page'
    || properties.type === 'help_us'
  ) {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang}/${properties.uid}`
  }

  if (properties.type === 'project') {
    return properties.lang === defaultLanguage
      ? `/projects/${properties.uid}`
      : `/${properties.lang}/projects/${properties.uid}`
  }

  return properties.lang === defaultLanguage
    ? `/`
    : `/${properties.lang}`;
};