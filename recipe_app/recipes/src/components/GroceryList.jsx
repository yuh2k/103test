// Groceries.jsx
import React, { useState } from 'react';
import { useGroceryList } from './GroceryListContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const GroceryList = () => {
  const { ingredients, addIngredient, clearIngredients, removeIngredient } = useGroceryList();
  const [newIngredient, setNewIngredient] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newIngredient.trim()) return; // Prevent adding empty or only whitespace
    addIngredient(newIngredient);
    setNewIngredient('');
  };

  return (
    <div>
      <h1 className="text-center my-4">Here are all your Ingredients:</h1>
      <div className="p-4">
        <Form onSubmit={handleSubmit} className="mb-3">
          <Form.Group className="mb-3">
            <Form.Label>Ingredient Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter grocery name"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Ingredient
          </Button>
          {' '} {/* This adds space between buttons */}
          <Button variant="danger" onClick={clearIngredients}>
            Clear All Ingredients
          </Button>
        </Form>
        <div>
          {ingredients.map((ingredient, index) => (
            // Use Bootstrap classes for margin bottom and padding
            <Card key={index} className="mb-3 p-2">
              <Card.Body className="d-flex justify-content-between align-items-center">
                {ingredient}
                <Button variant="outline-danger" size="sm" onClick={() => removeIngredient(index)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
