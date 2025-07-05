import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, TrendingUp, Award, Building, ChevronDown, ChevronUp, ExternalLink, Star } from 'lucide-react';

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeFilter, setActiveFilter] = useState('all');

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

  const experiences = [
    {
      id: 1,
      title: "Senior Director of People Operations",
      company: "TechForward Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "leadership",
      logo: "TF",
      description: "Leading comprehensive people strategy for a fast-growing SaaS company with 800+ employees across 15 countries.",
      achievements: [
        "Reduced employee turnover by 40% through strategic retention programs",
        "Implemented global diversity initiative increasing representation by 65%",
        "Led digital transformation of HR processes, improving efficiency by 50%",
        "Established remote work policies supporting 70% distributed workforce"
      ],
      skills: ["Strategic Planning", "Global HR", "Change Management", "Executive Leadership"],
      metrics: {
        teamSize: "25 people",
        budget: "$2.5M",
        impact: "40% ↓ turnover"
      }
    },
    {
      id: 2,
      title: "HR Business Partner",
      company: "InnovateCorp",
      location: "New York, NY",
      duration: "2019 - 2022",
      type: "strategic",
      logo: "IC",
      description: "Partnered with C-suite executives to align HR initiatives with business objectives across multiple business units.",
      achievements: [
        "Designed and launched leadership development program for 150+ managers",
        "Orchestrated successful acquisition integration of 200+ employees",
        "Implemented performance management system increasing engagement by 35%",
        "Led compensation restructuring project saving $1.2M annually"
      ],
      skills: ["Business Partnership", "M&A Integration", "Performance Management", "Compensation"],
      metrics: {
        teamSize: "8 people",
        budget: "$1.8M",
        impact: "35% ↑ engagement"
      }
    },
    {
      id: 3,
      title: "Talent Acquisition Manager",
      company: "GrowthStart Ventures",
      location: "Austin, TX",
      duration: "2017 - 2019",
      type: "recruitment",
      logo: "GS",
      description: "Built and scaled talent acquisition function for high-growth startup environment, managing full-cycle recruiting.",
      achievements: [
        "Hired 180+ employees across technical and non-technical roles",
        "Reduced time-to-hire by 45% through process optimization",
        "Established university partnerships for early career pipeline",
        "Achieved 92% offer acceptance rate through candidate experience focus"
      ],
      skills: ["Full-cycle Recruiting", "Employer Branding", "Candidate Experience", "Analytics"],
      metrics: {
        teamSize: "5 people",
        budget: "$800K",
        impact: "45% ↓ time-to-hire"
      }
    },
    {
      id: 4,
      title: "HR Generalist",
      company: "Reliable Manufacturing Co.",
      location: "Chicago, IL",
      duration: "2015 - 2017",
      type: "generalist",
      logo: "RM",
      description: "Managed comprehensive HR functions including employee relations, compliance, and organizational development.",
      achievements: [
        "Implemented HRIS system streamlining processes for 300+ employees",
        "Developed employee handbook and compliance training programs",
        "Reduced workers' compensation claims by 30% through safety initiatives",
        "Established employee recognition program boosting morale scores by 25%"
      ],
      skills: ["Employee Relations", "Compliance", "HRIS", "Safety Management"],
      metrics: {
        teamSize: "3 people",
        budget: "$500K",
        impact: "30% ↓ claims"
      }
    },
    {
      id: 5,
      title: "Recruiter",
      company: "StaffPro Solutions",
      location: "Phoenix, AZ",
      duration: "2012 - 2015",
      type: "recruitment",
      logo: "SP",
      description: "Specialized in technical recruiting for software development and engineering roles across multiple client companies.",
      achievements: [
        "Successfully placed 150+ candidates in permanent roles",
        "Maintained 85% client satisfaction rating across 3 years",
        "Developed sourcing strategies for hard-to-fill technical positions",
        "Built network of 1000+ active candidates in tech industry"
      ],
      skills: ["Technical Recruiting", "Sourcing", "Client Relations", "Networking"],
      metrics: {
        teamSize: "Solo contributor",
        budget: "N/A",
        impact: "150+ placements"
      }
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Experience', count: experiences.length },
    { id: 'leadership', label: 'Leadership', count: experiences.filter(e => e.type === 'leadership').length },
    { id: 'strategic', label: 'Strategic', count: experiences.filter(e => e.type === 'strategic').length },
    { id: 'recruitment', label: 'Recruitment', count: experiences.filter(e => e.type === 'recruitment').length },
    { id: 'generalist', label: 'Generalist', count: experiences.filter(e => e.type === 'generalist').length }
  ];

  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === activeFilter);

  const toggleExpanded = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-slate-100 py-20" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-animate id="experience-header">
          <h2 className={`text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            visibleItems.has('experience-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Journey</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-300 ${
            visibleItems.has('experience-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Over 12 years of progressive experience building people-centered organizations 
            and driving strategic HR initiatives across diverse industries.
          </p>

          {/* Career Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            visibleItems.has('experience-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { number: "12+", label: "Years Experience", icon: Calendar },
              { number: "1000+", label: "Employees Managed", icon: Users },
              { number: "500+", label: "Successful Hires", icon: TrendingUp },
              { number: "15+", label: "Awards & Recognition", icon: Award }
            ].map((stat, index) => (
              <div key={stat.label} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <stat.icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12" data-animate id="experience-filters">
          <div className={`flex flex-wrap justify-center gap-2 transition-all duration-1000 ${
            visibleItems.has('experience-filters') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                }`}
              >
                {filter.label} <span className="ml-1 text-sm opacity-75">({filter.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative" data-animate id="experience-timeline">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 hidden md:block"></div>

          <div className="space-y-8">
            {filteredExperiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative transition-all duration-1000 ${
                  visibleItems.has('experience-timeline') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

                {/* Experience Card */}
                <div className="md:ml-20 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                          {experience.logo}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                          <div className="flex items-center gap-2 text-purple-600 font-medium">
                            <Building className="h-4 w-4" />
                            {experience.company}
                          </div>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="h-4 w-4" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{experience.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {Object.entries(experience.metrics).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                          <div className="text-sm text-gray-500 capitalize mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          <div className="font-semibold text-gray-900">{value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() => toggleExpanded(experience.id)}
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                    >
                      <span>{expandedJob === experience.id ? 'Show Less' : 'View Achievements'}</span>
                      {expandedJob === experience.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {expandedJob === experience.id && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          Key Achievements
                        </h4>
                        <div className="space-y-3">
                          {experience.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Progression Visualization */}
        <div className="mt-20" data-animate id="career-progression">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleItems.has('career-progression') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Career Progression</h3>
            <p className="text-lg text-gray-600">Growth trajectory showcasing increasing responsibility and impact</p>
          </div>

          <div className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-300 ${
            visibleItems.has('career-progression') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-500">2012</div>
              <div className="text-sm text-gray-500">Present</div>
            </div>
            
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-purple-200 via-purple-400 to-pink-500 rounded-full"></div>
              <div className="flex justify-between items-center relative">
                {experiences.reverse().map((exp, index) => (
                  <div key={exp.id} className="flex flex-col items-center group cursor-pointer">
                    <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300 group-hover:scale-125 ${
                      index === experiences.length - 1 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600' 
                        : 'bg-gradient-to-r from-purple-400 to-purple-500'
                    }`}></div>
                    <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                        {exp.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;