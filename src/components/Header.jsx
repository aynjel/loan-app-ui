import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/" className="header-nav-logo">
          <span>Loan </span>Application System
        </Link>
        <ul className="header-nav-list">
          <li className="header-nav-list-item">
            <Link to="/" className="header-nav-link">Home</Link>
          </li>
          <li className="header-nav-list-item">
            <ScrollLink className="header-nav-link" to="about" smooth={true} duration={500}>About</ScrollLink>
          </li>
          <li className="header-nav-list-item">
            <ScrollLink className="header-nav-link" to="contact" smooth={true} duration={500}>Contact</ScrollLink>
          </li>
          <li className="header-nav-list-item">
            <Link to="/login" className="header-nav-link">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header