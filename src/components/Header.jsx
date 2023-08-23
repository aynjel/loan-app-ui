import { Link } from 'react-router-dom'

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
            <Link to="/about" className="header-nav-link">About</Link>
          </li>
          <li className="header-nav-list-item">
            <Link to="/contact" className="header-nav-link">Contact</Link>
          </li>
          <li className="header-nav-list-item">
            <Link to="/login" className="header-nav-link">Login</Link>
          </li>
          <li className="header-nav-list-item">
            <Link to="/logout" className="header-nav-link">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header