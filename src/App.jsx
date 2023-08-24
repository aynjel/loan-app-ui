import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import MainNav from './components/MainNav'
import PageNotFound from './pages/Error/PageNotFound'
import Login from './pages/Auth/Login'
import Employee from './pages/Employee'
import Register from './pages/Auth/Register'

function App() {

  const user = undefined;

  return (
    <div className='container'>
      <main className='main'>
        <Router>
          <Header />
          {{
            true: <MainNav />,
            false: null
          }[user]}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {{
            true: <Footer />,
            false: null
          }[user]}
        </Router>
      </main>
    </div>
  )
}

export default App
