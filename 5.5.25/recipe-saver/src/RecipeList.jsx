export default function RecipeList({ recipes, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border p-4 rounded-xl shadow bg-white">
          <h2 className="text-xl font-bold">{recipe.title}</h2>
          {recipe.image && (
            <img src={recipe.image} alt={recipe.title} className="w-full h-auto rounded mb-2" />
          )}
          <p>{recipe.notes}</p>
          <button
            onClick={() => onDelete(recipe.id)}
            className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
