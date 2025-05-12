import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export default function RecipeSaverApp() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [search, setSearch] = useState("");
  const [fullscreenIndex, setFullscreenIndex] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("recipes");
    if (saved) {
      setRecipes(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!image || !title) return;
    const newRecipe = {
      id: Date.now(),
      title,
      tags: tags.split(",").map((tag) => tag.trim()),
      image,
    };
    setRecipes([newRecipe, ...recipes]);
    setTitle("");
    setTags("");
    setImage(null);
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setFullscreenIndex((prev) => (prev < filteredRecipes.length - 1 ? prev + 1 : prev)),
    onSwipedRight: () => setFullscreenIndex((prev) => (prev > 0 ? prev - 1 : prev)),
    trackMouse: true
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Screenshot Saver</h1>

      <div className="grid gap-4 mb-6">
        <input
          placeholder="Search recipes by title or tag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button onClick={handleSave}>Save Recipe</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipes.map((recipe, index) => (
          <div key={recipe.id} className="overflow-hidden cursor-pointer">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
              onClick={() => setFullscreenIndex(index)}
            />
            <div>
              <h2 className="text-lg font-semibold">{recipe.title}</h2>
              <div className="text-sm text-gray-500">
                {recipe.tags.map((tag, index) => (
                  <span key={index} className="mr-2">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {fullscreenIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setFullscreenIndex(null)}
        >
          <div {...swipeHandlers} className="w-full h-full flex items-center justify-center">
            <img
              src={filteredRecipes[fullscreenIndex].image}
              alt="Full View"
              className="max-w-full max-h-full object-contain touch-zoom-pan cursor-zoom-out"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );

}
