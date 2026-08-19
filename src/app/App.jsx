import { BrowserRouter } from 'react-router-dom'

import ScrollToTop from '@shared/components/ScrollToTop'

import AppRouter from './router/AppRouter'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter />
    </BrowserRouter>
  )
}
