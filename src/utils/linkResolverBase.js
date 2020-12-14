import { defaultLanguage, newsPathBase, projectPathBase, studyHallPathBase } from '../../prismic-config'

export const linkResolverBase = (properties) => {
  if (!properties) {
    return '';
  }

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
    || properties.type === 'team'
    || properties.type === 'help_us'
    || properties.type === 'search'
  ) {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang}/${properties.uid}`
  }

  if (properties.type === 'project') {
    return properties.lang === defaultLanguage
      ? `/${projectPathBase}/${properties.uid}`
      : `/${properties.lang}/${projectPathBase}/${properties.uid}`
  }

  if (properties.type === 'study_hall') {
    return properties.lang === defaultLanguage
      ? `/${studyHallPathBase}/${properties.uid}`
      : `/${properties.lang}/${studyHallPathBase}/${properties.uid}`
  }

  if (properties.type === 'news_item') {
    return properties.lang === defaultLanguage
      ? `/${newsPathBase}/${properties.uid}`
      : `/${properties.lang}/${newsPathBase}/${properties.uid}`
  }
};