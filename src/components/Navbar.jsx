import './Navbar.css'
import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <Link exact="true" to="/" className="brand">
                    <h1>Cooking app</h1>
                </Link>
                <Searchbar />
                <Link to="/create">Create recipe</Link>
            </nav>
        </div>
    )
}

export default Navbar