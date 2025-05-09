import { useState, useRef } from 'react';

function resizeImage(file, maxWidth, maxHeight) {
    return new Promise((resolve) => {
      const img = new Image();
      const reader = new FileReader();
  
      reader.onload = (e) => {
        img.src = e.target.result;
      };
  
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
  
        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height *= maxWidth / width;
            width = maxWidth;
          } else {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }
  
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
  
        resolve(canvas.toDataURL('image/jpeg', 0.7)); // JPEG, quality 0.7
      };
  
      reader.readAsDataURL(file);
    });
}

export default function RecipeForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const resizedBase64 = await resizeImage(file, 800, 800); // Resize to max 800x800 px
      setPreviewUrl(resizedBase64);
      setImageFile(resizedBase64); // store base64 string instead of raw file
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!imageFile) {
      alert('Please upload a recipe image.');
      return;
    }
  
    const newRecipe = {
      id: Date.now(),
      title,
      notes,
      image: imageFile, // already base64
    };
    onAdd(newRecipe);
    setTitle('');
    setNotes('');
    setImageFile(null);
    setPreviewUrl(null);
    fileInputRef.current.value = '';
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-xl shadow">
      <input
        type="text"
        placeholder="Recipe Title (optional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        className="w-full"
      />
      {previewUrl && (
        <div className="mt-2">
          <p className="text-sm text-gray-600">Image preview:</p>
          <img
            src={previewUrl}
            alt="Recipe preview"
            className="w-full max-h-64 object-contain mt-1 border rounded"
          />
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Save Recipe
      </button>
    </form>
  );
}
