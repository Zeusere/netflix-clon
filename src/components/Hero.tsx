import React from 'react';
import { Play, Info } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[80vh]">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        alt="Featured Course"
        className="w-full h-full object-contain bg-gray-900"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute bottom-20 left-20">
        <h1 className="text-6xl font-bold mb-4">Curso Avanzado de JavaScript</h1>
        <p className="text-xl mb-6 max-w-2xl">
          Domina JavaScript con este curso intensivo. Aprende sobre ES6+, programación asíncrona, patrones de diseño y las últimas características del lenguaje.
        </p>
        <div className="flex space-x-4">
          <button className="flex items-center bg-yellow-500 text-black px-6 py-2 rounded">
            <Play className="mr-2" /> Comenzar curso
          </button>
          <button className="flex items-center bg-gray-500 bg-opacity-50 px-6 py-2 rounded">
            <Info className="mr-2" /> Más información
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;