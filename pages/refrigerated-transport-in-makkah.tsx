import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Layout from '../components/layout/Layout';
import Hero from '../components/common/Hero';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';
import { getMessages } from '../lib/getMessages';

export default function RefrigeratedTransportInMakkah() {
  const common = useTranslations('common');

  // Areas served in Makkah
  const areasServed = [
    { name: 'المنطقة المركزية', description: 'تغطية شاملة للمنطقة المركزية في مكة المكرمة بما يشمل المناطق المحيطة بالحرم المكي الشريف والمناطق الحيوية للحجاج والمعتمرين.' },
    { name: 'العزيزية', description: 'خدمات نقل مبرد متميزة تغطي منطقة العزيزية بالكامل وما حولها، حيث تتمركز الكثير من فنادق الحجاج والمعتمرين.' },
    { name: 'الشوقية', description: 'تغطية متكاملة لمنطقة الشوقية وما جاورها من مناطق سكنية ومراكز تجارية رئيسية.' },
    { name: 'النسيم', description: 'خدمات نقل مبرد للمناطق الشمالية من مكة المكرمة بما في ذلك النسيم وأحياء العمرة والنوارية.' },
    { name: 'الرصيفة', description: 'تغطية شاملة لمنطقة الرصيفة والمناطق المحيطة بها بما في ذلك أحياء البحيرات والأندلس.' },
    { name: 'المشاعر المقدسة', description: 'خدمات متخصصة للنقل المبرد في منطقة المشاعر المقدسة بما فيها منى وعرفات ومزدلفة وخاصة خلال موسم الحج.' }
  ];

  // Service features
  const serviceFeatures = [
    {
      title: 'أسطول حديث 2025',
      description: 'أسطول من أحدث الشاحنات المبردة المجهزة بتقنيات تبريد متطورة موديلات 2025 لنقل البضائع في درجات حرارة مضبوطة.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'تغطية شاملة لمكة المكرمة',
      description: 'شبكة توزيع واسعة تغطي كافة أحياء مكة المكرمة مع خدمات خاصة للمناطق المركزية والمشاعر المقدسة ومناطق إقامة الحجاج والمعتمرين.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'خدمات مميزة لموسم الحج والعمرة',
      description: 'باقات خدمات متكاملة للفنادق والمطاعم ومراكز التموين خلال مواسم الحج والعمرة، مع توفير سيارات بأحجام مختلفة تتناسب مع حجم الطلب وطبيعة المناطق المستهدفة.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'مراقبة درجات الحرارة',
      description: 'أنظمة مراقبة متطورة لدرجات الحرارة في الوقت الفعلي مع إمكانية تتبع الشحنة والاطلاع على تقارير درجات الحرارة. مهم جداً في بيئة مكة المكرمة الصحراوية الحارة.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    }
  ];

  // Transportation solutions for various industries
  const industries = [
    {
      name: 'الفنادق ومراكز الإقامة',
      icon: '🏨',
      products: ['المواد الغذائية للفنادق', 'منتجات الضيافة المبردة', 'وجبات الإعاشة الجماعية', 'المشروبات المبردة'],
      temperature: 'من -18°C إلى +8°C حسب نوع المنتج'
    },
    {
      name: 'المطاعم ومراكز التموين',
      icon: '🍽️',
      products: ['اللحوم الطازجة والمجمدة', 'منتجات الألبان', 'الخضروات والفواكه الطازجة', 'المعجنات المبردة'],
      temperature: 'من -18°C إلى +10°C حسب المنتج'
    },
    {
      name: 'القطاع الصحي',
      icon: '💊',
      products: ['الأدوية الحساسة للحرارة', 'اللقاحات', 'المستحضرات الطبية', 'المواد الحيوية'],
      temperature: 'من +2°C إلى +8°C مع مراقبة دقيقة'
    },
    {
      name: 'الهدايا والتذكارات',
      icon: '🎁',
      products: ['التمور الفاخرة', 'العطور', 'المنتجات الغذائية التقليدية', 'الحلويات المبردة'],
      temperature: 'من +5°C إلى +20°C حسب طبيعة المنتج'
    }
  ];

  // May 2025 updates
  const updates2025 = {
    title: "تحديثات خدمة النقل المبرد في مكة المكرمة - مايو 2025",
    updates: [
      "تعزيز أسطولنا بـ 20 شاحنة مبردة جديدة مخصصة لخدمة المنطقة المركزية حول الحرم المكي الشريف",
      "تطوير أنظمة تتبع وجدولة ذكية تراعي أوقات الصلوات والازدحام في الحرم والمشاعر المقدسة",
      "إطلاق خدمة خاصة لموسم الحج 1446هـ مع مسارات مخصصة للمشاعر المقدسة وتغطية على مدار الساعة",
      "تحديث منظومة التبريد في جميع الشاحنات لتتناسب مع درجات الحرارة المرتفعة في مكة المكرمة خلال فصل الصيف"
    ]
  };

  // Client testimonials
  const testimonials = [
    {
      name: "فهد القرشي",
      position: "مدير سلسلة فنادق بمكة المكرمة",
      testimonial: "تعاملنا مع نبع الخليج للنقل المبرد يضمن لنا استلام المواد الغذائية ومستلزمات الضيافة بجودة عالية وفي الوقت المحدد. خدماتهم خلال مواسم الحج والعمرة استثنائية رغم التحديات الكبيرة.",
      rating: 5
    },
    {
      name: "نورة الزهراني",
      position: "مديرة التموين - مستشفى خاص",
      testimonial: "نقل الأدوية والمستلزمات الطبية يحتاج لدقة عالية في التحكم بدرجات الحرارة، وهذا ما توفره لنا خدمات نبع الخليج. التقارير الدقيقة لدرجات الحرارة تساعدنا في توثيق سلسلة التبريد.",
      rating: 5
    },
    {
      name: "سعد المالكي",
      position: "صاحب سلسلة مطاعم في العزيزية",
      testimonial: "النقل المبرد مع نبع الخليج ساعدنا في توسعة نطاق خدماتنا خلال المواسم المزدحمة. نعتمد عليهم في نقل المواد الغذائية الطازجة لجميع فروعنا بدقة متناهية وبجدولة تناسب احتياجاتنا.",
      rating: 4
    }
  ];

  return (
    <Layout>
      <Seo 
        pageTitle="خدمات النقل المبرد في مكة المكرمة | تحديث مايو 2025" 
        description="خدمات نقل مبرد احترافية في جميع أنحاء مكة المكرمة بأحدث أسطول شاحنات 2025. حلول متخصصة للفنادق والمطاعم مع خدمات مميزة خلال مواسم الحج والعمرة."
      />

      {/* Hero Section */}
      <Hero
        title="خدمات النقل المبرد في مكة المكرمة | تحديث 2025"
        description="خدمات نقل مبرد احترافية تغطي كافة مناطق مكة المكرمة بأسطول حديث وفريق متخصص يضمن وصول منتجاتك بأعلى معايير الجودة"
        imageSrc="/images/more/refrigerated-transport-in-makkah.png"
        imageAlt="خدمات النقل المبرد في مكة المكرمة - نبع الخليج"
        primaryButtonText={common('buttons.callNow')}
        primaryButtonHref="tel:+966561475554"
        secondaryButtonText={common('buttons.whatsapp')}
        secondaryButtonHref="https://wa.me/+966561475554"
      />

      {/* May 2025 Updates */}
      <section className="py-10 bg-primary-navy/5">
        <div className="container">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-cyan/20 text-primary-cyan flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-primary-navy">{updates2025.title}</h2>
              </div>
            </div>
            
            <ul className="space-y-2 mt-4">
              {updates2025.updates.map((update, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-5 h-5 text-primary-cyan mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{update}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-3">مميزات الخدمة 2025</span>
            <h2 className="text-3xl font-bold text-primary-navy">مميزات خدمة النقل المبرد في مكة المكرمة</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">نقدم لكم خدمات نقل مبرد بأعلى معايير الجودة والكفاءة، مع التركيز على سلامة منتجاتكم وضمان وصولها في الوقت المحدد</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-navy mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-3">تغطية شاملة</span>
            <h2 className="text-3xl font-bold text-primary-navy">المناطق المخدومة في مكة المكرمة</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">نغطي جميع مناطق مكة المكرمة بخدمات نقل مبرد متميزة مع تركيز خاص على المنطقة المركزية والمشاعر المقدسة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasServed.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-primary-navy mb-3">{area.name}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              variant="primary"
              onClick={() => window.location.href = 'https://wa.me/+966561475554'}
            >
              استفسر عن التغطية في منطقتك
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-3">حلول متخصصة</span>
            <h2 className="text-3xl font-bold text-primary-navy">حلول نقل مبرد لمختلف القطاعات</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">خدمات مخصصة تلبي احتياجات مختلف القطاعات في مكة المكرمة مع تركيز خاص على قطاع الضيافة والفنادق</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md overflow-hidden">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-navy/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-2xl">{industry.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy">{industry.name}</h3>
                </div>
                
                <div className="mb-4">
                  <div className="font-medium text-gray-700 mb-2">المنتجات:</div>
                  <div className="flex flex-wrap gap-2">
                    {industry.products.map((product, idx) => (
                      <span key={idx} className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">{product}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="font-medium text-gray-700 mb-2">نطاق درجات الحرارة:</div>
                  <p className="text-primary-cyan font-medium">{industry.temperature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-3">آراء العملاء</span>
            <h2 className="text-3xl font-bold text-primary-navy">ماذا يقول عملاؤنا في مكة المكرمة</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">نفخر بثقة عملائنا في خدماتنا ونلتزم دائماً بتجاوز توقعاتهم</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md relative">
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-primary-cyan/20 text-6xl font-serif">❝</div>
                
                <div className="relative">
                  <p className="text-gray-600 mb-6 italic">{testimonial.testimonial}</p>
                  
                  <div>
                    <div className="text-primary-navy font-bold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm mb-3">{testimonial.position}</div>
                    
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg 
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">نحن جاهزون لخدمتكم في مكة المكرمة</h2>
          <p className="max-w-2xl mx-auto mb-8">تواصل معنا اليوم لمعرفة المزيد عن خدمات النقل المبرد في مكة المكرمة وللحصول على عروض خاصة لموسم الحج والعمرة</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = 'tel:+966561475554'}
            >
              اتصل بنا الآن
            </Button>
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={() => window.location.href = 'https://wa.me/+966561475554'}
            >
              تواصل عبر واتساب
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'ar' }) => {
  const messages = await getMessages(locale, ['common']);

  return {
    props: {
      messages
    }
  };
}; 