import './RecipeList.css'
import {Link} from "react-router-dom"
import { useTheme } from '../hooks/useTheme'
import DeleteIcon from '../assets/delete.svg'
import {projectFirestore} from '../firebase/config'



const RecipeList = ({recipes}) => {

    const {mode} = useTheme()

    if (recipes.length === 0) {
        return <div className="error">No data found</div>
    }

    const handleDelete = async (id) => {

        await projectFirestore.collection('recipes').doc(id).delete()

    }

    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.coolingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                    <img 
                        src={DeleteIcon}
                        onClick={() => handleDelete(recipe.id)}
                        className="delete"
                    />
                </div>
            ))}
        </div>
    )
}

export default RecipeList   