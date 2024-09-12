import React from 'react';
import '../estilos/tailwind.css';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Logo o texto */}
        <div className="text-lg font-bold mb-4 lg:mb-0">
          <a href="/">Logo</a>
        </div>

        {/* Links del footer */}
        <nav className="flex flex-col lg:flex-row lg:space-x-6 items-center">
          <a href="/" className="block py-2 px-4 hover:bg-blue-700 rounded-md">
            Home
          </a>
          <a href="/about" className="block py-2 px-4 hover:bg-blue-700 rounded-md">
            About
          </a>
          <a href="/services" className="block py-2 px-4 hover:bg-blue-700 rounded-md">
            Services
          </a>
          <a href="/contact" className="block py-2 px-4 hover:bg-blue-700 rounded-md">
            Contact
          </a>
        </nav>

        {/* Redes sociales o iconos (opcional) */}
        <div className="flex mt-4 lg:mt-0 space-x-4">
          <a href="#" className="hover:text-blue-300">
            Facebook
          </a>
          <a href="#" className="hover:text-blue-300">
            Twitter
          </a>
          <a href="#" className="hover:text-blue-300">
            Instagram
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-4">
        &copy; {new Date().getFullYear()} My Website. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;