import React, { useState } from "react";

target.value

validate,errors,setErrors

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.ingredients || !formData.steps) {
      setError("All fields are required.");
      return;
    }

    if (formData.ingredients.split(",").length < 2) {
      setError("Please provide at least two ingredients, separated by commas.");
      return;
    }

    // Add logic to handle form submission (e.g., saving data or updating state)
    console.log("New Recipe Submitted:", formData);
    setError("");
    setFormData({ title: "", ingredients: "", steps: "" });
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-medium mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            placeholder="Enter recipe title"
          />
        </div>
        <div>
          <label htmlFor="ingredients" className="block font-medium mb-1">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            placeholder="List ingredients, separated by commas"
          />
        </div>
        <div>
          <label htmlFor="steps" className="block font-medium mb-1">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            placeholder="Describe the preparation steps"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
