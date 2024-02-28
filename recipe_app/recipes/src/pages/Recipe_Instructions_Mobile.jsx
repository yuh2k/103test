import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {getRecipeById} from '../components/RecipeInfoComponent'; // This component will allow for fetching recipe information
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function RecipeInstructions() {
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
        <Carousel interval={null} style={{ height: '90vh', display: 'grid', placeItems: 'center'}}>
            {recipe && recipe.instructions && recipe.instructions.split('\n').map((paragraph, idx) => (
                
                <Carousel.Item key={idx} style={{minHeight: '100%', width: '100%', textAlign: 'center'}}>
                    <Card className="recipe-card p-3" style={{maxWidth: '100%', margin: '0 auto'}}>
                        <Card.Body className="recipe-card-body">
                            <h1>{paragraph}</h1>
                        </Card.Body>
                        <Button variant="secondary" as={Link} to={`/recipe/${recipeId}`} style={{ alignSelf: 'flex-end' }}>Back to Recipes</Button>

                    </Card>
                </Carousel.Item>
            ))}
        </Carousel>
  );
}

export default RecipeInstructions;