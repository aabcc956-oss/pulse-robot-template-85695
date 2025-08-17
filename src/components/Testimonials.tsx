
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Cinza Rocca transformed our digital presence completely. Their SEO strategy increased our organic traffic by 150% and conversions by 80% in just 6 months.",
  author: "Sarah Martinez",
  role: "Marketing Director, TechStart Solutions",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "Their eCommerce platform redesign doubled our online sales. The user experience is incredible, and their ongoing optimization keeps improving our results.",
  author: "David Thompson",
  role: "CEO, Premium Goods Co.",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "From brand strategy to mobile app development, Cinza Rocca delivered beyond our expectations. Their team truly understands modern digital marketing.",
  author: "Dr. Lisa Chen",
  role: "Founder, HealthTech Innovations",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "Working with Cinza Rocca was a game-changer. Their content strategy and social media campaigns generated 5x more qualified leads for our B2B business.",
  author: "Michael Rodriguez",
  role: "VP Marketing, Enterprise Solutions Ltd.",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Testimonials</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">Client Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
