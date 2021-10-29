import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'
import './Search.css'

const Search = () => {

    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const term = queryParams.get('term')

    const {data: searchResults, isPending, error } = useFetch(`http://localhost:3000/recipes?q=${term}`)


    return (
        <div>
            <h2 className="page-title">Recipes icluding "{term}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {searchResults && <RecipeList recipes={searchResults} /> }

        </div>
    )
}

export default Search