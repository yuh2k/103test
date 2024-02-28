import Recipe_Page from "../pages/Recipe_Page";
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders all recipe cards', () => {
  render(
    <Router>
      <Recipe_Page />
    </Router>
  );

  const recipeCards = screen.getAllByRole('img');
  expect(recipeCards).toHaveLength(7);
});

test('renders recipe title', () => {
  render(
    <Router>
      <Recipe_Page />
    </Router>
  );

  const recipeTitle = screen.getByText('Burger');
  expect(recipeTitle).toBeInTheDocument();
});

test('renders recipe description', () => {
  render(
    <Router>
      <Recipe_Page />
    </Router>
  );

  const recipeDescription = screen.getByText('A juicy, grilled beef patty sandwiched between fresh buns with lettuce, tomato, and cheese.');
  expect(recipeDescription).toBeInTheDocument();
});

test('renders recipe details button', () => {
  render(
    <Router>
      <Recipe_Page />
    </Router>
  );

  const recipeDetailsButtons = screen.getAllByRole('button', { name: /recipe details/i });
    recipeDetailsButtons.forEach((button) => {
  expect(button).toBeInTheDocument();
});
});