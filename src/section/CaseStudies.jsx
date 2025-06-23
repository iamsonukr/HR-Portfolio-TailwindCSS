import React, { useState } from 'react';
import { ChevronRight, Users, TrendingUp, Clock, Award, Target, Building, ArrowRight, CheckCircle } from 'lucide-react';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Global Talent Acquisition Transformation",
      company: "TechCorp International",
      industry: "Technology",
      challenge: "Reduce hiring time by 50% while improving candidate quality for a rapidly scaling startup",
      solution: "Implemented AI-driven screening, restructured interview processes, and created talent pipeline programs",
      results: [
        { metric: "Hiring Time Reduced", value: "65%", icon: Clock },
        { metric: "Quality Score Improved", value: "40%", icon: TrendingUp },
        { metric: "Cost Per Hire Decreased", value: "35%", icon: Target },
        { metric: "Employee Retention", value: "92%", icon: Users }
      ],
      impact: "Enabled company to scale from 50 to 200 employees in 18 months while maintaining culture",
      duration: "8 months",
      teamSize: "12 people",
      budget: "$150K",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Cultural Transformation Initiative",
      company: "MegaManufacturing Ltd",
      industry: "Manufacturing",
      challenge: "Transform traditional hierarchical culture to agile, employee-centric organization",
      solution: "Designed comprehensive change management program with leadership development and employee engagement strategies",
      results: [
        { metric: "Employee Satisfaction", value: "85%", icon: Users },
        { metric: "Productivity Increase", value: "28%", icon: TrendingUp },
        { metric: "Turnover Reduction", value: "45%", icon: Target },
        { metric: "Innovation Projects", value: "300%", icon: Award }
      ],
      impact: "Transformed company culture leading to industry recognition as 'Best Place to Work'",
      duration: "12 months",
      teamSize: "25 people",
      budget: "$300K",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Digital HR Transformation",
      company: "FinanceForward Bank",
      industry: "Financial Services",
      challenge: "Modernize HR operations and implement data-driven decision making across all HR functions",
      solution: "Led complete HRIS implementation, automated workflows, and established HR analytics dashboard",
      results: [
        { metric: "Process Efficiency", value: "70%", icon: TrendingUp },
        { metric: "Data Accuracy", value: "99%", icon: CheckCircle },
        { metric: "Employee Self-Service", value: "95%", icon: Users },
        { metric: "Cost Savings", value: "$500K", icon: Target }
      ],
      impact: "Established HR as strategic business partner with real-time insights and predictive analytics",
      duration: "10 months",
      teamSize: "18 people",
      budget: "$400K",
      color: "from-green-500 to-teal-500"
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Success Stories &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Case Studies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real transformations, measurable results. Discover how strategic HR initiatives 
            have driven organizational success across industries.
          </p>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCase === index
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {study.company}
            </button>
          ))}
        </div>

        {/* Main Case Study Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Case Details */}
          <div className="space-y-8">
            {/* Header Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${currentCase.color} flex items-center justify-center`}>
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentCase.title}</h3>
                  <p className="text-pink-400 font-semibold">{currentCase.company}</p>
                  <p className="text-gray-400 text-sm">{currentCase.industry}</p>
                </div>
              </div>
              
              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/5 rounded-xl">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{currentCase.duration}</div>
                  <div className="text-xs text-gray-400">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{currentCase.teamSize}</div>
                  <div className="text-xs text-gray-400">Team Size</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{currentCase.budget}</div>
                  <div className="text-xs text-gray-400">Budget</div>
                </div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold text-pink-400 mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Challenge
                </h4>
                <p className="text-gray-300 leading-relaxed">{currentCase.challenge}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Solution
                </h4>
                <p className="text-gray-300 leading-relaxed">{currentCase.solution}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Results & Impact */}
          <div className="space-y-8">
            {/* Results Grid */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-pink-400" />
                Key Results
              </h4>
              
              <div className="grid grid-cols-2 gap-6">
                {currentCase.results.map((result, index) => {
                  const IconComponent = result.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${currentCase.color} flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                      <div className="text-sm text-gray-400">{result.metric}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Impact Statement */}
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-pink-400" />
                Business Impact
              </h4>
              <p className="text-gray-300 leading-relaxed text-lg">{currentCase.impact}</p>
              
              <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                View Detailed Case Study
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Let's discuss how strategic HR initiatives can drive similar results for your company.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2 mx-auto">
              Schedule a Consultation
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;