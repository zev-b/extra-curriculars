import React, { useState, useEffect } from 'react';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    try {
      const stored = localStorage.getItem("recipes");
      console.log("Loaded from localStorage:", stored);

      if (stored) {
        const parsed = JSON.parse(stored);
        console.log("Parsed recipes:", parsed);

        if (Array.isArray(parsed) && parsed.every(r => r && r.id)) {
          setRecipes(parsed);
        } else {
          console.warn("Parsed recipes have unexpected structure:", parsed);
          localStorage.removeItem("recipes");
        }
      }
    } catch (err) {
      console.error("Failed to load recipes from localStorage:", err);
      localStorage.removeItem("recipes");
    } finally {
      setHasLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
  }, [recipes, hasLoaded]);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter((r) => r.id !== id));
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.notes?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Saver</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <RecipeForm onAdd={handleAddRecipe} />
      <RecipeList recipes={filteredRecipes} onDelete={handleDeleteRecipe} />
    </div>
  );
}

export default App;
