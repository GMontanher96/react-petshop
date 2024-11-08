import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Componentes das páginas
import Home from './page/Home';
import About from './page/About';
import Product from './page/Product'

// Componentes do header
import Header from './components/Header';
import Footer from './components/Footer'

// Componente da página 404
import Page404 from './components/404';

// Estilos globais
import './assets/css/base/base.css';
import './assets/css/components/header.css';  // Estilos para o Header

function App() {
  return (
    <Router>
      <div className="app">
        <Header /> {/* O Header será exibido em todas as páginas */}

        {/* Conteúdo Principal */}
        <div className="content">
          <Routes>
            {/* Definindo as rotas principais */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />

            {/* Página 404 - Rota de fallback para qualquer outra URL */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>

        {/* O Footer será exibido em todas as páginas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
