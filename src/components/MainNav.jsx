import { Link } from 'react-router-dom'

function MainNav() {
    return (
        <nav className="main-nav">
            <ul className="main-nav-list">
                <li className="main-nav-list-item">
                    <Link to="/employee" className="main-nav-link">Employee</Link>
                </li>
                <li className="main-nav-list-item">
                    <Link to="/loan" className="main-nav-link">Loan</Link>
                </li>
                <li className="main-nav-list-item">
                    <Link to="/savings" className="main-nav-link">Savings</Link>
                </li>
                <li className="main-nav-list-item">
                    <Link to="/deductions" className="main-nav-link">Deductions</Link>
                </li>
                <li className="main-nav-list-item">
                    <Link to="/inquire" className="main-nav-link">Inquire</Link>
                </li>
                <li className="main-nav-list-item">
                    <Link to="/transactions" className="main-nav-link">Transactions</Link>
                </li>
                <li className="main-nav-list-item">
                    <Link to="/reports" className="main-nav-link">Reports</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav