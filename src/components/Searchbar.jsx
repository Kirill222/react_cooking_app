import './Searchbar.css'
import {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Searchbar = () => {

    const [term, setTerm] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        history.push(`/search?term=${term}`)

    }

    return (
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search:</label>
                <input 
                    type="text" 
                    id="search"
                    onChange={(e) => setTerm(e.target.value)}
                    value={term}
                    required
                />
            </form>
        </div>
    )
}

export default Searchbar