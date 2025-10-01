import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Favorites from "./pages/FavoritesPage"
import Header from './components/Header';

const Router = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router