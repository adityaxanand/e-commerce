import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// In a real app, you'd fetch this from a DB. For now, we'll generate it.
// To use faker, you would run a script to generate this data.
// For simplicity, here is a pre-generated list.
const categories = [
    { id: 1, name: 'Shoes' }, { id: 2, name: 'Men T-shirts' }, { id: 3, name: 'Makeup' },
    { id: 4, name: 'Jewellery' }, { id: 5, name: 'Women T-shirts' }, { id: 6, name: 'Furniture' },
    { id: 7, name: 'Books' }, { id: 8, name: 'Electronics' }, { id: 9, name: 'Toys' },
    { id: 10, name: 'Groceries' }, { id: 11, name: 'Music' }, { id: 12, name: 'Movies' },
    // ... add more to have 100 categories
];

const ProtectedPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState([]);
  const categoriesPerPage = 6;

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const savedInterests = localStorage.getItem('userInterests');
    if (savedInterests) {
      setSelected(JSON.parse(savedInterests));
    }
  }, []);

  const handleSelect = (id) => {
    const newSelected = selected.includes(id)
      ? selected.filter(item => item !== id)
      : [...selected, id];
    setSelected(newSelected);
    localStorage.setItem('userInterests', JSON.stringify(newSelected));
  };

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);
  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-2">Please mark your interests!</h2>
      <p className="text-center text-gray-600 mb-6">We will keep you notified.</p>
      <h3 className="font-bold mb-4">My saved interests!</h3>
      <div className="space-y-2">
        {currentCategories.map(category => (
          <div key={category.id} className="flex items-center">
            <input
              type="checkbox"
              id={`category-${category.id}`}
              checked={selected.includes(category.id)}
              onChange={() => handleSelect(category.id)}
              className="h-5 w-5 rounded"
            />
            <label htmlFor={`category-${category.id}`} className="ml-3">{category.name}</label>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>&lt;&lt;</button>
        <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>&lt;</button>
        {[...Array(totalPages).keys()].map(number => (
          <button
            key={number + 1}
            onClick={() => setCurrentPage(number + 1)}
            className={`${currentPage === number + 1 ? 'font-bold' : ''}`}
          >
            {number + 1}
          </button>
        ))}
        <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>&gt;</button>
        <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>&gt;&gt;</button>
      </div>
    </div>
  );
};

export default ProtectedPage;