
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import useRecipeStore from './recipeStore';

const App = () => {
  const recipes = useRecipeStore(state => state.recipes);

  // Optional: You can pre-populate recipes here if needed

  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      {recipes.length > 0 && <RecipeList />}
    </div>
  );
};

export default App;