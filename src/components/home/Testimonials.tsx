
import { useState } from 'react';

const testimonials = [
  {
    text: "Ingenix Innovations helped us implement a voice AI solution that reduced our customer service wait times by 45% and increased satisfaction scores by 30%.",
    name: "Sarah Johnson",
    title: "CTO, HealthTech Solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  },
  {
    text: "The predictive analytics system developed by Ingenix has transformed our approach to risk management, saving us millions in potential losses.",
    name: "Michael Chen",
    title: "Head of Risk, Global Finance Corp",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
  },
  {
    text: "Working with the Ingenix team was seamless. Their multi-agent AI system automated our entire inventory management process, increasing efficiency by 60%.",
    name: "Priya Sharma",
    title: "Supply Chain Director, RetailMax",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=200",
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Client <span className="text-ingenix-primary">Testimonials</span>
          </h2>
          <p className="max-w-2xl text-xl text-gray-500 mx-auto">
            Don't take our word for it - hear what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-ingenix-accent/50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="relative">
              <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-ingenix-primary/30" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.2999C1.62421 8.07324 1.98015 6.87572 2.69205 5.70735C3.40395 4.51816 4.4444 3.5999 5.8132 2.94258L6.7958 4.36048C5.90378 4.8316 5.23403 5.33004 4.78655 5.85581C4.36525 6.35876 4.16214 6.8316 4.17831 7.27432C4.21684 7.56011 4.34353 7.81949 4.55839 8.05244C4.77325 8.28539 5.02891 8.4 5.32539 8.4C5.75257 8.4 6.10293 8.26572 6.37647 7.99716C6.65 7.72859 6.7858 7.38904 6.7858 6.9785C6.7858 6.61221 6.68379 6.29115 6.47979 6.01534C6.27578 5.73952 5.99804 5.6016 5.64655 5.6016H5.34702L4.97979 4.0198L7.39762 3.3799V10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.2999C8.85079 8.07324 9.20674 6.87572 9.91864 5.70735C10.6305 4.51816 11.671 3.5999 13.0398 2.94258L14.0224 4.36048C13.1304 4.8316 12.4606 5.33004 12.0131 5.85581C11.5918 6.35876 11.3887 6.8316 11.4049 7.27432C11.4434 7.56011 11.5701 7.81949 11.785 8.05244C11.9998 8.28539 12.2555 8.4 12.552 8.4C12.9791 8.4 13.3295 8.26572 13.603 7.99716C13.8766 7.72859 14.0124 7.38904 14.0124 6.9785C14.0124 6.61221 13.9104 6.29115 13.7064 6.01534C13.5024 5.73952 13.2246 5.6016 12.8731 5.6016H12.5736L12.2064 4.0198L14.6242 3.3799V10.3Z" fill="currentColor" />
              </svg>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8">
                  "{testimonials[activeIndex].text}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-ingenix-dark">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[activeIndex].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-ingenix-primary scale-125' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
