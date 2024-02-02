import React from 'react';
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className='holder'>
      <Navbar />
      <Sidebar />
      <Hero />
      <CoursesList />
      <CategoriesList />
    </div>
  )
}

export default HomePage