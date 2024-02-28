import React, { useState, useEffect } from 'react';
import './Recipe_Details_Page.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {getRecipeById} from '../components/RecipeInfoComponent'; // This component will allow for fetching recipe information

const RecipeDetailsPage = () => {
    const [recipe, setRecipe] = useState(null);
    const { recipeId } = useParams();

    // Fetch recipe information from the component storing recipe information
    // Replace 'recipeId' with the ID of the selected recipe
    // Replace 'recipeData' with the actual data structure of the recipe
    const fetchRecipe = async (recipeId) => {
        try {
            const recipeData = await getRecipeById(recipeId);
            console.log(recipeData);
            setRecipe(recipeData);
        } catch (error) {   // We should create a custom error message for the user
            console.error('Error fetching recipe:', error);
        }
    };

    // Call fetchRecipe when the component mounts
    useEffect(() => {
        fetchRecipe(recipeId);
    }, [recipeId]);

    return (
        <div className="recipe-details-container d-flex justify-content-center" >
            {recipe ? (
                <Card className="recipe-card">
                    <Card.Body className="recipe-card-body">
                        <Card.Title>{recipe.title}</Card.Title>
                        <Card.Img variant="right" src={recipe.image} className="recipe-card-img" />
                        <Card.Text>
                            {recipe.description.split('\n').map((paragraph, idx) => (
                                <React.Fragment key={idx}>
                                    {paragraph}<br/>
                                </React.Fragment>
                            ))}
                        </Card.Text>
                        <div className="d-flex flex-column">
                        <Button variant="primary" as={Link} to="/recipe" className="mb-2">Back to Recipes</Button>
                        <Button variant="secondary" as={Link} to={`/recipeInstruction/${recipeId}`}>Mobile Instructions</Button>
                        </div>
                    </Card.Body>
                </Card>
            ) : (
                <p>Loading recipe details...</p>
             )}
        </div>
    );
};

export default RecipeDetailsPage;
