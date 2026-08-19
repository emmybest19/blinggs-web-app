import { ROUTES } from './routes'

/** Primary navigation shown in the site header. */
export const primaryNav = [
  { id: 'how-it-works', label: 'How it works', to: ROUTES.howItWorks },
  { id: 'blog', label: 'Blog', to: ROUTES.blog },
  { id: 'faq', label: 'FAQ', to: ROUTES.faq },
]

/** Footer link columns. */
export const footerNav = [
  {
    id: 'product',
    title: 'Product',
    links: [
      { id: 'features', label: 'Features', to: ROUTES.features },
      { id: 'how-it-works', label: 'How it Works', to: ROUTES.howItWorks },
      { id: 'blog', label: 'Blog', to: ROUTES.blog },
    ],
  },
  {
    id: 'about',
    title: 'About Us',
    links: [{ id: 'about', label: 'About Us', to: ROUTES.about }],
  },
  {
    id: 'legal',
    title: 'Legal',
    links: [
      { id: 'privacy', label: 'Privacy Policy', to: ROUTES.privacyPolicy },
      { id: 'terms', label: 'Terms of Service', to: ROUTES.termsOfService },
      { id: 'cookies', label: 'Cookie Policy', to: ROUTES.cookiesPolicy },
    ],
  },
]

/** Compact legal links in the footer's bottom bar. */
export const footerBottomNav = [
  { id: 'privacy', label: 'Privacy', to: ROUTES.privacyPolicy },
  { id: 'terms', label: 'Terms', to: ROUTES.termsOfService },
  { id: 'cookies', label: 'Cookies', to: ROUTES.cookiesPolicy },
]

/** Suggested destinations on the 404 page. */
export const notFoundSuggestions = [
  { id: 'features', label: 'Features', to: ROUTES.features },
  { id: 'blog', label: 'Blog', to: ROUTES.blog },
  { id: 'faq', label: 'FAQ', to: ROUTES.faq },
  { id: 'how-it-works', label: 'How It Works', to: ROUTES.howItWorks },
]
