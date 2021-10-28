import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Search from './pages/search/Search'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">     

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recipes/:resId" component={Recipe} />
          <Route path="/create" component={Create} />
          <Route path="/search" component={Search} />
        </Switch>
      </Router>
      
    </div>
  )
}

export default App
