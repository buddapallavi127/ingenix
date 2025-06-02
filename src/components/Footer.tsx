import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import bg5 from '@/assets/bg3.avif';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:[grid-template-columns:1.5fr_1fr_1fr_1fr] gap-8 text-center md:text-left">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-5 flex justify-center md:justify-start">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-[#6E59A5]">Ingenix</span>
                <span className="text-2xl font-medium ml-1 text-white">Innovations</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm mx-auto md:mx-0">
              Empowering enterprises with cutting-edge AI solutions to solve real-world challenges.
            </p>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/solutions#ai-consulting" className="text-gray-400 hover:text-white transition-colors">AI Consulting</Link></li>
              <li><Link to="/solutions#voice-ai" className="text-gray-400 hover:text-white transition-colors">Voice AI</Link></li>
              <li><Link to="/solutions#agentic-ai" className="text-gray-400 hover:text-white transition-colors">Agentic AI</Link></li>
              <li><Link to="/solutions#generative" className="text-gray-400 hover:text-white transition-colors">Generative AI</Link></li>
              <li><Link to="/solutions#predictive" className="text-gray-400 hover:text-white transition-colors">Predictive Analytics</Link></li>
              <li><Link to="/solutions#automation" className="text-gray-400 hover:text-white transition-colors">Process Automation</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact</h3>
            <ul className="space-y-3 text-sm mx-auto md:mx-0 max-w-xs">
              <li className="flex justify-center md:justify-start items-start">
                <Mail size={18} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:sales@ingenixinnovations.com" className="text-gray-400 hover:text-white transition-colors">
                  sales@ingenixinnovations.com
                </a>
              </li>
              <li className="flex justify-center md:justify-start items-start">
                <Phone size={18} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+91 74837 15401</span>
              </li>
              <li className="text-gray-400">
                123 Tech Park, IT Corridor,
                <br />
                Bangalore, Karnataka 560100,
                <br />
                India
              </li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/company/ingenix-innovations/"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              {/* Uncomment if you want Twitter */}
              {/* <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={20} />
              </a> */}
              <a
                href="mailto:sales@ingenixinnovations.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ingenix Innovations. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center space-x-6">
              <li>
              <a href="/legal/privacy.html" className="text-gray-500 text-sm hover:text-gray-400">Privacy Policy</a>

              </li>
              <li>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-gray-400">Terms of Service</Link>              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
