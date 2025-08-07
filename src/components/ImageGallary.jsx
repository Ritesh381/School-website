import React, { useEffect, useState } from "react";
import img1 from '../assets/gallary/1.jpg';
import img2 from '../assets/gallary/2.jpg';
import img3 from '../assets/gallary/3.jpg';
import img4 from '../assets/gallary/4.jpg';     
import img5 from '../assets/gallary/5.jpg';
import img6 from '../assets/gallary/6.jpg';
import img7 from '../assets/gallary/7.jpg';
import img8 from '../assets/gallary/8.jpg';
import img9 from '../assets/gallary/9.jpg';
import img10 from '../assets/gallary/10.jpg';


function ImageGallary() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]); // Re-run effect if image array length changes

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50 rounded-lg shadow-md mx-4 mt-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Our School Gallery</h2>
        <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <img
            src={images[currentIndex]}
            alt={`School Event ${currentIndex + 1}`}
            className="w-full h-64 sm:h-80 md:h-96 object-cover transition-opacity duration-500 ease-in-out cursor-pointer"
            onClick={() => openModal(images[currentIndex])}
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x500/CCCCCC/000000?text=Image+${currentIndex + 1}`; }}
          />

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Image Modal/Lightbox */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl max-h-full overflow-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300 ease-in-out"
              aria-label="Close image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Full size image"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x600/CCCCCC/000000?text=Image+Load+Error'; }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default ImageGallary;
