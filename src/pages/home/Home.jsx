import './Home.css'
import RecipeList from '../../components/RecipeList'
import { useState, useEffect } from 'react'

import {projectFirestore} from '../../firebase/config'

const Home = () => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        
        setIsPending(true) //here we start fethching data

        projectFirestore.collection('recipes').get().then((snapshot) => {
            console.log(snapshot)
            if (snapshot.empty) {
                setError('No recipes to load')
                setIsPending(false)
            }
            else {
                 let results = []
                 snapshot.docs.forEach(doc => {
                     results.push( { id: doc.id, ...doc.data() } )
                 })
                 setData(results)
                 setIsPending(false)
            }
        })
        .catch(err => {
            setError(err.message)
            setIsPending(false)
        })
        
    }, [])


    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}

export default Home