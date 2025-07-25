import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import CardSet from './components/CardSet';
import Game2 from './components/Game2';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<CardSet />} />
          <Route path="game2" element={<Game2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
