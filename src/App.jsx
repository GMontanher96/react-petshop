import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Componentes das páginas
import Home from './page/Home';
import About from './page/About';

// Componentes do sidebar
import Sidebar from './components/Menu';  // Importando o componente do Sidebar

// Estilos globais
import './assets/css/base/base.css';
import './assets/css/components/menu.css';  // Adicione um arquivo para os estilos do sidebar

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        {/* Botão para abrir ou fechar o sidebar */}
        <button onClick={toggleSidebar} className="menu-toggle-btn">
          {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
        </button>

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Conteúdo Principal */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
