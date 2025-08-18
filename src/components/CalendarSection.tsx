import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

const CalendarSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="pulse-chip mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Calendar className="w-5 h-5 text-pulse-500 mr-2" />
            <span>Записаться на встречу</span>
          </div>
          
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Готовы обсудить ваш проект?
          </h2>
          
          <p className="section-subtitle text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Запишитесь на бесплатную консультацию, где мы обсудим ваши цели и покажем, как можем помочь вашему бизнесу расти.
          </p>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <a 
              href="https://calendar.google.com/calendar/u/0?cid=Y2luemFyb2NjYUBnbWFpbC5jb20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-full transition-all duration-300 text-lg"
            >
              Выбрать удобное время
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-gray-500/20 to-orange-600/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <div className="metamorphosis-animation w-full h-32 relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-gray-600/30 rounded-xl"></div>
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-orange-400/50 to-gray-500/50 rounded-full animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-to-tl from-gray-400/50 to-orange-500/50 rounded-full animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-orange-300/40 to-gray-400/40 rounded-full animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;