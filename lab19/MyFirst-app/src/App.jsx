import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';

import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Watchlist from './components/Watchlist';
import NotFound from './components/NotFound';

import { LanguageContext } from './context/LanguageContext';

export default function App() {
  const [lang, setLang] = useState('en');
  
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; 
  }, [lang]);

  const changeLanguage = (newLang) => {
    setLang(newLang); };

  return (
    <>
      <LanguageContext.Provider value={{ lang, changeLanguage }}>
        <NavBar />
      </LanguageContext.Provider>

        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      
    </>
  );
}