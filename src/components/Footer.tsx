import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 py-8 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4">¿Preguntas? Contacta a soporte@tuempresa.com</p>
        <div className="grid grid-cols-4 gap-8">
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Centro de ayuda</a></li>
            <li><a href="#" className="hover:underline">Catálogo de cursos</a></li>
            <li><a href="#" className="hover:underline">Formas de aprendizaje</a></li>
            <li><a href="#" className="hover:underline">Información corporativa</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Carreras profesionales</a></li>
            <li><a href="#" className="hover:underline">Certificaciones</a></li>
            <li><a href="#" className="hover:underline">Términos de uso</a></li>
            <li><a href="#" className="hover:underline">Contáctanos</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Cuenta</a></li>
            <li><a href="#" className="hover:underline">Programa de referidos</a></li>
            <li><a href="#" className="hover:underline">Privacidad</a></li>
            <li><a href="#" className="hover:underline">Evaluación de habilidades</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Recursos de aprendizaje</a></li>
            <li><a href="#" className="hover:underline">Programa de mentores</a></li>
            <li><a href="#" className="hover:underline">Preferencias</a></li>
            <li><a href="#" className="hover:underline">Avisos legales</a></li>
          </ul>
        </div>
        <p className="mt-8">&copy; 2024 Tu Empresa E-Learning Platform</p>
      </div>
    </footer>
  );
};

export default Footer;