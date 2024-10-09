import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-black bg-opacity-50 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="E-Learning" className="h-8 mr-8" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
            <li><a href="#" className="hover:text-gray-300">Cursos</a></li>
            <li><a href="#" className="hover:text-gray-300">Mi progreso</a></li>
            <li><a href="#" className="hover:text-gray-300">Certificaciones</a></li>
            <li><a href="#" className="hover:text-gray-300">Recursos</a></li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Search className="cursor-pointer" />
        <Bell className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;