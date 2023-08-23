import { Link } from 'react-router-dom'

function BreadCrumb() {
    return (
        <nav className="breadcrumb">
            <ul className="breadcrumb-list">
            <li className="breadcrumb-list-item">
                <Link to="/" className="breadcrumb-link">Home</Link>
            </li>
            <li className="breadcrumb-list-item">
                <Link to="/about" className="breadcrumb-link">About</Link>
            </li>
            <li className="breadcrumb-list-item">
                <Link to="/contact" className="breadcrumb-link">Contact</Link>
            </li>
            <li className="breadcrumb-list-item">
                <Link to="/login" className="breadcrumb-link">Login</Link>
            </li>
            <li className="breadcrumb-list-item">
                <Link to="/logout" className="breadcrumb-link">Logout</Link>
            </li>
            </ul>
        </nav>
    )
}

export default BreadCrumb