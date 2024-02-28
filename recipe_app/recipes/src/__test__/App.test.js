import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "../App";

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

test('renders the main navbar with links', () => {
  render(<App />);

  expect(screen.getByText('RecipeApp')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Recipes')).toBeInTheDocument();
  expect(screen.getByText('About Us')).toBeInTheDocument();
  expect(screen.getByText('Our Journey')).toBeInTheDocument();
});

test('navigates to the Home page', () => {
  render(<App />);

  userEvent.click(screen.getByText('Home'));
  // Replace with an identifier from your LandingPage component
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('navigates to the Recipes page', () => {
  render(<App />);

  userEvent.click(screen.getByText('Recipes'));
  // Replace with an identifier from your RecipePage component
  expect(screen.getByText('Recipes')).toBeInTheDocument();
});

test('navigates to the About Us page', () => {
  render(<App />);

  userEvent.click(screen.getByText('About Us'));
  // Replace with an identifier from your AboutUs component
  expect(screen.getByText('About Us')).toBeInTheDocument();
});

test('navigates to the Our Journey page', () => {
  render(<App />);

  userEvent.click(screen.getByText('Our Journey'));
  // Replace with an identifier from your OurJourney component
  expect(screen.getByText('Our Journey')).toBeInTheDocument();
});
