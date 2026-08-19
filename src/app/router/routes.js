/**
 * Every route path in one place. Import `ROUTES` instead of writing string
 * literals so a path change is a single edit.
 *
 * Paths keep their original casing (`/howItWorks`, `/termsOfService`) so links
 * that already exist in the wild keep working.
 */
export const ROUTES = {
  home: '/',
  features: '/features',
  howItWorks: '/howItWorks',
  blog: '/blog',
  blogDetail: '/blog/:id',
  faq: '/faq',
  about: '/about',
  termsOfService: '/termsOfService',
  privacyPolicy: '/privacyPolicy',
  cookiesPolicy: '/cookiesPolicy',
  subAdmin: '/subadmin',
  notFound: '*',
}

/** Fills `:param` placeholders, e.g. buildPath(ROUTES.blogDetail, { id: 3 }). */
export function buildPath(pattern, params = {}) {
  return Object.entries(params).reduce(
    (path, [key, value]) => path.replace(`:${key}`, encodeURIComponent(value)),
    pattern
  )
}

/** Feature route with the selected-feature query the header dropdown uses. */
export function featurePath(featureId) {
  return `${ROUTES.features}?selected=${featureId}`
}
