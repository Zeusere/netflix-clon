import React from 'react';
import Header from './Header';
import Hero from './Hero';
import CourseList from './MovieList';
import Footer from './Footer';

const MainContent: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <CourseList title="Cursos populares" />
      <CourseList title="Nuevos lanzamientos" />
      <CourseList title="Recomendados para ti" />
      <Footer />
    </>
  );
};

export default MainContent;