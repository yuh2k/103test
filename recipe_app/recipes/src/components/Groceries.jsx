import React, { useState } from 'react';
import { useGroceryList } from './GroceryListContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const Groceries = () => {
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
      <ListGroup>
        {ingredients.map((ingredient, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            {ingredient}
            <Button variant="outline-danger" size="sm" onClick={() => removeIngredient(index)}>
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Groceries;
