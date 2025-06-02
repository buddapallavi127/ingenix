import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Phone, ExternalLink } from 'lucide-react';

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState({
    interpretation: false,
    acknowledgment: false,
    links: false,
    termination: false,
    liability: false,
    disclaimer: false,
    governingLaw: false,
    disputes: false,
    euUsers: false,
    usCompliance: false,
    severability: false,
    changes: false,
    contact: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#6E59A5] mb-2">Terms and Conditions</h1>
        <p className="text-gray-600">Last updated: June 02, 2025</p>
        <p className="mt-4 text-lg">Please read these terms and conditions carefully before using Our Service.</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('interpretation')}
        >
          <h2 className="text-2xl font-semibold text-[#6E59A5]">Interpretation and Definitions</h2>
          {expandedSections.interpretation ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>

        {expandedSections.interpretation && (
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Interpretation</h3>
              <p className="text-gray-700">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. 
                The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Definitions</h3>
              <p className="text-gray-700 mb-4">For the purposes of these Terms and Conditions:</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#6E59A5] rounded-full mt-2 mr-2"></span>
                  <div>
                    <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, 
                    where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote 
                    for election of directors or other managing authority.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#6E59A5] rounded-full mt-2 mr-2"></span>
                  <div>
                    <strong>Country</strong> refers to: Karnataka, India
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#6E59A5] rounded-full mt-2 mr-2"></span>
                  <div>
                    <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to 
                    Ingenix Innovations, 123 Tech Park, IT Corridor, Bangalore, Karnataka 560100, India.
                  </div>
                </li>
                {/* Add other definitions similarly */}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Acknowledgment Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('acknowledgment')}
        >
          <h2 className="text-2xl font-semibold text-[#6E59A5]">Acknowledgment</h2>
          {expandedSections.acknowledgment ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>

        {expandedSections.acknowledgment && (
          <div className="mt-4 space-y-4 text-gray-700">
            <p>
              These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. 
              These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
            </p>
            <p>
              Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. 
              These Terms and Conditions apply to all visitors, users and others who access or use the Service.
            </p>
            <p>
              By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these 
              Terms and Conditions then You may not access the Service.
            </p>
            <p>
              You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
            </p>
            <p>
              Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. 
              Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You 
              use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy 
              carefully before using Our Service.
            </p>
          </div>
        )}
      </div>

      {/* Links to Other Websites Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('links')}
        >
          <h2 className="text-2xl font-semibold text-[#6E59A5]">Links to Other Websites</h2>
          {expandedSections.links ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>

        {expandedSections.links && (
          <div className="mt-4 space-y-4 text-gray-700">
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
            </p>
            <p>
              The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party 
              web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, 
              for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or 
              services available on or through any such web sites or services.
            </p>
            <p>
              We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
            </p>
          </div>
        )}
      </div>

      {/* Continue with other sections in the same pattern */}

      {/* Contact Us Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('contact')}
        >
          <h2 className="text-2xl font-semibold text-[#6E59A5]">Contact Us</h2>
          {expandedSections.contact ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>

        {expandedSections.contact && (
          <div className="mt-4 space-y-4 text-gray-700">
            <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
            
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="mr-2 text-[#6E59A5]" size={18} />
                <span>By email: <a href="mailto:ingenix.innovations@gmail.com" className="text-[#6E59A5] hover:underline">ingenix.innovations@gmail.com</a></span>
              </li>
              <li className="flex items-center">
                <ExternalLink className="mr-2 text-[#6E59A5]" size={18} />
                <span>
                  By visiting this page on our website: {' '}
                  <a href="https://ingenix.netlify.app/contact" target="_blank" rel="noopener noreferrer" className="text-[#6E59A5] hover:underline">
                    https://ingenix.netlify.app/contact
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-[#6E59A5]" size={18} />
                <span>By phone number: <a href="tel:+917483715401" className="text-[#6E59A5] hover:underline">+91 74837 15401</a></span>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        <p>These Terms and Conditions have been created with the help of the <a href="https://www.privacypolicies.com/terms-conditions-generator/" target="_blank" rel="noopener noreferrer" className="text-[#6E59A5] hover:underline">Terms and Conditions Generator</a>.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;