import './Navbar.css'
import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'
import {useTheme} from '../hooks/useTheme'

const Navbar = () => {

    const {color} = useTheme()

    return (
        <div className="navbar" style={{background: color}}>
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