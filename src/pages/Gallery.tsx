import React, {useState} from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import '../App.css'; 
import s1 from '../assets/food/1.png';
import s2 from '../assets/food/2.png';
import s3 from '../assets/food/3.png';
import s4 from '../assets/food/4.png';
import s5 from '../assets/food/5.png';
import s6 from '../assets/food/6.png';
import s7 from '../assets/food/7.png';
import s8 from '../assets/food/8.png';

const Gallery: React.FC = () => {
    // Array slika
    const images = [s1, s2, s3, s4, s5, s6, s7, s8];
   // State za paginaciju
   const [currentPage, setCurrentPage] = useState(1);
   const imagesPerPage = 4;
   const totalPages = Math.ceil(images.length / imagesPerPage);
   // Izračunavamo indekse za trenutnu stranu
   const indexOfLastImage = currentPage * imagesPerPage;
   const indexOfFirstImage = indexOfLastImage - imagesPerPage;
   const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
 
   // Funkcije za promenu strane
   const nextPage = () => {
     if (currentPage < Math.ceil(images.length / imagesPerPage)) {
       setCurrentPage(prev => prev + 1);
     }
    }
    const prevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(prev => prev - 1);
        }
      };
      return (
        <div className="gallery-container">
          <h1>GALERIJA</h1>
          <div className="gallery-grid">
            {currentImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Gallery item ${index + 1}`} />
              </div>
            ))}
          </div>
    
          {/* Dugmići za paginaciju */}
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Prethodna
            </button>
            <span>{currentPage}</span>
            <button onClick={nextPage} disabled={currentPage === Math.ceil(images.length / imagesPerPage)}>
              Sledeća
            </button>
          </div>
        </div>
      );
  };
  
  export default Gallery;