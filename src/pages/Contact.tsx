import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import impImage from '../assets/imp.png';


const Toast = ({ title, description, type, onClose }) => {
  const bgColor = type === 'error' ? 'bg-red-500' : 'bg-green-500';
  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg text-white ${bgColor} z-50`}>
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
      <button onClick={onClose} className="absolute top-1 right-2 text-white text-lg">&times;</button>
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    purpose: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Country codes data
  const countryCodes = [
    { code: '+93', name: 'Afghanistan', flag: '🇦🇫' },
    { code: '+355', name: 'Albania', flag: '🇦🇱' },
    { code: '+213', name: 'Algeria', flag: '🇩🇿' },
    { code: '+376', name: 'Andorra', flag: '🇦🇩' },
    { code: '+244', name: 'Angola', flag: '🇦🇴' },
    { code: '+54', name: 'Argentina', flag: '🇦🇷' },
    { code: '+374', name: 'Armenia', flag: '🇦🇲' },
    { code: '+61', name: 'Australia', flag: '🇦🇺' },
    { code: '+43', name: 'Austria', flag: '🇦🇹' },
    { code: '+994', name: 'Azerbaijan', flag: '🇦🇿' },
    { code: '+973', name: 'Bahrain', flag: '🇧🇭' },
    { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
    { code: '+375', name: 'Belarus', flag: '🇧🇾' },
    { code: '+32', name: 'Belgium', flag: '🇧🇪' },
    { code: '+501', name: 'Belize', flag: '🇧🇿' },
    { code: '+229', name: 'Benin', flag: '🇧🇯' },
    { code: '+975', name: 'Bhutan', flag: '🇧🇹' },
    { code: '+591', name: 'Bolivia', flag: '🇧🇴' },
    { code: '+387', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { code: '+267', name: 'Botswana', flag: '🇧🇼' },
    { code: '+55', name: 'Brazil', flag: '🇧🇷' },
    { code: '+673', name: 'Brunei', flag: '🇧🇳' },
    { code: '+359', name: 'Bulgaria', flag: '🇧🇬' },
    { code: '+226', name: 'Burkina Faso', flag: '🇧🇫' },
    { code: '+257', name: 'Burundi', flag: '🇧🇮' },
    { code: '+855', name: 'Cambodia', flag: '🇰🇭' },
    { code: '+237', name: 'Cameroon', flag: '🇨🇲' },
    { code: '+1', name: 'Canada', flag: '🇨🇦' },
    { code: '+238', name: 'Cape Verde', flag: '🇨🇻' },
    { code: '+236', name: 'Central African Republic', flag: '🇨🇫' },
    { code: '+235', name: 'Chad', flag: '🇹🇩' },
    { code: '+56', name: 'Chile', flag: '🇨🇱' },
    { code: '+86', name: 'China', flag: '🇨🇳' },
    { code: '+57', name: 'Colombia', flag: '🇨🇴' },
    { code: '+269', name: 'Comoros', flag: '🇰🇲' },
    { code: '+243', name: 'Congo', flag: '🇨🇩' },
    { code: '+506', name: 'Costa Rica', flag: '🇨🇷' },
    { code: '+385', name: 'Croatia', flag: '🇭🇷' },
    { code: '+53', name: 'Cuba', flag: '🇨🇺' },
    { code: '+357', name: 'Cyprus', flag: '🇨🇾' },
    { code: '+420', name: 'Czech Republic', flag: '🇨🇿' },
    { code: '+45', name: 'Denmark', flag: '🇩🇰' },
    { code: '+253', name: 'Djibouti', flag: '🇩🇯' },
    { code: '+1 767', name: 'Dominica', flag: '🇩🇲' },
    { code: '+1 809', name: 'Dominican Republic', flag: '🇩🇴' },
    { code: '+593', name: 'Ecuador', flag: '🇪🇨' },
    { code: '+20', name: 'Egypt', flag: '🇪🇬' },
    { code: '+503', name: 'El Salvador', flag: '🇸🇻' },
    { code: '+240', name: 'Equatorial Guinea', flag: '🇬🇶' },
    { code: '+291', name: 'Eritrea', flag: '🇪🇷' },
    { code: '+372', name: 'Estonia', flag: '🇪🇪' },
    { code: '+251', name: 'Ethiopia', flag: '🇪🇹' },
    { code: '+298', name: 'Faroe Islands', flag: '🇫🇴' },
    { code: '+679', name: 'Fiji', flag: '🇫🇯' },
    { code: '+358', name: 'Finland', flag: '🇫🇮' },
    { code: '+33', name: 'France', flag: '🇫🇷' },
    { code: '+594', name: 'French Guiana', flag: '🇬🇫' },
    { code: '+689', name: 'French Polynesia', flag: '🇵🇫' },
    { code: '+241', name: 'Gabon', flag: '🇬🇦' },
    { code: '+220', name: 'Gambia', flag: '🇬🇲' },
    { code: '+995', name: 'Georgia', flag: '🇬🇪' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' },
    { code: '+233', name: 'Ghana', flag: '🇬🇭' },
    { code: '+350', name: 'Gibraltar', flag: '🇬🇮' },
    { code: '+30', name: 'Greece', flag: '🇬🇷' },
    { code: '+299', name: 'Greenland', flag: '🇬🇱' },
    { code: '+1 473', name: 'Grenada', flag: '🇬🇩' },
    { code: '+590', name: 'Guadeloupe', flag: '🇬🇵' },
    { code: '+502', name: 'Guatemala', flag: '🇬🇹' },
    { code: '+224', name: 'Guinea', flag: '🇬🇳' },
    { code: '+245', name: 'Guinea-Bissau', flag: '🇬🇼' },
    { code: '+592', name: 'Guyana', flag: '🇬🇾' },
    { code: '+509', name: 'Haiti', flag: '🇭🇹' },
    { code: '+504', name: 'Honduras', flag: '🇭🇳' },
    { code: '+36', name: 'Hungary', flag: '🇭🇺' },
    { code: '+354', name: 'Iceland', flag: '🇮🇸' },
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
    { code: '+98', name: 'Iran', flag: '🇮🇷' },
    { code: '+964', name: 'Iraq', flag: '🇮🇶' },
    { code: '+353', name: 'Ireland', flag: '🇮🇪' },
    { code: '+972', name: 'Israel', flag: '🇮🇱' },
    { code: '+39', name: 'Italy', flag: '🇮🇹' },
    { code: '+225', name: 'Ivory Coast', flag: '🇨🇮' },
    { code: '+1 876', name: 'Jamaica', flag: '🇯🇲' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+962', name: 'Jordan', flag: '🇯🇴' },
    { code: '+7', name: 'Kazakhstan', flag: '🇰🇿' },
    { code: '+254', name: 'Kenya', flag: '🇰🇪' },
    { code: '+686', name: 'Kiribati', flag: '🇰🇮' },
    { code: '+965', name: 'Kuwait', flag: '🇰🇼' },
    { code: '+996', name: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: '+856', name: 'Laos', flag: '🇱🇦' },
    { code: '+371', name: 'Latvia', flag: '🇱🇻' },
    { code: '+961', name: 'Lebanon', flag: '🇱🇧' },
    { code: '+266', name: 'Lesotho', flag: '🇱🇸' },
    { code: '+231', name: 'Liberia', flag: '🇱🇷' },
    { code: '+218', name: 'Libya', flag: '🇱🇾' },
    { code: '+423', name: 'Liechtenstein', flag: '🇱🇮' },
    { code: '+370', name: 'Lithuania', flag: '🇱🇹' },
    { code: '+352', name: 'Luxembourg', flag: '🇱🇺' },
    { code: '+261', name: 'Madagascar', flag: '🇲🇬' },
    { code: '+265', name: 'Malawi', flag: '🇲🇼' },
    { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
    { code: '+960', name: 'Maldives', flag: '🇲🇻' },
    { code: '+223', name: 'Mali', flag: '🇲🇱' },
    { code: '+356', name: 'Malta', flag: '🇲🇹' },
    { code: '+692', name: 'Marshall Islands', flag: '🇲🇭' },
    { code: '+222', name: 'Mauritania', flag: '🇲🇷' },
    { code: '+230', name: 'Mauritius', flag: '🇲🇺' },
    { code: '+52', name: 'Mexico', flag: '🇲🇽' },
    { code: '+691', name: 'Micronesia', flag: '🇫🇲' },
    { code: '+373', name: 'Moldova', flag: '🇲🇩' },
    { code: '+377', name: 'Monaco', flag: '🇲🇨' },
    { code: '+976', name: 'Mongolia', flag: '🇲🇳' },
    { code: '+382', name: 'Montenegro', flag: '🇲🇪' },
    { code: '+212', name: 'Morocco', flag: '🇲🇦' },
    { code: '+258', name: 'Mozambique', flag: '🇲🇿' },
    { code: '+95', name: 'Myanmar', flag: '🇲🇲' },
    { code: '+264', name: 'Namibia', flag: '🇳🇦' },
    { code: '+674', name: 'Nauru', flag: '🇳🇷' },
    { code: '+977', name: 'Nepal', flag: '🇳🇵' },
    { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
    { code: '+687', name: 'New Caledonia', flag: '🇳🇨' },
    { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
    { code: '+505', name: 'Nicaragua', flag: '🇳🇮' },
    { code: '+227', name: 'Niger', flag: '🇳🇪' },
    { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
    { code: '+850', name: 'North Korea', flag: '🇰🇵' },
    { code: '+47', name: 'Norway', flag: '🇳🇴' },
    { code: '+968', name: 'Oman', flag: '🇴🇲' },
    { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
    { code: '+680', name: 'Palau', flag: '🇵🇼' },
    { code: '+507', name: 'Panama', flag: '🇵🇦' },
    { code: '+675', name: 'Papua New Guinea', flag: '🇵🇬' },
    { code: '+595', name: 'Paraguay', flag: '🇵🇾' },
    { code: '+51', name: 'Peru', flag: '🇵🇪' },
    { code: '+63', name: 'Philippines', flag: '🇵🇭' },
    { code: '+48', name: 'Poland', flag: '🇵🇱' },
    { code: '+351', name: 'Portugal', flag: '🇵🇹' },
    { code: '+1 787', name: 'Puerto Rico', flag: '🇵🇷' },
    { code: '+974', name: 'Qatar', flag: '🇶🇦' },
    { code: '+40', name: 'Romania', flag: '🇷🇴' },
    { code: '+7', name: 'Russia', flag: '🇷🇺' },
    { code: '+250', name: 'Rwanda', flag: '🇷🇼' },
    { code: '+685', name: 'Samoa', flag: '🇼🇸' },
    { code: '+378', name: 'San Marino', flag: '🇸🇲' },
    { code: '+239', name: 'Sao Tome and Principe', flag: '🇸🇹' },
    { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+221', name: 'Senegal', flag: '🇸🇳' },
    { code: '+381', name: 'Serbia', flag: '🇷🇸' },
    { code: '+248', name: 'Seychelles', flag: '🇸🇨' },
    { code: '+232', name: 'Sierra Leone', flag: '🇸🇱' },
    { code: '+65', name: 'Singapore', flag: '🇸🇬' },
    { code: '+421', name: 'Slovakia', flag: '🇸🇰' },
    { code: '+386', name: 'Slovenia', flag: '🇸🇮' },
    { code: '+677', name: 'Solomon Islands', flag: '🇸🇧' },
    { code: '+252', name: 'Somalia', flag: '🇸🇴' },
    { code: '+27', name: 'South Africa', flag: '🇿🇦' },
    { code: '+82', name: 'South Korea', flag: '🇰🇷' },
    { code: '+34', name: 'Spain', flag: '🇪🇸' },
    { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+249', name: 'Sudan', flag: '🇸🇩' },
    { code: '+597', name: 'Suriname', flag: '🇸🇷' },
    { code: '+268', name: 'Swaziland', flag: '🇸🇿' },
    { code: '+46', name: 'Sweden', flag: '🇸🇪' },
    { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
    { code: '+963', name: 'Syria', flag: '🇸🇾' },
    { code: '+886', name: 'Taiwan', flag: '🇹🇼' },
    { code: '+992', name: 'Tajikistan', flag: '🇹🇯' },
    { code: '+255', name: 'Tanzania', flag: '🇹🇿' },
    { code: '+66', name: 'Thailand', flag: '🇹🇭' },
    { code: '+228', name: 'Togo', flag: '🇹🇬' },
    { code: '+676', name: 'Tonga', flag: '🇹🇴' },
    { code: '+1 868', name: 'Trinidad and Tobago', flag: '🇹🇹' },
    { code: '+216', name: 'Tunisia', flag: '🇹🇳' },
    { code: '+90', name: 'Turkey', flag: '🇹🇷' },
    { code: '+993', name: 'Turkmenistan', flag: '🇹🇲' },
    { code: '+688', name: 'Tuvalu', flag: '🇹🇻' },
    { code: '+256', name: 'Uganda', flag: '🇺🇬' },
    { code: '+380', name: 'Ukraine', flag: '🇺🇦' },
    { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪' },
    { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+1', name: 'United States', flag: '🇺🇸' },
    { code: '+598', name: 'Uruguay', flag: '🇺🇾' },
    { code: '+998', name: 'Uzbekistan', flag: '🇺🇿' },
    { code: '+678', name: 'Vanuatu', flag: '🇻🇺' },
    { code: '+379', name: 'Vatican City', flag: '🇻🇦' },
    { code: '+58', name: 'Venezuela', flag: '🇻🇪' },
    { code: '+84', name: 'Vietnam', flag: '🇻🇳' },
    { code: '+967', name: 'Yemen', flag: '🇾🇪' },
    { code: '+260', name: 'Zambia', flag: '🇿🇲' },
    { code: '+263', name: 'Zimbabwe', flag: '🇿🇼' }

  ];

  const [selectedCountry, setSelectedCountry] = useState(countryCodes.find(country =>country.code==='+91'));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e) => {
    // Only allow numbers and limit to 10 digits
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    
    // Add full phone number with country code
    formDataObj.set('phone', `${selectedCountry.code}${formData.phone}`);

    try {
      const response = await fetch('https://formsubmit.co/ajax/sales@ingenixinnovations.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formDataObj
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast({
        title: 'Message sent!',
        description: 'Your inquiry has been sent to our team at sales@ingenixinnovations.com',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        purpose: 'General Inquiry',
        message: ''
      });
      setSelectedCountry(countryCodes[0]);
      form.reset();
    } catch (error) {
      toast({ title: 'Error', description: 'Something went wrong. Try again later.', type: 'background' });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#12121e] text-white font-inter">
      <Navbar />
      <main className="flex-grow pt-20 relative overflow-hidden">
        {/* Hero Section */}
        <div className="py-20 relative z-10 overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${impImage})`,
              opacity: 0.15,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1.5 }}
          ></motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">Us</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to transform your business with AI? Get in touch with our team of experts.
            </motion.p>
            <motion.div
              className="mt-10 mx-auto max-w-xl bg-[#1a1a2e] rounded-2xl border border-[#2c2c45] px-10 py-6 text-center shadow-xl hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl text-[#8B5CF6] mb-2 opacity-30">❝</div>
              <p className="text-lg text-gray-200 italic">"Try the Future"</p>
              <p className="text-sm text-gray-400">by Ingenix Innovations</p>
            </motion.div>
          </div>
        </div>

        {/* Main Content - Form and Contact Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://ingenixinnovations.com/thankyou" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-md text-white focus:ring-[#6E59A5] focus:border-[#6E59A5]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-md text-white focus:ring-[#6E59A5] focus:border-[#6E59A5]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                  <div className="flex">
                    <div className="relative w-1/3 mr-2">
                      <select
                        value={selectedCountry.code}
                        onChange={(e) => {
                          const country = countryCodes.find(c => c.code === e.target.value);
                          setSelectedCountry(country);
                        }}
                        className="w-full px-3 py-2 bg-[#1a1a2e] border border-gray-700 rounded-md text-white focus:ring-[#6E59A5] focus:border-[#6E59A5] appearance-none"
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.code} ({country.name})
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="flex-1 px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-md text-white focus:ring-[#6E59A5] focus:border-[#6E59A5]"
                      placeholder="1234567890"
                      pattern="[0-9]{10}"
                      title="Please enter a 10-digit phone number"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-md text-white focus:ring-[#6E59A5] focus:border-[#6E59A5]"
                  />
                </div>
                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-gray-300 mb-1">Purpose</label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-md text-white focus:ring-[#6E59A5] focus:border-[#6E59A5]"
                  >
                    <option>General Inquiry</option>
                    <option>Sales</option>
                    <option>Partnership</option>
                    <option>Media</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-md text-white focus:ring-[#6E59A5] focus:border-[#6E59A5]"
                  ></textarea>
                </div>
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#6E59A5] rounded-md"
                  >
                    {isSubmitting ? 'Sending...' : "Let's Collaborate"}
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] mb-6">Connect With Us</h2>
              <div className="bg-[#1a1a2e] p-8 rounded-lg border border-gray-800 shadow-lg space-y-6">
              <motion.div className="flex items-start" whileHover={{ x: 5 }}>
  <a href="mailto:sales@ingenixinnovations.com" className="text-[#8B5CF6] mr-4 mt-1">
    <Mail />
  </a>
  <div>
    <h3 className="font-medium text-white">Email</h3>
    <a href="mailto:sales@ingenixinnovations.com" className="text-gray-300 hover:text-white">
      sales@ingenixinnovations.com
    </a>
  </div>
</motion.div>
                
                <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                  <Phone className="text-[#8B5CF6] mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">Phone</h3>
                    <p className="text-gray-300">+91 74837 15401</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                  <div className="text-[#8B5CF6] mr-4 mt-1">📍</div>
                  <div>
                    <h3 className="font-medium text-white">Office</h3>
                    <p className="text-gray-300">
                      Leela Palace Road,<br />
                      Bangalore, Karnataka 560008,<br />
                      India
                    </p>
                  </div>
                </motion.div>

                <div>
                  <h3 className="font-medium text-white mb-3">Social Media</h3>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="https://www.linkedin.com/company/ingenix-innovations/" 
                      className="bg-[#1D1D35] p-3 rounded-full text-[#8B5CF6] hover:bg-[#6E59A5] hover:text-white" 
                      whileHover={{ scale: 1.1 }}
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer" // Recommended for security with target="_blank"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    
                    <motion.a 
  href="mailto:sales@ingenixinnovations.com" 
  className="bg-[#1D1D35] p-3 rounded-full text-[#8B5CF6] hover:bg-[#6E59A5] hover:text-white" 
  whileHover={{ scale: 1.1 }}
>
  <Mail size={20} />
</motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Background */}
        <motion.div
          className="relative z-0 pointer-events-none w-full h-[35vh] overflow-hidden mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <style>
            {`
            .waves-container-bottom {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 100%;
              overflow: hidden;
            }

            .wave-bottom {
              position: absolute;
              bottom: 0;
              width: 200%;
              height: 100%;
              background-repeat: repeat-x;
              background-position: left bottom;
              opacity: 0.4;
            }

            .wave-bottom:nth-child(1) {
              background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg"><path fill="%236E59A5" fill-opacity="1" d="M0,100L48,85.3C96,70.7,192,42.7,288,42.7C384,42.7,480,70.7,576,74.7C672,78.7,768,58.7,864,58.7C960,58.7,1056,78.7,1152,77.3C1248,76,1344,69.3,1392,65.3L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path></svg>');
              animation: wave-animation 30s ease-in-out infinite; /* Increased duration, changed to ease-in-out */
              z-index: 2;
            }

            .wave-bottom:nth-child(2) {
              background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg"><path fill="%238B5CF6" fill-opacity="1" d="M0,100L48,80C96,60,192,20,288,20C384,20,480,60,576,66.7C672,73.3,768,46.7,864,46.7C960,46.7,1056,73.3,1152,80C1248,86.7,1344,73.3,1392,66.7L1440,60L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path></svg>');
              animation: wave-animation-reverse 27s ease-in-out infinite; /* Increased duration, changed to ease-in-out */
              z-index: 1;
              transform: translateX(-50%);
            }

            @keyframes wave-animation {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            @keyframes wave-animation-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            `}
          </style>
          <div className="waves-container-bottom">
            <div className="wave-bottom"></div>
            <div className="wave-bottom"></div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;