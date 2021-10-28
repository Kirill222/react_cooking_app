import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <Link exact to="/" className="brand">
                    <h1>Cooking app</h1>
                </Link>
                <Link to="/create">Create recipe</Link>
            </nav>
        </div>
    )
}

export default Navbar