import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <div>
          <Link to="/" className="footer-nav-logo">
            <span>Loan </span>Application System
          </Link>
          <p className="footer-nav-text">
            © 2023 Loan Application System. All rights reserved.
          </p>
        </div>
        <ul className="footer-nav-list">
          <li className="footer-nav-list-item">
            <Link to="/" className="footer-nav-link">Home</Link>
          </li>
          <li className="footer-nav-list-item">
            <Link to="/about" className="footer-nav-link">About</Link>
          </li>
          <li className="footer-nav-list-item">
            <Link to="/contact" className="footer-nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer