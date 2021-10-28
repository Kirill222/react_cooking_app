import './Recipe.css'
import { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Recipe = () => {

    const {resId} = useParams()

    const {data: recipe, isPending, error} = useFetch(`http://localhost:3000/recipes/${resId}`)


    return (
        <div>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {recipe && <h1>{recipe.title}</h1>}
        </div>
    )
}

export default Recipe