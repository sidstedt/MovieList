import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Favorites from "./pages/FavoritesPage";
import Header from './components/Header';
import TutorialView from './components/TutorialView';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="tutorial" element={<TutorialView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router