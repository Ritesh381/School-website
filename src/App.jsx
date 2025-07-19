import React from 'react'
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import CoursesSection from './components/CoursesSection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Manager from './components/Manager';
import ImageGallary from './components/ImageGallary';


const App = () => {
  return (
    <div className="min-h-screen bg-cream font-sans text-gray-800 flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutUsSection />
        <Manager/>
        <CoursesSection />
        <ImageGallary/>
        <ContactUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App