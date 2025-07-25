import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Game2 from './components/Game2';
import CardTapAndReveal from './components/CardTapAndReveal.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<CardTapAndReveal />} />
          <Route path="about" element={<Game2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
