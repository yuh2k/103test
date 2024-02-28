import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing_Page';
import RecipePage from './pages/Recipe_Page';
import RecipeDetailsPage from './pages/Recipe_Details_Page';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/recipe" element={<RecipePage />} />
                <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
            </Routes>
        </Router>
    );
}

