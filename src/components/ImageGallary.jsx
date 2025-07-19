import React, { useEffect, useState } from "react";


function ImageGallary() {
  const images = [
    "https://scontent.fvns6-1.fna.fbcdn.net/v/t1.6435-9/70781513_2256136471163164_7735997739531501568_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=HVWZ8k54OsUQ7kNvwEtEg0t&_nc_oc=AdmjZ6RdafB_uVbEyI-cr5x6ZQShmNXInqvZhs3Whu_Uwk1ULE9BiUGooS5exIC5W-JGMD7AHQ6sOl6ezRLM-7qM&_nc_zt=23&_nc_ht=scontent.fvns6-1.fna&_nc_gid=_P4C4GIINFjNVe9tmhdZDw&oh=00_AfRK5flERA9yKXnhSgVZ-tlTxNO-uj_evjAR2ftWrEWP_Q&oe=68A2FA45",
    "https://scontent.fvns6-1.fna.fbcdn.net/v/t1.6435-9/71379385_2266268490149962_490038781877944320_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=VzsSkJXd3FIQ7kNvwHFB5jN&_nc_oc=AdnAC1lUTqTZRDMIPLZTjpC-xOQeV3aaFUuJOQW4Ifmg34Qx0o62ewBKtWWKsDx3RfmUywb2u2tiioDvHbPu9MsD&_nc_zt=23&_nc_ht=scontent.fvns6-1.fna&_nc_gid=9hlFlH3bmrIQXq2F6CvRQA&oh=00_AfQ3FdqKfR2BxHLr8176UxbgOz6aMAoZA4jWXTQ8JTrhLw&oe=68A31895",
    "https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/73315834_2313371215439689_8825508853786345472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=F24udIPvB2QQ7kNvwEe3xIT&_nc_oc=AdnyYkMqI2hZ9H55_jPaDuxqv1InBQCjSWxx24yW0EHH0ELxuWdvLDXB93X4xAscG5_GyCZluwVNyjENufy1-ifA&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=9hlFlH3bmrIQXq2F6CvRQA&oh=00_AfSccw0_1rxDGrZWD8_Giilx8STro6TI-xDOIA_oQDPKHg&oe=68A2F9F0",
    "https://scontent.fvns6-1.fna.fbcdn.net/v/t1.6435-9/82279646_2479274062182736_8951406212226744320_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=dTDlK_nuInwQ7kNvwFJbIez&_nc_oc=AdkzY97b9lFGLwCQoBBnZRH5j8tLvQg2f51Gz5NRPPY9E8SI5jBhaqppKmjnVBjaPQZNbTx-JisLTs8PfcZWaKOa&_nc_zt=23&_nc_ht=scontent.fvns6-1.fna&_nc_gid=GYWjI5c_V8IQj49555JT3Q&oh=00_AfT9yk6zshtA5LMOvE1bqBaXWHzWe0puqAjGEE601io0fg&oe=68A31ACA",
    "https://scontent.fvns6-1.fna.fbcdn.net/v/t1.6435-9/82247900_2479274112182731_692686445688651776_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=20Y_FW1PXMEQ7kNvwGlOpDB&_nc_oc=AdkpdhQhn4qx70voi0bMwF4Vre_mySr_PEBDq9woxrQTR4kZNbeEjXMLj_6Iam5zUDUhqizUV0HnZmnP9_AUhvx-&_nc_zt=23&_nc_ht=scontent.fvns6-1.fna&_nc_gid=fweYd0zr36ruhW80eMOflw&oh=00_AfR14DhUK8sDku0OVF0O2XqbIB8_SRKEAbOFDNnzp0n_4w&oe=68A30A65",
    "https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/82909228_2497178747058934_15842485087502336_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=kyisEanld0AQ7kNvwG8s7Ei&_nc_oc=Adnwbc3Ee6d5hhEKN6Y6mLBsfDsi3vbCs6FsFQQaALE4D5IJhIlITBxsoCPM6WVILBcYfV8_uKSeQb8cJ6x5-y2L&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=M6ZATd4SGrKEgtpUiT8rSg&oh=00_AfR7BV0vrHvoscg1d9h9YLsKOW1rBa5s5x7HPLxSBO7nog&oe=68A2F24A",
    "https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/76642415_2350772645032879_4683540451922280448_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=DWzC1ievuhMQ7kNvwH4XIgy&_nc_oc=AdlG4C5vhwPdZSBBdCnw9VwZuCBfvcsBVKvvIos33ymeNfSdYOwZuJItwPUozxsYm_zgaQgvCQuVNmYtz91picOf&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=yZ2zMURF_N7DkEXYl8LRwA&oh=00_AfQtClrBZ631O0nSsJK_pTZMDIY-Ru4eZhmgLx57O3aH7A&oe=68A320B1",
    "https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/83756238_2502661009844041_24838117995315200_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=TkSmY_R0NQ4Q7kNvwEMWcU8&_nc_oc=AdmYu5PTcfpJzcL0ADCXv5aYGK80axKxoTyC7qjohe5ayy2anzGkdhXv1Cbt5lUVdSHgM_L3UtrQEVdhgQFy4OZX&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=DEDdMSGaM7Y8I-nb_CTClQ&oh=00_AfRUBUQVFZ4VJB6t9MIFwB9NB782nsYqLB7QiPnT7b184A&oe=68A2F0B2",
    "https://scontent.fvns6-1.fna.fbcdn.net/v/t1.6435-9/84352745_2502661469843995_2403195581213179904_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=PwwZtn6P5mIQ7kNvwHlfQ2e&_nc_oc=AdmucAcMcpLdjuKYrwHSF-b_l8Z-lXutwsSu-GigedOF5Rz_6qVFsnsvghLcdTX4l_TObPCSX4oe3_N_mNvgN0Yu&_nc_zt=23&_nc_ht=scontent.fvns6-1.fna&_nc_gid=lWZzsyNR9BsT5xZTnK1XwQ&oh=00_AfSVzU47KWx5ZfOrvfkyJBwbI0tLB7rtLzI_BHKD4JiRrQ&oe=68A30BEA",
    "https://scontent.fvns6-2.fna.fbcdn.net/v/t39.30808-6/493953037_9418457854930954_4545855938568760834_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=n7twHUXUCNIQ7kNvwEAcmdD&_nc_oc=AdkVAjg3Y8XmAtWF6C-04uqxyl1YH7k4C3_sbQvz9beilyyE93Y2BFRCinNLFdqjVT2KFCR2Ctz0l5wWrV3g3DOq&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=cENrVJ8UFSMmP9kLj9rlBg&oh=00_AfQbgZaRYUmgk35oorU1XrXpgb1JUiKi5xC_uzVYSmBsFQ&oe=68816DFF",

  ];
  
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
