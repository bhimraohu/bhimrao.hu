import { linkResolverBase } from './linkResolverBase';


export const linkResolver = (doc) => {
  const properties = doc._meta || doc;

  return linkResolverBase(properties);
};
