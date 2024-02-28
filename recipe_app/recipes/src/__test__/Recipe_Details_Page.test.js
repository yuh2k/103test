import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; // Import Routes from 'react-router-dom'
import RecipeDetailsPage from '../pages/Recipe_Details_Page';
import { getRecipeById } from '../components/RecipeInfoComponent';
import burgerImg from '../images/burger.png';

// Mocking the RecipeInfoComponent's getRecipeById function
jest.mock('../components/RecipeInfoComponent', () => ({
  getRecipeById: jest.fn()
}));
//
test('displays correct recipe title and simulates recipe path', async () => {
    const mockRecipe = {
        title: 'Burger',
        description: "Ingredients:\n" +
        "- 1 lb ground beef\n" +
        "- Salt and pepper to taste\n" +
        "- 4 burger buns\n" +
        "- Lettuce, tomato, cheese, and condiments of choice\n\n" +
        "Instructions:\n" +
        "1. Shape beef into 4 patties, season with salt and pepper.\n" +
        "2. Grill or pan-fry patties to desired doneness.\n" +
        "3. Serve on buns with lettuce, tomato, cheese, and condiments.\n",
        image: burgerImg
    };

    getRecipeById.mockResolvedValue(mockRecipe);

    const recipeId = 'burger'; // Simulate fetching details for "burger"
    const recipePath = `/recipe/${recipeId}`; // This is the expected path

    render(
        <MemoryRouter initialEntries={[recipePath]}>
            <Routes>
                <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
            </Routes>
        </MemoryRouter>
    );

    // Verify the title is displayed
    expect(await screen.findByText(mockRecipe.title)).toBeInTheDocument();
});

test('displays correct image', async () => {
    const mockRecipe = {
        title: 'Burger',
        description: "Ingredients:\n" +
        "- 1 lb ground beef\n" +
        "- Salt and pepper to taste\n" +
        "- 4 burger buns\n" +
        "- Lettuce, tomato, cheese, and condiments of choice\n\n" +
        "Instructions:\n" +
        "1. Shape beef into 4 patties, season with salt and pepper.\n" +
        "2. Grill or pan-fry patties to desired doneness.\n" +
        "3. Serve on buns with lettuce, tomato, cheese, and condiments.\n",
        image: burgerImg
    };

    // Assuming this function fetches recipe details and has been mocked
    getRecipeById.mockResolvedValue(mockRecipe);

    const recipeId = 'burger'; // Simulate fetching details for "burger"
    const recipePath = `/recipe/${recipeId}`; // This is the expected path

    render(
        <MemoryRouter initialEntries={[recipePath]}>
           <Routes> {/* Wrap Route in a Routes component */}
                <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
            </Routes>
        </MemoryRouter>
    );

    // Verify the image is displayed
    const image = await screen.findByRole('img');
    expect(image).toHaveAttribute('src', mockRecipe.image);
    
});

test('Back to Recipes button navigates to /recipe', async () => {
    const mockRecipe = {
        title: 'Burger',
        description: "Ingredients:\n" +
        "- 1 lb ground beef\n" +
        "- Salt and pepper to taste\n" +
        "- 4 burger buns\n" +
        "- Lettuce, tomato, cheese, and condiments of choice\n\n" +
        "Instructions:\n" +
        "1. Shape beef into 4 patties, season with salt and pepper.\n" +
        "2. Grill or pan-fry patties to desired doneness.\n" +
        "3. Serve on buns with lettuce, tomato, cheese, and condiments.\n",
        image: burgerImg
    };

    // Assuming this function fetches recipe details and has been mocked
    getRecipeById.mockResolvedValue(mockRecipe);

    const recipeId = 'burger'; // Simulate fetching details for "burger"
    const recipePath = `/recipe/${recipeId}`; // This is the expected path

    render(
        <MemoryRouter initialEntries={[recipePath]}>
            <Routes>
                <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
            </Routes>
        </MemoryRouter>
    );
    expect(await screen.findByText('Back to Recipes')).toBeInTheDocument();
    // Find buttonm
    const backButton = await screen.findByText('Back to Recipes');
    // Verify the URL is /recipe by checking the closest ancestor of backButton
    expect(backButton.closest('a')).toHaveAttribute('href', '/recipe');
    //  Effectively checks the path resulting from clicking the button
});