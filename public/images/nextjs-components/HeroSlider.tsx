// components/home/HeroSlider.tsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "/images/hero/h_1.png",
    "/images/hero/h_2.png",
    "/images/hero/h_3.png",
    "/images/hero/h_4.png",
    "/images/hero/h_5.png",
    "/images/hero/h_6.png"
];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{backgroundImage: `url(${slide})`}}
        />
      ))}
    </div>
  );
}
