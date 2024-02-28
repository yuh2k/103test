import React, { createContext, useState, useContext, useEffect } from 'react';

const GroceryListContext = createContext();

export const useGroceryList = () => useContext(GroceryListContext);

const getInitialGroceryList = () => {
  // Retrieve the list from localStorage, parse it, and return it
  // If nothing is in localStorage, return an empty array
  const storedList = localStorage.getItem('groceryList');
  return storedList ? JSON.parse(storedList) : [];
};

export const GroceryListProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState(getInitialGroceryList());

  useEffect(() => {
    // Update localStorage whenever the ingredients list changes
    localStorage.setItem('groceryList', JSON.stringify(ingredients));
  }, [ingredients]);

  const addIngredient = (ingredient) => {
    setIngredients((currentIngredients) => [...currentIngredients, ingredient]);
  };

  const clearIngredients = () => {
    setIngredients([]);
    localStorage.setItem('groceryList', JSON.stringify([])); // Clear localStorage
  };

  const removeIngredient = (index) => {
    setIngredients((currentIngredients) => currentIngredients.filter((_, i) => i !== index));
    // Update localStorage after removing an ingredient
    localStorage.setItem('groceryList', JSON.stringify(ingredients.filter((_, i) => i !== index)));
  };

  return (
    <GroceryListContext.Provider value={{ ingredients, addIngredient, clearIngredients, removeIngredient }}>
      {children}
    </GroceryListContext.Provider>
  );
};
