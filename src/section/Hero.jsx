import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Phone, MapPin, Linkedin, Github, ChevronDown } from 'lucide-react';
import {images} from '../assets/images/index.js'

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-[100vw] ${
        scrolled ? 'bg-white/10 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                Swati <span className="text-pink-400">Patil</span>
              </h1>
              <p className="text-sm text-gray-300">HR Professional</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-lg"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-white/10 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/20 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-white/10 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Transforming
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                    Human Resources
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Strategic HR Leader with 12+ years of experience in talent acquisition, 
                  organizational development, and creating people-centered workplace cultures.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                  <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <Download className="h-5 w-5" />
                    Download Resume
                  </button>
                  
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5" />
                    Get In Touch
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">12+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-sm text-gray-400">Successful Hires</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-sm text-gray-400">Companies Served</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Profile Image & Contact Info */}
            <div className="flex flex-col items-center lg:items-end">
              <div className="relative mb-8">
                {/* Profile Image Container */}
             <div className="w-80 h-80 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 p-1 shadow-2xl">
  <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
    <img 
      src={images.hello} 
      alt="" 
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-lg rounded-2xl p-4 animate-bounce">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-xs">Success Rate</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-lg rounded-2xl p-4 animate-pulse">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">A+</div>
                    <div className="text-xs">Client Rating</div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 w-full max-w-sm">
                <h3 className="text-white font-semibold mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="h-4 w-4 text-pink-400" />
                    <span className="text-sm">swtnikam@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="h-4 w-4 text-pink-400" />
                    <span className="text-sm">+91 9734028000</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="h-4 w-4 text-pink-400" />
                    <span className="text-sm">P12, BEG & Centre, Pune</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-white/20">
                  <a href="https://www.linkedin.com/in/swati-patil-079a9a25/" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-200">
                    <Linkedin className="h-4 w-4 text-white" />
                  </a>
                  <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-200">
                    <Github className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-300">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Hero;