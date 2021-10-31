import './Recipe.css'
import { useParams } from 'react-router-dom'
import {useTheme} from '../../hooks/useTheme'
import { useState, useEffect } from 'react'
import {projectFirestore} from '../../firebase/config'


const Recipe = () => {

    const {mode} = useTheme()
    const {resId} = useParams()

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {

        setIsPending(true)

        const unsubscribe = projectFirestore.collection('recipes').doc(resId).onSnapshot(doc => {
            if (doc.exists) {
                setData(doc.data())
                setIsPending(false)
            }
            else {
                setError('Could not find that recipe')
                setIsPending(false)
            }
        })

        return () => unsubscribe()

    }, [resId])

    const handleClick = () => {
        projectFirestore.collection('recipes').doc(resId).update({
            title: 'Title after update 999'
        })
    }

    return (
        <div className={`recipe ${mode}`}>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && (
                <>
                    <h2 className="page-title">{data.title}</h2>
                    <p>Takes {data.cookingTime} to cook.</p>
                    <ul>
                        {data.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>  
                    <p className="method">{data.method}</p>  
                    <button onClick={handleClick}>Update me with dummy data</button>             
                </>
            )}
        </div>
    )
}

export default Recipe