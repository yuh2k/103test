// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/Landing_Page';  
import RecipePage from './pages/Recipe_Page';
import RecipeDetailsPage from './pages/Recipe_Details_Page';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutUs from './pages/About_Us_Page';
import OurJourney from './pages/Our_Journey_Page';
import GroceryList from './components/GroceryList';
import GroceryListIcon from './components/GroceryListIcon';
import RecipeInstructions from './pages/Recipe_Instructions_Mobile';

function App() {
  return (
    <div>
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">RecipeApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/groceryList">Grocery List</Nav.Link>
                <Nav.Link href="/recipe">Recipes</Nav.Link>
                <Nav.Link href="/aboutUs">About Us</Nav.Link>
                <Nav.Link href="/ourJourney">Our Journey</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="icon-container">
          <Routes>
            <Route path="/groceryList" element={null} />
            <Route path="*" element={<GroceryListIcon />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/groceryList" element={<GroceryList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ourJourney" element={<OurJourney />} />
          <Route path="/recipeInstruction/:recipeId" element={<RecipeInstructions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;