import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from "../pages/Landing_Page";
import { BrowserRouter as Router } from 'react-router-dom';

test('renders the hero image', () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );

  const heroImage = screen.getByAltText('Photo by Irene Dávila');
  expect(heroImage).toBeInTheDocument();
});

test('renders "WHY US?" text', () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );

  const whyUsText = screen.getByText('WHY US?');
  expect(whyUsText).toBeInTheDocument();
});

test('renders recipe exploration text', () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );

  const recipeText = screen.getByText('Explore our best recipes expertly designed by your amazing team');
  expect(recipeText).toBeInTheDocument();
});

test('renders "No more ordering deliveries" text', () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );

  const deliveryText = screen.getByText('No more ordering deliveries');
  expect(deliveryText).toBeInTheDocument();
});

test('renders recipe button and checks navigation', () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );

  const recipeButton = screen.getByRole('button', { name: 'Recipe' });
  expect(recipeButton).toBeInTheDocument();
  expect(recipeButton.closest('a')).toHaveAttribute('href', '/recipe');
});
