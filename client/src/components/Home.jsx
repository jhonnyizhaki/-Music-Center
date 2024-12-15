import React, { useEffect, useState } from "react";
import styles from './Home.module.css'; 

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "/image.webp",
    "/image2.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshowContainer}>
      {images.map((image, index) => (
        <div
          key={image}
          className={`${styles.slide} ${index === imageIndex ? styles.active : ''}`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
      <div className={styles.content}>
        HomePage
      </div>
    </div>
  );
};

export default Home;