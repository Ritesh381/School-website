import React, { useEffect, useRef } from 'react'
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import CoursesSection from './components/CoursesSection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Manager from './components/Manager';
import ImageGallary from './components/ImageGallary';


const App = () => {
  const hasAlerted = useRef(true);

  useEffect(() => {
    setTimeout(()=>{
      if (hasAlerted.current) {
        alert("Hello, I am a former student of this school. This website is currently a basic version created as a placeholder. If you are a member of the school administration or faculty, please feel free to contact me at: prajapatiritesh381@gmail.com. Thank you.");
        hasAlerted.current = false;
      }
    },[2000])
  }, []); 
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