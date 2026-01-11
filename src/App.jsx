
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Home />} />
        <Route path='/howItWorks' element={<Home />} />
        <Route path='/blog' element={<Home />} />
        <Route path='/faq' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
