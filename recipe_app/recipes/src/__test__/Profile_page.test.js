import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from "../pages/About_Us_Page";
import { BrowserRouter as Router } from 'react-router-dom';

/** Tests for the About us */
test('renders About Us title', () => {
  render(
    <Router>
      <AboutUs />
    </Router>
  );

  const aboutUsTitle = screen.getByText('About Us');
  expect(aboutUsTitle).toBeInTheDocument();
});

test('renders all profile images', () => {
  render(
    <Router>
      <AboutUs />
    </Router>
  );

  const profileImages = screen.getAllByRole('img');
  expect(profileImages).toHaveLength(4);
});

test('renders all profile names', () => {
  render(
    <Router>
      <AboutUs />
    </Router>
  );

  const names = ['Long', 'Jiahao', 'Facundo', 'Ethan'];
  names.forEach(name => {
    const profileName = screen.getByText(name);
    expect(profileName).toBeInTheDocument();
  });
});

test('renders all profile descriptions', () => {
  render(
    <Router>
      <AboutUs />
    </Router>
  );

  const descriptions = [
    'A hard worker who loves learning and teaching. Also loves sushi!',
    '"Peanut Butter and Jelly Sandwich" when asked to describe himself...',
    'Gym god and Data Structures and Algos enthusiast!',
    'A guy with the hair of a God on his head -- was robbed of 1st place in IQuHack...'
  ];

  descriptions.forEach(description => {
    const profileDescription = screen.getByText(description);
    expect(profileDescription).toBeInTheDocument();
  });
});
