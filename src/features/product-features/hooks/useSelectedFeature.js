import { useSearchParams } from 'react-router-dom'

import {
  DEFAULT_FEATURE_ID,
  getFeatureById,
  productFeatures,
} from '../data/features.data'

/**
 * The `?selected=` query param is the single source of truth for which feature
 * is highlighted, so the header dropdown, in-page clicks and a pasted deep link
 * all agree. Selecting replaces the history entry rather than pushing one, so
 * the back button still leaves the page.
 */
export function useSelectedFeature() {
  const [searchParams, setSearchParams] = useSearchParams()

  const selectedId = searchParams.get('selected') || DEFAULT_FEATURE_ID
  const activeFeature = getFeatureById(selectedId) ?? productFeatures[0]

  const selectFeature = (feature) => {
    setSearchParams({ selected: feature.id }, { replace: true })
  }

  return { features: productFeatures, activeFeature, selectFeature }
}
