import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import cookieImg from '../images/cookie.png';
import friedeggImg from '../images/friedegg.png';
import burgerImg from '../images/burger.png';
import kajmakImg from '../images/kajmak.png';
import phoImg from '../images/pho.png';
import empanadasImg from '../images/empanadas.png';
import friedriceImg from '../images/friedrice.png';
import GroceryList from '../components/GroceryList';

import "../pages/Recipe_Details_Page.css";

const Recipe_Page = () => {
    const recipeLinks = [
        { 
            id: 1, 
            title: 'Burger', 
            link: '/recipe/burger', 
            image: burgerImg,
            description: 'A juicy, grilled beef patty sandwiched between fresh buns with lettuce, tomato, and cheese.'
        },
        { 
            id: 2, 
            title: 'Cookie', 
            link: '/recipe/cookie', 
            image: cookieImg,
            description: 'Crispy on the outside, chewy on the inside, chocolate chip cookies.'
        },
        { 
            id: 3, 
            title: 'Empanadas', 
            link: '/recipe/empanadas', 
            image: empanadasImg,
            description: 'Golden, crispy pastry filled with savory meat and spices.'
        },
        { 
            id: 4, 
            title: 'Fried Egg', 
            link: '/recipe/friedegg', 
            image: friedeggImg,
            description: 'A perfect fried egg with a runny yolk, ideal for breakfast.'
        },
        { 
            id: 5, 
            title: 'Fried Rice', 
            link: '/recipe/friedrice', 
            image: friedriceImg,
            description: 'A flavorful dish with stir-fried rice, vegetables, and eggs.'
        },
        { 
            id: 6, 
            title: 'Kajmak', 
            link: '/recipe/kajmak', 
            image: kajmakImg,
            description: 'A creamy dairy product, rich and decadent, perfect for spreading.'
        },
        { 
            id: 7, 
            title: 'Pho', 
            link: '/recipe/pho', 
            image: phoImg,
            description: 'A Vietnamese soup with aromatic broth, rice noodles, herbs, and meat.'
        },
    ];

    return (
        <div id="recipeList" className="d-flex justify-content-center flex-column align-items-center">
            <h1 className='m-3'>All Recipes</h1>
            {recipeLinks.map((recipe) => (
                <Card key={recipe.id} className="recipe-card">
                    <Card.Img variant="left" src={recipe.image} className="recipe-card-img" />
                    <Card.Body className="recipe-card-body">
                        <Card.Title>{recipe.title}</Card.Title>
                        <Card.Text>
                            {recipe.description}
                        </Card.Text>
                        <Button as={Link} to={recipe.link} variant="primary">Recipe Details</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Recipe_Page;
