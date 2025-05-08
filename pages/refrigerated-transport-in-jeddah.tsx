import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Layout from '../components/layout/Layout';
import Hero from '../components/common/Hero';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';
import { getMessages } from '../lib/getMessages';

export default function RefrigeratedTransportInJeddah() {
  const common = useTranslations('common');

  // Areas served in Jeddah
  const areasServed = [
    { name: 'وسط جدة', description: 'تغطية شاملة لمنطقة وسط جدة بما يشمل الأسواق المركزية والمناطق التجارية والفنادق.' },
    { name: 'شمال جدة', description: 'خدمات نقل مبرد متميزة في أحياء شمال جدة مثل أبحر الشمالية وذهبان والشاطئ وأحياء المنتجعات الساحلية.' },
    { name: 'جنوب جدة', description: 'تغطية متكاملة لمناطق جنوب جدة بما في ذلك الخمرة والمستودعات اللوجستية والمناطق الصناعية.' },
    { name: 'شرق جدة', description: 'خدمات نقل مبرد متميزة للمناطق الشرقية من جدة مثل النزهة والفيصلية والسليمانية والروضة.' },
    { name: 'ميناء جدة الإسلامي', description: 'خدمات متخصصة للنقل المبرد من وإلى ميناء جدة الإسلامي بالتنسيق مع الجمارك وهيئات الموانئ.' },
    { name: 'مطار الملك عبد العزيز الدولي', description: 'خدمات نقل مبرد للشحنات القادمة والمغادرة عبر مطار الملك عبد العزيز الدولي بجدة.' }
  ];

  // Service features
  const serviceFeatures = [
    {
      title: 'أسطول حديث 2025',
      description: 'أسطول من أحدث الشاحنات المبردة موديلات 2025 مجهزة بتقنيات تبريد متطورة تناسب المناخ الساحلي الرطب في جدة.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'خدمة النقل من الميناء',
      description: 'خدمات متخصصة لنقل البضائع المبردة والمجمدة من ميناء جدة الإسلامي إلى كافة مناطق المملكة بسرعة وكفاءة.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'مراقبة درجات الحرارة',
      description: 'أنظمة مراقبة متطورة لدرجات الحرارة في الوقت الفعلي مع تقنيات مكيفة خصيصاً للتعامل مع الظروف الجوية في جدة.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'توصيل للفنادق والمطاعم',
      description: 'خدمات توصيل متخصصة للمنتجات الغذائية المبردة للفنادق والمطاعم السياحية في جدة، مع مواعيد مرنة تناسب القطاع السياحي.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.5458C18.7695 15.5458 16.9512 13.7344 16.9512 11.5C16.9512 9.27656 18.7695 7.45312 21 7.45312" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7.45312C5.23044 7.45312 7.04877 9.26463 7.04877 11.5C7.04877 13.7344 5.23044 15.5458 3 15.5458" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17C14.2095 17 16 15.2095 16 13C16 10.7905 14.2095 9 12 9C9.79053 9 8 10.7905 8 13C8 15.2095 9.79053 17 12 17Z" />
        </svg>
      ),
    }
  ];

  // Transportation solutions for various industries
  const industries = [
    {
      name: 'قطاع الفنادق والسياحة',
      icon: '🏨',
      products: ['المنتجات الغذائية الطازجة', 'المأكولات البحرية المبردة', 'الحلويات والمعجنات', 'المشروبات المبردة'],
      temperature: 'من -18°C إلى +8°C حسب نوع المنتج'
    },
    {
      name: 'المواد الغذائية المستوردة',
      icon: '🚢',
      products: ['الفواكه والخضروات الطازجة', 'اللحوم المبردة والمجمدة', 'منتجات الألبان', 'الأطعمة المعلبة والمجمدة'],
      temperature: 'من -25°C إلى +10°C حسب المنتج'
    },
    {
      name: 'قطاع المطاعم والكافيهات',
      icon: '🍽️',
      products: ['المكونات الطازجة', 'العصائر والمشروبات', 'المخبوزات والحلويات', 'الوجبات شبه الجاهزة'],
      temperature: 'من -18°C إلى +5°C حسب المنتج'
    },
    {
      name: 'الأدوية والمستلزمات الطبية',
      icon: '💊',
      products: ['الأدوية الحساسة للحرارة', 'اللقاحات', 'العينات المخبرية', 'المستلزمات الطبية المبردة'],
      temperature: 'من +2°C إلى +8°C مع مراقبة دقيقة'
    }
  ];

  // May 2025 updates
  const updates2025 = {
    title: "تحديثات خدمة النقل المبرد في جدة - مايو 2025",
    updates: [
      "إضافة 25 شاحنة مبردة جديدة لتلبية الطلب المتزايد في مدينة جدة مع تقنيات تبريد مخصصة للمناخ الساحلي",
      "افتتاح مركز لوجستي متكامل بالقرب من ميناء جدة الإسلامي لخدمة البضائع المستوردة المبردة",
      "تطوير خدمة توصيل خاصة للفنادق والمنتجعات السياحية على مدار الساعة",
      "إطلاق نظام تتبع متطور للشحنات المبردة مزود بتقنيات الذكاء الاصطناعي لتحسين كفاءة النقل في ظروف جدة المناخية"
    ]
  };

  // Client testimonials
  const testimonials = [
    {
      name: "عبدالعزيز المالكي",
      position: "مدير سلسلة مطاعم بحرية في جدة",
      testimonial: "نتعامل مع نبع الخليج منذ سنوات لنقل المأكولات البحرية الطازجة لمطاعمنا في جدة. جودة الخدمة والالتزام بدرجات الحرارة المناسبة ساهمت في الحفاظ على جودة منتجاتنا.",
      rating: 5
    },
    {
      name: "د. سميرة أحمد",
      position: "مديرة المشتريات - مستشفى خاص في جدة",
      testimonial: "نعتمد على نبع الخليج لنقل الأدوية واللقاحات الحساسة للحرارة. المهنية العالية والدقة في الحفاظ على درجات الحرارة المطلوبة عوامل أساسية لنا في اختيار شريك النقل.",
      rating: 5
    },
    {
      name: "محمد الغامدي",
      position: "مدير التوريدات - فندق خمس نجوم في جدة",
      testimonial: "كفندق فخم، نحتاج لشريك نقل يمكن الاعتماد عليه لتوريد المنتجات الغذائية الطازجة والمبردة. خدمة نبع الخليج المميزة والمواعيد المرنة كانت مثالية لاحتياجاتنا.",
      rating: 4
    }
  ];

  return (
    <Layout>
      <Seo 
        pageTitle="خدمات النقل المبرد في جدة | تحديث مايو 2025" 
        description="خدمات نقل مبرد احترافية في مدينة جدة وضواحيها بأحدث أسطول شاحنات 2025. نقل آمن للأغذية والمنتجات المبردة من ميناء جدة الإسلامي إلى كافة المناطق مع نظام مراقبة متطور لدرجات الحرارة."
      />

      {/* Hero Section */}
      <Hero
        title="خدمات النقل المبرد في جدة | تحديث 2025"
        description="خدمات نقل مبرد احترافية تغطي كافة مناطق جدة بأسطول حديث وفريق متخصص يضمن وصول منتجاتك بأعلى معايير الجودة"
        imageSrc="/images/more/refrigerated-transport-in-jeddah.png"
        imageAlt="خدمات النقل المبرد في جدة - نبع الخليج"
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
            <h2 className="text-3xl font-bold text-primary-navy">مميزات خدمة النقل المبرد في جدة</h2>
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
            <h2 className="text-3xl font-bold text-primary-navy">المناطق المخدومة في جدة</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">نغطي جميع مناطق جدة وضواحيها بخدمات نقل مبرد متميزة</p>
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
            <h2 className="text-3xl font-bold text-primary-navy">حلول نقل مبرد لمختلف الصناعات</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">خدمات مخصصة تلبي احتياجات مختلف القطاعات في جدة مع مراعاة متطلبات كل صناعة</p>
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
            <h2 className="text-3xl font-bold text-primary-navy">ماذا يقول عملاؤنا في جدة</h2>
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
          <h2 className="text-3xl font-bold mb-4">نحن جاهزون لخدمتكم في جدة</h2>
          <p className="max-w-2xl mx-auto mb-8">تواصل معنا اليوم لمعرفة المزيد عن خدمات النقل المبرد في جدة وللحصول على عروض خاصة</p>
          
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