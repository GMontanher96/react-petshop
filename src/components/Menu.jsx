// Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className="close-btn">X</button>
      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/About">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contatos</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
