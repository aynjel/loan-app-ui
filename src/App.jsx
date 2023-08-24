import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import MainNav from './components/MainNav'
import PageNotFound from './pages/Error/PageNotFound'
import Login from './pages/Auth/Login'
import Employee from './pages/Employee'

function App() {

  return (
    <div className='container'>
      <main className='main'>
        <Router>
          <Header />
          <MainNav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </div>
  )
}

export default App
