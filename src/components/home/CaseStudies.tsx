
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    title: "AI-Powered Disease Detection System",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1581093199637-4da7626e573c?auto=format&fit=crop&q=80&w=1200",
    description: "Developed an AI-powered diagnostic tool that increased early detection rates by 35%."
  },
  {
    title: "Automated Trading Algorithm",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1565373676943-842398e00733?auto=format&fit=crop&q=80&w=1200",
    description: "Built a prediction model that increased client portfolio returns by 22% annually."
  },
  {
    title: "Voice AI Customer Service Platform",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1601370741965-d6c9e8f9f7fe?auto=format&fit=crop&q=80&w=1200",
    description: "Deployed a system that reduced call time by 40% while improving customer satisfaction."
  }
];

const CaseStudies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Success <span className="text-ingenix-primary">Stories</span>
          </h2>
          <p className="max-w-2xl text-xl text-gray-500 mx-auto">
            Real-world impact of our AI solutions across various industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-ingenix-primary font-medium mb-2">{study.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <button className="text-ingenix-primary font-medium hover:text-ingenix-highlight">
                  Read Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-ingenix-highlight hover:bg-ingenix-primary">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
