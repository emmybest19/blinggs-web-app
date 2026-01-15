
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Features from './pages/Features'
import HowItWorks from './pages/HowItWorks'
import Blog from './pages/Blog'
import Faq from './pages/Faq'

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/howItWorks' element={<HowItWorks />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
