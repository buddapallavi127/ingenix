
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-ingenix-accent/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Case Studies</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI solutions have delivered measurable business results for our clients.
            </p>
          </div>
        </div>
        
        {/* This is a placeholder, the full case studies would be implemented as requested */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Case studies coming soon</h2>
          <p className="text-gray-700">
            The Case Studies section will be developed with detailed success stories including:
          </p>
          <ul className="mt-6 space-y-2 text-ingenix-primary">
            <li>Client background</li>
            <li>The challenge</li>
            <li>The AI solution implemented</li>
            <li>Results (quantified, where possible)</li>
            <li>Client quote/testimonial</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
