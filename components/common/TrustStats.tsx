import React from 'react';
import Image from 'next/image';

const TrustStats = () => {
  const features = [
    { 
      title: '15+', 
      subtitle: 'سنوات من الخبرة', 
      color: 'from-amber-400 to-amber-600', 
      bgColor: 'bg-amber-50 border-amber-200', 
      textColor: 'text-amber-500', 
      shadowColor: 'shadow-amber-200/50', 
      icon: 'history' 
    },
    { 
      title: '+4713', 
      subtitle: 'عميل راضٍ خدمناهم', 
      color: 'from-blue-400 to-blue-600', 
      bgColor: 'bg-blue-50 border-blue-200', 
      textColor: 'text-blue-500', 
      shadowColor: 'shadow-blue-200/50', 
      icon: 'users' 
    },
    { 
      title: '+21967', 
      subtitle: 'شحنة ناجحة', 
      color: 'from-green-400 to-green-600', 
      bgColor: 'bg-green-50 border-green-200', 
      textColor: 'text-green-500', 
      shadowColor: 'shadow-green-200/50', 
      icon: 'check-circle' 
    },
    { 
      title: 'متوافق', 
      subtitle: 'مع معايير الجودة العالمية', 
      color: 'from-sky-400 to-sky-600', 
      bgColor: 'bg-sky-50 border-sky-200', 
      textColor: 'text-sky-500', 
      shadowColor: 'shadow-sky-200/50', 
      icon: 'badge-check' 
    },
    { 
      title: 'نغطي', 
      subtitle: 'جميع مناطق المملكة', 
      color: 'from-purple-400 to-purple-600', 
      bgColor: 'bg-purple-50 border-purple-200', 
      textColor: 'text-purple-500', 
      shadowColor: 'shadow-purple-200/50', 
      icon: 'truck' 
    }
  ];

  // Helper function to render the appropriate icon
  const renderIcon = (iconName: string, iconColor: string) => {
    switch (iconName) {
      case 'history':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${iconColor}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${iconColor}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'check-circle':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${iconColor}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'badge-check':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${iconColor}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      case 'truck':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${iconColor}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/70 to-white py-24">
      {/* Background blurred circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-amber-300/20 blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/2 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-blue-300/20 blur-[100px]"></div>
        <div className="absolute -right-20 top-1/3 h-[350px] w-[350px] rounded-full bg-green-300/20 blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 h-[200px] w-[200px] rounded-full bg-purple-300/20 blur-[100px]"></div>
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{ 
          backgroundImage: 'url(/images/grid-pattern.svg)',
          backgroundSize: '30px 30px',
          backgroundRepeat: 'repeat'
        }}>
      </div>

      <div className="relative container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-navy mb-4 leading-relaxed mx-auto tracking-normal">
            موثوق من أكبر الشركات في السعودية
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            نقدم حلولاً لوجستية متكاملة بخبرة وسرعة وتوافق مع أعلى المعايير
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border ${feature.bgColor} max-w-[240px] h-[170px] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl ${feature.shadowColor} backdrop-blur-[20px] hover:scale-105 cursor-pointer`}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 shadow-lg ${feature.shadowColor}`}>
                {renderIcon(feature.icon, "text-white")}
              </div>
              <h3 className={`text-xl font-bold ${feature.textColor}`}>{feature.title}</h3>
              <p className="text-gray-600 text-sm text-center">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats; 