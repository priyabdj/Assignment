import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './themes.css';

const App = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      height: 180,
      weight: 80,
      build: 'athletic',
      text: '',
    },
  });

  const [image, setImage] = useState(null);
  const [show3D, setShow3D] = useState(false);
  const [theme, setTheme] = useState(0);
  const themes = ['theme-default', 'theme-modern', 'theme-vintage'];
  
const onSubmit = (data) => {
  console.log(data);
  alert("Form submitted! Check console for data.");
};


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleKeyToggle = (e) => {
    if (e.altKey && e.key === 'q') {
      setShow3D((prev) => !prev);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyToggle);
    return () => window.removeEventListener('keydown', handleKeyToggle);
  }, []);

  return (
    <div className={`p-4 min-h-screen ${themes[theme]}`}>
      <div className="flex justify-end mb-2 gap-2">
        {themes.map((_, i) => (
          <button key={i} className="border px-3 py-1 rounded" onClick={() => setTheme(i)}>
            Theme {i + 1}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2 border rounded p-4 w-full sm:w-1/3">
            <label>Height (cm)</label>
            <input type="number" {...register('height')} className="input" />
            <label>Weight (kg)</label>
            <input type="number" {...register('weight')} className="input" />
            <label>Build</label>
            <select {...register('build')} className="input">
              <option value="lean">Lean</option>
              <option value="reg">Regular</option>
              <option value="athletic">Athletic</option>
              <option value="big">Big</option>
            </select>
          </div>

          <div className="w-full sm:w-1/3 flex flex-col gap-2 p-4">
            <div className="drop-area border rounded p-2 h-60 flex justify-center items-center">
              {image ? (
                <img src={image} alt="Preview" className="h-full object-contain" />
              ) : (
                'Drop an image here or upload'
              )}
            </div>
            <input type="file" onChange={handleImageUpload} className="input" />
          </div>

          <div className="w-full sm:w-1/3 p-4 border rounded flex items-center justify-center">
            {show3D ? <p>[3D T-Shirt View Placeholder]</p> : image ? <img src={image} alt="Shirt" className="w-full" /> : <p>No Image</p>}
          </div>
        </div>

        <textarea
          {...register('text')}
          maxLength="300"
          rows="3"
          className="w-full p-2 border rounded resize-none"
          placeholder="Type your T-shirt text (max 3 lines)"
        />

        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
