// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import Home from './pages/Home'
// // import Header from "./components/Header";
// // import Footer from "./components/Footer";
// import Features from './pages/Features'
// import HowItWorks from './pages/HowItWorks'
// import Blog from './pages/Blog'
// import Faq from './pages/Faq'
// import BlogDynamic from './pages/BlogDynamic'
// import MainLayout from './layout/MainLayout'
// import NotFound from './pages/NotFound'
// import SubAdmin from './layout/SubAdmin'
// import ArticleEditor from './pages/admin/ArticleEditor'
// import AboutPage from './pages/About'
// import TermsOfServicePage from './pages/TermsOfServices'
// import PrivacyPolicyPage from './pages/PrivacyPolicy'
// import CookiesPolicyPage from './pages/CookiesPolicy'

// function App() {
//   return (
//     <BrowserRouter>
//       {/* <Header /> */}
//       <Routes>
//         {/* <Route path='/' element={<Home />} />
//         <Route path='/features' element={<Features />} />
//         <Route path='/howItWorks' element={<HowItWorks />} />
//         <Route path='/blog' element={<Blog />} />
//         <Route path='/blog/:id' element={<BlogDynamic />} />

//         <Route path='/faq' element={<Faq />} /> */}

//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/features" element={<Features />} />
//           <Route path="/howItWorks" element={<HowItWorks />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/blog/:id" element={<BlogDynamic />} />

//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/termsOfService" element={<TermsOfServicePage />} />
//           <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />
//           <Route path="/cookiesPolicy" element={<CookiesPolicyPage />} />
//         </Route>

//         <Route element={<SubAdmin />}>
//           <Route path="/subadmin" element={<ArticleEditor />} />
//         </Route>

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       {/* <Footer /> */}
//     </BrowserRouter>
//   )
// }

// export default App
// App.jsx

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Features from './pages/Features'
import HowItWorks from './pages/HowItWorks'
import Blog from './pages/Blog'
import Faq from './pages/Faq'
import BlogDynamic from './pages/BlogDynamic'

import MainLayout from './layout/MainLayout'
import SubAdmin from './layout/SubAdmin'

import NotFound from './pages/NotFound'
import ArticleEditor from './pages/admin/ArticleEditor'

import AboutPage from './pages/About'
import TermsOfServicePage from './pages/TermsOfServices'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import CookiesPolicyPage from './pages/CookiesPolicy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Website Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/features" element={<Features />} />

          <Route path="/howItWorks" element={<HowItWorks />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="/blog/:id" element={<BlogDynamic />} />

          <Route path="/faq" element={<Faq />} />

          {/* New Pages */}
          <Route path="/about" element={<AboutPage />} />

          <Route path="/termsOfService" element={<TermsOfServicePage />} />

          <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />

          <Route path="/cookiesPolicy" element={<CookiesPolicyPage />} />
        </Route>

        {/* Admin Layout */}
        <Route element={<SubAdmin />}>
          <Route path="/subadmin" element={<ArticleEditor />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
