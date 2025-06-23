import React, { useState, useEffect } from 'react';
import { Heart, Target, Users, Award, Zap, Shield, ChevronRight, Play, Pause } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());

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

  const coreValues = [
    {
      icon: Heart,
      title: "People First",
      description: "Every decision I make prioritizes the human element. I believe in creating workplaces where employees feel valued, heard, and empowered to reach their full potential.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Target,
      title: "Strategic Vision",
      description: "I align HR initiatives with business objectives, ensuring that people strategies drive organizational success and sustainable growth.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Inclusive Culture",
      description: "Building diverse, equitable, and inclusive environments where every voice matters and differences are celebrated as strengths.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional HR services through continuous learning, innovation, and staying ahead of industry trends.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Agile Transformation",
      description: "Embracing change and helping organizations adapt quickly to evolving business needs and market demands.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Ethical Leadership",
      description: "Maintaining the highest standards of integrity, confidentiality, and ethical conduct in all HR practices and decisions.",
      color: "from-red-500 to-pink-500"
    }
  ];

  const achievements = [
    { number: "12+", text: "Years Experience", delay: "0ms" },
    { number: "500+", text: "Successful Placements", delay: "200ms" },
    { number: "95%", text: "Employee Retention", delay: "400ms" },
    { number: "50+", text: "Training Programs", delay: "600ms" }
  ];

  const tabs = [
    { id: 'story', label: 'My Story', icon: Heart },
    { id: 'mission', label: 'Mission', icon: Target },
    { id: 'approach', label: 'Approach', icon: Users }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-animate id="about-header">
          <h2 className={`text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            visibleItems.has('about-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Swati</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            visibleItems.has('about-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Passionate about creating meaningful connections between people and organizations, 
            I transform HR challenges into strategic opportunities for growth.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Tabbed Content */}
          <div className="space-y-8" data-animate id="about-content">
            {/* Tab Navigation */}
            <div className={`flex space-x-1 bg-white rounded-2xl p-2 shadow-lg transition-all duration-1000 ${
              visibleItems.has('about-content') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-200 ${
              visibleItems.has('about-content') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              {activeTab === 'story' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey in HR</h3>
                  <p className="text-gray-700 leading-relaxed">
                    My passion for human resources began over a decade ago when I witnessed firsthand 
                    how the right people strategies could transform struggling teams into high-performing 
                    powerhouses. Starting as a junior recruiter, I quickly discovered that HR is much 
                    more than just hiring—it's about creating environments where people thrive.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Throughout my career, I've had the privilege of working with Fortune 500 companies 
                    and innovative startups alike, each teaching me valuable lessons about adaptability, 
                    leadership, and the power of human connection in driving business success.
                  </p>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                    <p className="text-gray-800 font-medium italic">
                      "Every person has unique potential. My role is to help organizations unlock that 
                      potential while creating cultures where everyone can flourish."
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">My Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To revolutionize how organizations approach human capital by creating people-centered 
                    strategies that drive both individual fulfillment and business excellence. I believe 
                    that when employees are engaged, valued, and aligned with company values, 
                    extraordinary results follow naturally.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 rounded-xl p-4">
                      <h4 className="font-semibold text-purple-900 mb-2">For Organizations</h4>
                      <p className="text-sm text-purple-700">
                        Building sustainable competitive advantage through strategic people practices.
                      </p>
                    </div>
                    <div className="bg-pink-50 rounded-xl p-4">
                      <h4 className="font-semibold text-pink-900 mb-2">For Individuals</h4>
                      <p className="text-sm text-pink-700">
                        Empowering career growth and personal development in meaningful work environments.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'approach' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">My Approach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I combine data-driven insights with human-centered design thinking to create 
                    HR solutions that are both strategically sound and emotionally intelligent. 
                    Every initiative begins with understanding the unique culture and challenges 
                    of each organization.
                  </p>
                  <div className="space-y-3">
                    {['Listen & Understand', 'Analyze & Strategize', 'Implement & Iterate', 'Measure & Optimize'].map((step, index) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Video/Image & Stats */}
          <div className="space-y-8" data-animate id="about-visual">
            {/* Video Section */}
            <div className={`relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl transition-all duration-1000 delay-400 ${
              visibleItems.has('about-visual') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative">
                <div className="aspect-video bg-black/20 rounded-xl flex items-center justify-center mb-6">
                  <button
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                  >
                    {isVideoPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                  </button>
                </div>
                <h3 className="text-xl font-bold mb-2">Introduction Video</h3>
                <p className="text-white/90 text-sm">
                  Get to know me better and understand my approach to transforming HR practices.
                </p>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-600 ${
              visibleItems.has('about-visual') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.text}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                  style={{ animationDelay: achievement.delay }}
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{achievement.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20" data-animate id="core-values">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleItems.has('core-values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision I make and every relationship I build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer ${
                  visibleItems.has('core-values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                <div className="mt-4 flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors duration-200">
                  <span className="text-sm">Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;