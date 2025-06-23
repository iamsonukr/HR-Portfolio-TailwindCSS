import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Linkedin, Building, Users, Award, Play, Pause } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      position: "CEO",
      company: "TechVision Solutions",
      industry: "Technology",
      image: "MC",
      rating: 5,
      testimonial: "Swati transformed our entire hiring process and company culture. Her strategic approach to talent acquisition helped us scale from 50 to 300 employees while maintaining our core values. The ROI on her initiatives exceeded all expectations.",
      metrics: {
        timeReduction: "60%",
        satisfactionIncrease: "45%",
        retentionImprovement: "35%"
      },
      projectType: "Global Talent Strategy",
      duration: "8 months",
      linkedinUrl: "#"
    },
    {
      id: 2,
      name: "Sarah Rodriguez",
      position: "Chief Operating Officer",
      company: "InnovateCorp",
      industry: "Manufacturing",
      image: "SR",
      rating: 5,
      testimonial: "Working with Swati was a game-changer for our organization. She led our digital transformation initiative and completely revolutionized how we approach employee engagement. Her expertise in change management is unparalleled.",
      metrics: {
        productivityGain: "40%",
        employeeEngagement: "75%",
        processEfficiency: "55%"
      },
      projectType: "Digital HR Transformation",
      duration: "12 months",
      linkedinUrl: "#"
    },
    {
      id: 3,
      name: "David Thompson",
      position: "Founder & CEO",
      company: "NextGen Startup",
      industry: "FinTech",
      image: "DT",
      rating: 5,
      testimonial: "Swati's strategic vision and execution capabilities are exceptional. She helped us build our HR infrastructure from the ground up and established processes that scaled beautifully as we grew. Her insights were invaluable during our Series A.",
      metrics: {
        hiringSpeed: "70%",
        qualityScore: "50%",
        costReduction: "30%"
      },
      projectType: "Startup HR Foundation",
      duration: "6 months",
      linkedinUrl: "#"
    },
    {
      id: 4,
      name: "Jennifer Park",
      position: "Head of People Operations",
      company: "Global Dynamics",
      industry: "Consulting",
      image: "JP",
      rating: 5,
      testimonial: "Swati's approach to organizational development is both data-driven and deeply human. She helped us navigate a complex merger while maintaining employee morale and productivity. Her leadership during challenging times was remarkable.",
      metrics: {
        retentionRate: "90%",
        integrationSuccess: "95%",
        teamSatisfaction: "80%"
      },
      projectType: "Merger & Integration",
      duration: "10 months",
      linkedinUrl: "#"
    },
    {
      id: 5,
      name: "Robert Kim",
      position: "Vice President",
      company: "Enterprise Solutions",
      industry: "Software",
      image: "RK",
      rating: 5,
      testimonial: "The cultural transformation Swati led at our company has had lasting impact. Employee satisfaction scores reached all-time highs, and we've become known as an employer of choice in our industry. Her work ethic and results speak for themselves.",
      metrics: {
        cultureScore: "85%",
        turnoverReduction: "65%",
        referralIncrease: "120%"
      },
      projectType: "Culture Transformation",
      duration: "9 months",
      linkedinUrl: "#"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Client
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from industry leaders who have experienced transformational results 
            through strategic HR partnerships.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Quote className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Left - Client Info */}
              <div className="text-center lg:text-left">
                {/* Profile Image */}
                <div className="w-24 h-24 mx-auto lg:mx-0 mb-4 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-2xl font-bold">
                    {currentTestimonial.image}
                  </div>
                </div>

                {/* Client Details */}
                <h4 className="text-xl font-bold text-white mb-1">{currentTestimonial.name}</h4>
                <p className="text-pink-400 font-semibold mb-1">{currentTestimonial.position}</p>
                <p className="text-gray-400 text-sm mb-2">{currentTestimonial.company}</p>
                <p className="text-gray-500 text-xs mb-4">{currentTestimonial.industry}</p>

                {/* Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* LinkedIn Link */}
                <a href={currentTestimonial.linkedinUrl} className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors duration-200">
                  <Linkedin className="h-4 w-4" />
                  <span className="text-sm">Connect on LinkedIn</span>
                </a>
              </div>

              {/* Center - Testimonial */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <p className="text-gray-300 text-lg leading-relaxed italic">
                    "{currentTestimonial.testimonial}"
                  </p>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Project Type</div>
                    <div className="text-white font-semibold">{currentTestimonial.projectType}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Duration</div>
                    <div className="text-white font-semibold">{currentTestimonial.duration}</div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(currentTestimonial.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-xl font-bold text-pink-400 mb-1">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 border border-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 border border-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Slide Indicators & Controls */}
        <div className="flex items-center justify-center gap-8 mt-12">
          {/* Autoplay Toggle */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            <span className="text-sm">{isAutoPlay ? 'Pause' : 'Play'}</span>
          </button>

          {/* Slide Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-gray-400 text-sm">
            {currentSlide + 1} / {testimonials.length}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
              
              <div>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              
              <div>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-sm text-gray-400">Industries Served</div>
              </div>
              
              <div>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join These Successful Organizations
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Ready to transform your HR strategy and achieve similar results? Let's start the conversation.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200">
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;