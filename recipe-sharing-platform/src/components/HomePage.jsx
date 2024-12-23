import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";

<Link
  to="/add-recipe"
  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
>
  Add New Recipe
</Link>

<Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">View Details</Link>

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <img src={recipe.image} alt={recipe.title} className="rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-700">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
