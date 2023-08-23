import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import MainNav from './components/MainNav'
import PageNotFound from './pages/Error/PageNotFound'

function App() {

  return (
    <div className='container'>
      <main className='main'>
        <Router>
          <Header />
          <MainNav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </div>
  )
}

export default App
