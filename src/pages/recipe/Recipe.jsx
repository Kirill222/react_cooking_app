import './Recipe.css'
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import {useTheme} from '../../hooks/useTheme'

const Recipe = () => {

    const {mode} = useTheme()

    const {resId} = useParams()

    const {data: recipe, isPending, error} = useFetch(`http://localhost:3000/recipes/${resId}`)


    return (
        <div className={`recipe ${mode}`}>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {recipe && (
                <>
                    <h2 className="page-title">{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>  
                    <p className="method">{recipe.method}</p>                  
                </>
            )}
        </div>
    )
}

export default Recipe