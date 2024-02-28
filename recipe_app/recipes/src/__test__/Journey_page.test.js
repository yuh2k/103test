import React from 'react';
import { render, screen } from '@testing-library/react';
import Our_Journey_Page from "../pages/Our_Journey_Page";
import { BrowserRouter as Router } from 'react-router-dom';

/** Tests for the Journey Page */
test('renders Our Journey title', () => {
  render(
    <Router>
      <Our_Journey_Page />
    </Router>
  );

  const journeyTitle = screen.getByText('Our Journey');
  expect(journeyTitle).toBeInTheDocument();
});

test('renders all journey cards', () => {
  render(
    <Router>
      <Our_Journey_Page />
    </Router>
  );

  const journeyCards = screen.getAllByRole('img');
  expect(journeyCards).toHaveLength(2); 
});

test('renders journey card titles', () => {
  render(
    <Router>
      <Our_Journey_Page />
    </Router>
  );

  const teamTitle = screen.getByText('Team');
  expect(teamTitle).toBeInTheDocument();

  const facundoTitle = screen.getByText('Facundo Conversing');
  expect(facundoTitle).toBeInTheDocument();
});

test('renders journey descriptions', () => {
  render(
    <Router>
      <Our_Journey_Page />
    </Router>
  );

  const teamDescription = screen.getByText(/cold winter storm one January afternoon/);
  expect(teamDescription).toBeInTheDocument();

  const facundoDescription = screen.getByText(/The Code Crusaders, a quartet of tenacious programmers/);
  expect(facundoDescription).toBeInTheDocument();
});
