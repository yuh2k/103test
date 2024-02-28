// GroceryList.test.jsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import GroceryList from '../components/GroceryList';
import { GroceryListProvider } from '../components/GroceryListContext';

test('renders GroceryList and adds an ingredient', async () => {
  const { getByText, getByPlaceholderText } = render(
    <GroceryListProvider>
      <GroceryList />
    </GroceryListProvider>
  );

  const addButton = getByText('Add Ingredient');
  const input = getByPlaceholderText('Enter grocery name');

  // Simulate user input
  fireEvent.change(input, { target: { value: 'Tomatoes' } });
  fireEvent.click(addButton);

  // Wait for the item to appear on the list
  await waitFor(() => getByText('Tomatoes'));
});
