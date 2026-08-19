/**
 * Public API of the `product-features` feature.
 * Nothing outside this folder should reach past this barrel.
 */
export { default as FeaturesPage } from './pages/FeaturesPage'
export { default as FeatureShowcase } from './components/FeatureShowcase'
export {
  productFeatures,
  getFeatureById,
  DEFAULT_FEATURE_ID,
} from './data/features.data'
