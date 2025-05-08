import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Layout from '../components/layout/Layout';
import Hero from '../components/common/Hero';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';
import { getMessages } from '../lib/getMessages';

export default function RefrigeratedTransportInMadinah() {
  const common = useTranslations('common');

  // Areas served in Madinah
  const areasServed = [
    { name: 'المنطقة المركزية', description: 'تغطية شاملة للمنطقة المركزية بالمدينة المنورة بما يشمل المنطقة المحيطة بالحرم النبوي الشريف ومناطق الزوار الرئيسية.' },
    { name: 'شرق المدينة', description: 'خدمات نقل مبرد متميزة تغطي مناطق شرق المدينة المنورة بما في ذلك حي القبلتين، الجامعات، والمنطقة الصناعية الشرقية.' },
    { name: 'غرب المدينة', description: 'تغطية متكاملة للأحياء الغربية بالمدينة المنورة مثل حي الحراء، حي الروضة، وحي السيح.' },
    { name: 'شمال المدينة', description: 'خدمات نقل مبرد للمناطق الشمالية من المدينة المنورة بما في ذلك حي العريض، حي السلام، وحي الدار.' },
    { name: 'جنوب المدينة', description: 'تغطية شاملة للأحياء الجنوبية مثل العوالي، قربان، وشوران مع خدمة خاصة لمنطقة مسجد قباء وما حولها.' },
    { name: 'المناطق المحيطة', description: 'خدمات نقل مبرد تمتد للمناطق المحيطة بالمدينة المنورة مثل أبيار علي والهجرة والمليلح والعلا.' }
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
      title: 'تغطية شاملة للمدينة المنورة',
      description: 'شبكة توزيع واسعة تغطي كافة أحياء المدينة المنورة بتركيز خاص على المناطق المركزية والحرم النبوي الشريف ومناطق الزوار.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'مراقبة درجات الحرارة',
      description: 'أنظمة مراقبة متطورة لدرجات الحرارة في الوقت الفعلي مع إمكانية تتبع الشحنة والاطلاع على تقارير درجات الحرارة. مهم جداً في بيئة المدينة المنورة الصحراوية الحارة.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'خدمات خاصة لموسم الحج والعمرة',
      description: 'خدمات مخصصة لمواسم الحج والعمرة لتلبية احتياجات الفنادق والمطاعم والمستشفيات من خدمات النقل المبرد خلال المواسم الدينية المزدحمة.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    }
  ];

  // Transportation solutions for various industries
  const industries = [
    {
      name: 'قطاع الفنادق والإسكان',
      icon: '🏨',
      products: ['المواد الغذائية للفنادق', 'مستلزمات الضيافة المبردة', 'وجبات الإعاشة الجماعية', 'المشروبات المبردة'],
      temperature: 'من -18°C إلى +8°C حسب نوع المنتج'
    },
    {
      name: 'المطاعم ومراكز التموين',
      icon: '🍽️',
      products: ['المكونات الغذائية المبردة', 'اللحوم الطازجة والمجمدة', 'منتجات الألبان', 'الحلويات المبردة'],
      temperature: 'من -18°C إلى +10°C حسب المنتج'
    },
    {
      name: 'القطاع الصحي والمستشفيات',
      icon: '🏥',
      products: ['الأدوية الحساسة للحرارة', 'اللقاحات', 'المستحضرات الطبية', 'المواد الحيوية'],
      temperature: 'من +2°C إلى +8°C مع مراقبة دقيقة'
    },
    {
      name: 'محلات التجزئة والأسواق',
      icon: '🛒',
      products: ['المنتجات الغذائية', 'المشروبات المبردة', 'الفواكه والخضروات الطازجة', 'المواد سريعة التلف'],
      temperature: 'من -20°C إلى +15°C حسب طبيعة المنتج'
    }
  ];

  // May 2025 updates
  const updates2025 = {
    title: "تحديثات خدمة النقل المبرد في المدينة المنورة - مايو 2025",
    updates: [
      "إضافة 15 شاحنة مبردة جديدة لأسطولنا في المدينة المنورة مع تقنيات تبريد متطورة تناسب المناخ الصحراوي",
      "استحداث نظام جدولة ذكي للتوصيل في المناطق المركزية حول الحرم النبوي مع مراعاة أوقات الصلوات والازدحام",
      "إطلاق خدمة النقل المبرد الخاصة بموسم الحج 1446هـ مع خطط استباقية للتعامل مع الطلب المتزايد",
      "تطوير مركز لوجستي متكامل يخدم المنطقة المركزية والفنادق المحيطة بالحرم النبوي الشريف"
    ]
  };

  // Client testimonials
  const testimonials = [
    {
      name: "عبدالرحمن الأنصاري",
      position: "مدير سلسلة فنادق بالمدينة المنورة",
      testimonial: "نعتمد على خدمات نبع الخليج للنقل المبرد لتأمين احتياجات فنادقنا من المواد الغذائية والمشروبات المبردة. مستوى الخدمة استثنائي خاصة خلال مواسم الحج والعمرة رغم الازدحام.",
      rating: 5
    },
    {
      name: "فاطمة المدني",
      position: "مديرة التوريدات - مستشفى خاص",
      testimonial: "النقل المبرد للأدوية يتطلب دقة متناهية وهذا ما وجدناه مع نبع الخليج. نظام مراقبة درجات الحرارة يوفر لنا تقارير دقيقة تساعدنا في توثيق سلسلة التبريد وفق معايير الجودة.",
      rating: 5
    },
    {
      name: "خالد العوفي",
      position: "صاحب سلسلة مطاعم بالمدينة المنورة",
      testimonial: "ساعدتنا خدمات نبع الخليج للنقل المبرد في الحفاظ على جودة منتجاتنا الطازجة. الالتزام بالمواعيد والمرونة في التعامل مع الطلبات العاجلة من أهم مميزات تعاملنا معهم.",
      rating: 4
    }
  ];

  return (
    <Layout>
      <Seo 
        pageTitle="خدمات النقل المبرد في المدينة المنورة | تحديث مايو 2025" 
        description="خدمات نقل مبرد احترافية في جميع أنحاء المدينة المنورة بأحدث أسطول شاحنات 2025. حلول متخصصة للفنادق والمطاعم والمستشفيات مع خدمات خاصة لمواسم الحج والعمرة."
      />

      {/* Hero Section */}
      <Hero
        title="خدمات النقل المبرد في المدينة المنورة | تحديث 2025"
        description="خدمات نقل مبرد احترافية تغطي كافة مناطق المدينة المنورة بأسطول حديث وفريق متخصص يضمن وصول منتجاتك بأعلى معايير الجودة"
        imageSrc="/images/more/refrigerated-transport-in-madinah.png"
        imageAlt="خدمات النقل المبرد في المدينة المنورة - نبع الخليج"
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
            <h2 className="text-3xl font-bold text-primary-navy">مميزات خدمة النقل المبرد في المدينة المنورة</h2>
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
            <h2 className="text-3xl font-bold text-primary-navy">المناطق المخدومة في المدينة المنورة</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">نغطي جميع مناطق المدينة المنورة بخدمات نقل مبرد متميزة مع تركيز خاص على المنطقة المركزية والحرم النبوي الشريف</p>
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
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">خدمات مخصصة تلبي احتياجات مختلف القطاعات في المدينة المنورة مع تركيز خاص على خدمة قطاع الضيافة والفنادق</p>
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
            <h2 className="text-3xl font-bold text-primary-navy">ماذا يقول عملاؤنا في المدينة المنورة</h2>
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
          <h2 className="text-3xl font-bold mb-4">نحن جاهزون لخدمتكم في المدينة المنورة</h2>
          <p className="max-w-2xl mx-auto mb-8">تواصل معنا اليوم لمعرفة المزيد عن خدمات النقل المبرد في المدينة المنورة وللحصول على عروض خاصة لمواسم الحج والعمرة</p>
          
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