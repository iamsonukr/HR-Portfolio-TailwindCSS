import React, { useState, useEffect } from 'react';
import { 
  Users, Search, TrendingUp, Shield, BookOpen, Zap, 
  ChevronRight, Star, Clock, DollarSign, CheckCircle, 
  ArrowRight, PlayCircle, Calendar, MessageSquare, 
  Target, Award, Brain, Globe 
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [selectedPackage, setSelectedPackage] = useState('comprehensive');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'talent-acquisition',
      title: 'Talent Acquisition & Recruitment',
      icon: Search,
      description: 'End-to-end recruitment solutions from strategy to onboarding',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Full-cycle recruiting for all roles',
        'Employer branding & candidate experience',
        'Interview training & assessment design',
        'Recruitment metrics & analytics',
        'Diverse hiring strategies',
        'Campus recruiting programs'
      ],
      results: '92% offer acceptance rate, 45% faster time-to-hire',
      caseStudy: 'Reduced hiring costs by 30% while improving quality of hires',
      pricing: 'Starting at $5,000/month'
    },
    {
      id: 'organizational-development',
      title: 'Organizational Development',
      icon: TrendingUp,
      description: 'Strategic initiatives to enhance organizational effectiveness',
      color: 'from-purple-500 to-indigo-500',
      features: [
        'Change management & transformation',
        'Leadership development programs',
        'Team effectiveness & collaboration',
        'Culture assessment & development',
        'Succession planning',
        'Performance management systems'
      ],
      results: '40% improvement in employee engagement scores',
      caseStudy: 'Led successful merger integration for 500+ employees',
      pricing: 'Starting at $8,000/month'
    },
    {
      id: 'employee-relations',
      title: 'Employee Relations & Engagement',
      icon: Users,
      description: 'Building positive workplace relationships and culture',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Employee engagement surveys & action plans',
        'Conflict resolution & mediation',
        'Employee recognition programs',
        'Workplace investigation services',
        'Policy development & implementation',
        'Exit interview analysis'
      ],
      results: '35% reduction in employee turnover',
      caseStudy: 'Increased engagement scores from 3.2 to 4.6/5.0',
      pricing: 'Starting at $4,000/month'
    },
    {
      id: 'compliance-risk',
      title: 'HR Compliance & Risk Management',
      icon: Shield,
      description: 'Ensuring legal compliance and minimizing HR-related risks',
      color: 'from-red-500 to-pink-500',
      features: [
        'Employment law compliance audits',
        'Policy & handbook development',
        'Training on legal requirements',
        'Documentation & record keeping',
        'Harassment prevention programs',
        'Workers compensation management'
      ],
      results: 'Zero compliance violations in 3 years',
      caseStudy: 'Reduced legal costs by 60% through proactive compliance',
      pricing: 'Starting at $3,500/month'
    },
    {
      id: 'learning-development',
      title: 'Learning & Development',
      icon: BookOpen,
      description: 'Comprehensive training and professional development solutions',
      color: 'from-amber-500 to-orange-500',
      features: [
        'Custom training program design',
        'Leadership development workshops',
        'Skills assessment & gap analysis',
        'E-learning platform implementation',
        'Mentorship program setup',
        'Career development planning'
      ],
      results: '85% skill improvement in trained employees',
      caseStudy: 'Developed leadership pipeline reducing external hiring by 40%',
      pricing: 'Starting at $6,000/month'
    },
    {
      id: 'hr-technology',
      title: 'HR Technology & Analytics',
      icon: Zap,
      description: 'Digital transformation and data-driven HR solutions',
      color: 'from-violet-500 to-purple-500',
      features: [
        'HRIS selection & implementation',
        'HR analytics & reporting dashboards',
        'Workflow automation',
        'Employee self-service portals',
        'Payroll system integration',
        'Data privacy & security compliance'
      ],
      results: '50% reduction in HR administrative tasks',
      caseStudy: 'Implemented HRIS saving $200K annually in processing costs',
      pricing: 'Starting at $7,500/month'
    }
  ];

  const servicePackages = [
    {
      id: 'startup',
      title: 'Startup Essentials',
      subtitle: 'Perfect for growing companies',
      price: '$2,500',
      period: '/month',
      popular: false,
      features: [
        'Basic recruitment support',
        'Employee handbook creation',
        'Compliance consultation',
        'Monthly HR check-ins',
        'Email support'
      ],
      highlight: 'Great for 10-50 employees'
    },
    {
      id: 'comprehensive',
      title: 'Comprehensive HR',
      subtitle: 'Full-service HR partnership',
      price: '$8,500',
      period: '/month',
      popular: true,
      features: [
        'All recruitment services',
        'Complete organizational development',
        'Employee engagement programs',
        'Full compliance management',
        'Learning & development',
        'HR analytics & reporting',
        'Dedicated HR consultant',
        '24/7 priority support'
      ],
      highlight: 'Best for 100-500 employees'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      subtitle: 'Strategic HR transformation',
      price: 'Custom',
      period: 'pricing',
      popular: false,
      features: [
        'Complete HR transformation',
        'Multi-location support',
        'Custom technology solutions',
        'Executive coaching',
        'Advanced analytics',
        'Change management',
        'Global compliance',
        'Dedicated team assigned'
      ],
      highlight: 'Ideal for 500+ employees'
    }
  ];

  const specializations = [
    {
      icon: Globe,
      title: 'Global HR',
      description: 'Multi-country HR operations and compliance'
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      description: 'Leveraging technology for HR efficiency'
    },
    {
      icon: Target,
      title: 'Startup Scaling',
      description: 'Rapid growth HR infrastructure'
    },
    {
      icon: Award,
      title: 'Culture Transformation',
      description: 'Building high-performance cultures'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-animate id="services-header">
          <h2 className={`text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            visibleItems.has('services-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Expertise</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            visibleItems.has('services-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Comprehensive HR solutions tailored to your organization's unique needs and growth stage.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" data-animate id="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group ${
                visibleItems.has('services-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              {/* Service Header */}
              <div className="p-6 pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {/* Key Result */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">Key Result</span>
                  </div>
                  <p className="text-sm text-gray-600">{service.results}</p>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-purple-600">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-semibold">{service.pricing}</span>
                  </div>
                  <button className="flex items-center gap-1 text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
                    <span className="text-sm">Learn More</span>
                    <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${activeService === service.id ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              {activeService === service.id && (
                <div className="px-6 pb-6 border-t border-gray-100 animate-fade-in">
                  <div className="pt-4 space-y-4">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Case Study */}
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h5 className="font-medium text-purple-900 mb-2">Success Story:</h5>
                      <p className="text-sm text-purple-700">{service.caseStudy}</p>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Book Consultation
                      </button>
                      <button className="px-4 py-2 border border-purple-200 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-200 flex items-center gap-2">
                        <PlayCircle className="h-4 w-4" />
                        View Demo
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Service Packages */}
        <div className="mb-20" data-animate id="service-packages">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleItems.has('service-packages') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Service Packages</h3>
            <p className="text-lg text-gray-600">Choose the right level of HR support for your organization</p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            visibleItems.has('service-packages') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {servicePackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-1 rounded-b-lg text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h4>
                    <p className="text-gray-600 mb-4">{pkg.subtitle}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-gray-500">{pkg.period}</span>
                    </div>
                    <p className="text-sm text-purple-600 font-medium mt-2">{pkg.highlight}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                      : 'border-2 border-purple-200 text-purple-600 hover:bg-purple-50'
                  }`}>
                    {pkg.price === 'Custom' ? 'Contact for Quote' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-20" data-animate id="specializations">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleItems.has('specializations') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Areas of Specialization</h3>
            <p className="text-lg text-gray-600">Unique expertise that sets me apart</p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
            visibleItems.has('specializations') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {specializations.map((spec, index) => (
              <div
                key={spec.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <spec.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{spec.title}</h4>
                <p className="text-gray-600 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" data-animate id="services-cta">
          <div className={`bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white transition-all duration-1000 ${
            visibleItems.has('services-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your HR?</h3>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Let's discuss how I can help you build a people-centered organization that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2">
                <Clock className="h-5 w-5" />
                View Pricing Guide
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Services;