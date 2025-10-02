import './App.css'
import Header from './components/Header'
import { FavoriteProvider } from './context/FavoriteContext'
import Router from './Router'

function App() {

  return (
    <>
    <FavoriteProvider>
      <Router/>
    </FavoriteProvider>
    </>
  )
}

export default App
