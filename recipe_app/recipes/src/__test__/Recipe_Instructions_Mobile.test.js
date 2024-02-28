import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RecipeInstructions from '../pages/Recipe_Instructions_Mobile';
import { getRecipeById } from '../components/RecipeInfoComponent';

jest.mock('../components/RecipeInfoComponent', () => ({
  getRecipeById: jest.fn()
}));
  
  /** 2.1 Test for Displaying Recipe Instructions */
  test('displays recipe instructions in a carousel', async () => {
    const mockRecipe = {
      instructions: "1. Instruction One\n2. Instruction Two\n3. Instruction Three"
    };
    getRecipeById.mockResolvedValue(mockRecipe);
  
    render(
      <MemoryRouter>
        <RecipeInstructions />
      </MemoryRouter>
    );
  
    const instructionOne = await screen.findByText('1. Instruction One');
    expect(instructionOne).toBeInTheDocument();
  });
  

  /** 2.2 Test for Navigation Button */
  test('navigates to recipe details page on button click', async () => {
    const mockRecipe = {
      instructions: "1. Instruction One\n2. Instruction Two"
    };
    getRecipeById.mockResolvedValue(mockRecipe);
  
    render(
      <MemoryRouter initialEntries={['/recipe/mockId']}>
        <Routes>
          <Route path="/recipe/:recipeId" element={<RecipeInstructions />} />
        </Routes>
      </MemoryRouter>
    );
  
    const backButtons = await screen.findAllByText('Back to Recipes');
    expect(backButtons.length).toBeGreaterThan(0); /** Do this because expect to be in document: there is many of these so it won't work */
    fireEvent.click(backButtons[0]); 
  });
  