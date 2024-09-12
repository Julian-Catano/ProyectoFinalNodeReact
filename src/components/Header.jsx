import React, { useState } from 'react';
import '../estilos/tailwind.css';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <div className="text-lg font-bold">
        <a href="/">Logo</a>
      </div>

      {/* Botón de menú para pantallas pequeñas */}
      <button
        className="lg:hidden p-2 bg-blue-700 rounded-md focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Menú de navegación */}
      <nav
        className={`lg:flex lg:items-center lg:space-x-6 ${
          isMenuOpen ? 'block' : 'hidden'
        } absolute lg:relative bg-blue-600 lg:bg-transparent w-full lg:w-auto mt-2 lg:mt-0 left-0 lg:left-auto top-full lg:top-auto`}
      >
        <a href="/popular" className="block py-2 px-4 hover:bg-blue-700 rounded-md">
          populares
        </a>
        <a href="/my_recipes" className="block py-2 px-4 hover:bg-blue-700 rounded-md">
          Mis recetas
        </a>
        <a href="/profile" className="block py-2 px-4 hover:bg-blue-700 rounded-md">
          Perfil
        </a>
        <a href="/logout" className="block py-2 px-4 hover:bg-blue-700 rounded-md">
          logout
        </a>
      </nav>
    </header>
  );
};

export default Header;