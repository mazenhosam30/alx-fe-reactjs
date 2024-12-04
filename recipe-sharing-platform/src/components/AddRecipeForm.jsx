import React, { useState } from "react";

target.value

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  // Validation logic
  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title is required.";
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (formData.ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please list at least two ingredients, separated by commas.";
    }
    if (!formData.steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form submission logic
    console.log("New Recipe Submitted:", formData);
    setErrors({});
    setFormData({ title: "", ingredients: "", steps: "" });
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
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
            className={`w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300 ${
              errors.title ? "border-red-500" : ""
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
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
            className={`w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300 ${
              errors.ingredients ? "border-red-500" : ""
            }`}
            placeholder="List ingredients, separated by commas"
          />
          {errors.ingredients && (
            <p className="text-red-500 mt-1">{errors.ingredients}</p>
          )}
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
            className={`w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300 ${
              errors.steps ? "border-red-500" : ""
            }`}
            placeholder="Describe the preparation steps"
          />
          {errors.steps && <p className="text-red-500 mt-1">{errors.steps}</p>}
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
