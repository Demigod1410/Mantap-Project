"use client";

import { useState, useEffect } from 'react';
import HomePage from '../components/HomePage';
import AlternativeHomePage from '../components/AlternativeHomePage';

export default function Home() {
  const [useAlternative, setUseAlternative] = useState(true);
  
  return (
    <>
      <div className="fixed top-4 right-4 z-[9999] bg-white shadow-lg rounded-full px-4 py-2 flex items-center space-x-2">
        <span className={`text-sm ${!useAlternative ? 'font-bold text-[#be1a1f]' : 'text-gray-500'}`}>Original</span>
        <button 
          onClick={() => setUseAlternative(!useAlternative)}
          className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
          style={{ backgroundColor: useAlternative ? '#be1a1f' : '#d1d5db' }}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
              useAlternative ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        <span className={`text-sm ${useAlternative ? 'font-bold text-[#be1a1f]' : 'text-gray-500'}`}>Modern</span>
      </div>

      {useAlternative ? <AlternativeHomePage /> : <HomePage />}
    </>
  );
}