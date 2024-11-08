import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../assets/css/components/header.css';
import imagem from '../assets/img/catiorrinho.svg';

const Header = () => {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const toggleMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    const closeMenu = () => {
        setMenuAtivo(false);
    };

    return (
        <header className="cabecalho container">
            <div className="menu-hamburguinho" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="cabecalho-container">
                <Link to="/" className="flex flex--centro">
                    <img className="cabecalho__logo" src={imagem} alt="Logo Catiorrinho" />
                    <h1 className="cabecalho__titulo">PetShop</h1>
                </Link>
            </div>

            {/* Menu de navegação */}
            <nav className={`menu-cabecalho ${menuAtivo ? 'menu-cabecalho--ativo' : ''}`}>
                <ul className="menu-itens">
                    <li>
                        <Link to="/login" className="menu-item menu-item--entrar">Entrar</Link>
                    </li>
                    <li><Link to="/" className="menu-item">Home</Link></li>
                    <li><Link to="/product" className="menu-item">Produtos</Link></li>
                    <li><Link to="/blog" className="menu-item">Blog</Link></li>
                    <li><Link to="/about" className="menu-item">Sobre</Link></li>
                </ul>
                <button 
                    className="menu-cabecalho__fechar" 
                    onClick={closeMenu}
                    aria-label="Fechar menu"
                >
                    X
                </button>
            </nav>

            {/* Fundo escuro que fecha o menu */}
            <div 
                className={`menu-cabecalho-background ${menuAtivo ? 'menu-cabecalho-background--ativo' : ''}`} 
                onClick={closeMenu}
            />
        </header>
    );
};

export default Header;
