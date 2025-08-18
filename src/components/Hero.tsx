
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch('/loop-header.lottie')
      .then(response => response.json())
      .then(data => setLottieData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="overflow-hidden relative min-h-screen flex items-center bg-background" 
      id="hero" 
      style={{
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
      }}
    >
      {/* Dark gradient background with subtle accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/95"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-radial from-primary/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className="pulse-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
              <span>Цифровое превосходство</span>
            </div>
            
            <h1 
              className="section-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight opacity-0 animate-fade-in text-foreground font-extrabold tracking-tight" 
              style={{ animationDelay: "0.3s" }}
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cinza Rocca
              </span>
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="section-subtitle mt-6 sm:mt-8 mb-6 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-muted-foreground font-normal text-lg sm:text-xl text-left max-w-3xl"
            >
              Наша сила - создавать результат
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="https://calendar.google.com/calendar/u/0?cid=Y2luemFyb2NjYUBnbWFpbC5jb20" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center group w-full sm:w-auto text-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-full transition-all duration-300 text-lg"
              >
                Записаться на консультацию
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-gray-500 to-orange-600 opacity-90"></div>
                <div className="absolute inset-0 animate-pulse">
                  <div className="metamorphosis-animation w-full h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/60 to-gray-600/60 rounded-full scale-110 animate-spin-slow"></div>
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-orange-400 to-gray-500 rounded-full opacity-80 animate-float"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-tl from-gray-400 to-orange-500 rounded-full opacity-70 animate-float-delayed"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-orange-300 to-gray-400 rounded-full opacity-60 animate-pulse-slow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
