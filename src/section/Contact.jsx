import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle, Linkedin, Github, Twitter, MessageSquare, Clock, Globe, User, Building, Briefcase } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    serviceType: '',
    message: '',
    preferredContact: 'email',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    'Talent Acquisition Strategy',
    'Organizational Development',
    'HR Digital Transformation',
    'Culture & Change Management',
    'Performance Management',
    'HR Analytics & Metrics',
    'Compliance & Policy Development',
    'Leadership Development',
    'General HR Consulting'
  ];

  const budgetRanges = [
    'Under $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K+',
    'Let\'s Discuss'
  ];

  const timelineOptions = [
    'Immediate (< 1 month)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Ongoing Partnership'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        position: '',
        serviceType: '',
        message: '',
        preferredContact: 'email',
        budget: '',
        timeline: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Start a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Conversation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your HR strategy? I'm here to help you build a thriving, 
            people-centered organization. Let's discuss your goals and challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Contact Info & Quick Actions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-pink-400" />
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white font-semibold">swati.patil@hrpro.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Phone</div>
                    <div className="text-white font-semibold">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Location</div>
                    <div className="text-white font-semibold">Pune, Maharashtra, India</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Availability</div>
                    <div className="text-white font-semibold">Mon - Fri, 9:00 AM - 6:00 PM IST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3">
                  <Calendar className="h-5 w-5" />
                  Schedule a Call
                </button>
                
                <button className="w-full bg-white/10 text-white p-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20 flex items-center justify-center gap-3">
                  <Globe className="h-5 w-5" />
                  Book Virtual Meeting
                </button>
                
                <button className="w-full bg-white/10 text-white p-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20 flex items-center justify-center gap-3">
                  <MessageSquare className="h-5 w-5" />
                  WhatsApp Chat
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Connect on Social</h3>
              
              <div className="grid grid-cols-3 gap-4">
                <a href="#" className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all duration-200 text-center group">
                  <Linkedin className="h-6 w-6 text-white mx-auto mb-2 group-hover:text-pink-400" />
                  <div className="text-xs text-gray-400">LinkedIn</div>
                </a>
                
                <a href="#" className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all duration-200 text-center group">
                  <Twitter className="h-6 w-6 text-white mx-auto mb-2 group-hover:text-pink-400" />
                  <div className="text-xs text-gray-400">Twitter</div>
                </a>
                
                <a href="#" className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all duration-200 text-center group">
                  <Github className="h-6 w-6 text-white mx-auto mb-2 group-hover:text-pink-400" />
                  <div className="text-xs text-gray-400">Portfolio</div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Send className="h-6 w-6 text-pink-400" />
                Send a Message
              </h3>
              
              {!isSubmitted ? (
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Your Position
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder="CEO, HR Director, etc."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service & Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Service Needed
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      >
                        <option value="" className="bg-gray-800">Select a service</option>
                        {serviceTypes.map((service, index) => (
                          <option key={index} value={service} className="bg-gray-800">{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      >
                        <option value="" className="bg-gray-800">Select timeline</option>
                        {timelineOptions.map((timeline, index) => (
                          <option key={index} value={timeline} className="bg-gray-800">{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget & Preferred Contact */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      >
                        <option value="" className="bg-gray-800">Select budget range</option>
                        {budgetRanges.map((budget, index) => (
                          <option key={index} value={budget} className="bg-gray-800">{budget}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex gap-4 mt-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleInputChange}
                            className="text-pink-500 focus:ring-pink-500"
                          />
                          <span className="ml-2 text-gray-300">Email</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleInputChange}
                            className="text-pink-500 focus:ring-pink-500"
                          />
                          <span className="ml-2 text-gray-300">Phone</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Project Details & Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                      placeholder="Tell me about your HR challenges, goals, and how I can help your organization..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for reaching out. I'll review your message and get back to you within 24 hours.
                  </p>
                  <div className="bg-white/10 rounded-xl p-4 inline-block">
                    <p className="text-sm text-gray-400">
                      Expected response time: <span className="text-white font-semibold">Within 24 hours</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-400 mb-4">
            Ready to transform your organization's human resources strategy?
          </p>
          <p className="text-white font-semibold text-lg mb-6">
            Let's build something extraordinary together.
          </p>
          <div className="text-sm text-gray-500">
            © 2025 Swati Patil - HR Professional. All rights reserved.
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

export default Contact;