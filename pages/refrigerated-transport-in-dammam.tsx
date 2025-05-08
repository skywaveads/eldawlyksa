import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Layout from '../components/layout/Layout';
import Hero from '../components/common/Hero';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';
import { getMessages } from '../lib/getMessages';

export default function RefrigeratedTransportInDammam() {
  const common = useTranslations('common');

  // Areas served in Dammam
  const areasServed = [
    { name: 'وسط الدمام', description: 'تغطية شاملة لمنطقة وسط الدمام والمناطق التجارية الرئيسية وميناء الدمام.' },
    { name: 'حي الشاطئ', description: 'خدمات نقل مبرد متميزة لحي الشاطئ وكورنيش الدمام والمناطق السياحية.' },
    { name: 'حي الفيصلية', description: 'تغطية متكاملة لمنطقة الفيصلية والأحياء المجاورة بأسطول نقل مبرد متطور.' },
    { name: 'المنطقة الصناعية الأولى', description: 'خدمات نقل متخصصة للمنطقة الصناعية الأولى بالدمام لخدمة المصانع والمستودعات الكبرى.' },
    { name: 'المنطقة الصناعية الثانية', description: 'تغطية شاملة للمنطقة الصناعية الثانية بالدمام مع حلول لوجستية متكاملة للشركات والمصانع.' },
    { name: 'ميناء الملك عبد العزيز', description: 'خدمات متخصصة لنقل البضائع المبردة من وإلى ميناء الملك عبد العزيز بالدمام بأعلى معايير الجودة والأمان.' }
  ];

  // Service features
  const serviceFeatures = [
    {
      title: 'أسطول حديث 2025',
      description: 'أسطول من أحدث الشاحنات المبردة المجهزة بتقنيات تبريد متطورة موديلات 2025 مناسبة للأجواء الساحلية الرطبة في الدمام.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'تغطية شاملة للدمام',
      description: 'شبكة توزيع واسعة تغطي كافة أحياء الدمام والمناطق الصناعية مع خدمات توصيل سريعة للمناطق الحيوية.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'مراقبة درجات الحرارة',
      description: 'أنظمة مراقبة متطورة لدرجات الحرارة في الوقت الفعلي مع تقنيات مكيفة خصيصاً للتعامل مع رطوبة الدمام العالية والحفاظ على جودة المنتجات.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'خدمات الموانئ والتصدير',
      description: 'خدمات متخصصة لنقل البضائع المبردة من وإلى ميناء الدمام بالتنسيق مع خطوط الشحن البحري وشركات التخليص الجمركي.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    }
  ];

  // Transportation solutions for various industries
  const industries = [
    {
      name: 'قطاع المأكولات البحرية',
      icon: '🐟',
      products: ['الأسماك الطازجة', 'المأكولات البحرية المجمدة', 'الروبيان', 'منتجات السمك المصنعة'],
      temperature: 'من -21°C إلى +2°C حسب نوع المنتج'
    },
    {
      name: 'قطاع البتروكيماويات',
      icon: '⚗️',
      products: ['المواد الكيميائية الحساسة للحرارة', 'العينات المخبرية', 'المنتجات البترولية الخاصة', 'المواد الحفازة'],
      temperature: 'من +2°C إلى +15°C حسب المواصفات الفنية'
    },
    {
      name: 'الأدوية والمستلزمات الطبية',
      icon: '💊',
      products: ['الأدوية الحساسة للحرارة', 'اللقاحات', 'المستحضرات الحيوية', 'العينات الطبية'],
      temperature: 'من +2°C إلى +8°C مع مراقبة دقيقة'
    },
    {
      name: 'منتجات التصدير',
      icon: '🚢',
      products: ['المنتجات الغذائية المصدرة', 'منتجات الألبان السعودية', 'الأغذية المصنعة', 'المنتجات الطازجة للتصدير'],
      temperature: 'من -20°C إلى +10°C حسب متطلبات المنتج ومعايير التصدير'
    }
  ];

  // May 2025 updates
  const updates2025 = {
    title: "تحديثات خدمة النقل المبرد في الدمام - مايو 2025",
    updates: [
      "توسيع أسطولنا البحري المبرد لخدمة منطقة الخليج بإضافة 15 شاحنة مبردة متخصصة جديدة",
      "افتتاح مركز لوجستي متكامل قرب ميناء الملك عبد العزيز للتعامل مع البضائع المبردة الواردة والصادرة",
      "إطلاق خدمة النقل المبرد السريع بين الدمام والبحرين بزمن توصيل لا يتجاوز 3 ساعات",
      "تطوير أنظمة تتبع الشحنات المبردة لتعمل عبر الحدود مع دول الخليج المجاورة وربطها بمنصة الجمارك الموحدة"
    ]
  };

  // Client testimonials
  const testimonials = [
    {
      name: "فيصل الحربي",
      position: "مدير شركة استيراد وتصدير أغذية في الدمام",
      testimonial: "التعامل مع نبع الخليج للنقل المبرد قدم لنا حلولاً متكاملة لنقل منتجاتنا المبردة من وإلى ميناء الدمام مع ضمان الحفاظ على جودة المنتجات وسلامتها.",
      rating: 5
    },
    {
      name: "نورة الدوسري",
      position: "مديرة مستودعات شركة أدوية في المنطقة الشرقية",
      testimonial: "نستفيد من خدمات نبع الخليج لنقل الأدوية والمنتجات الطبية الحساسة للحرارة. المهنية العالية والدقة في مراقبة درجات الحرارة ميزتان أساسيتان لنا.",
      rating: 5
    },
    {
      name: "عبدالله العمري",
      position: "مالك سلسلة مطاعم مأكولات بحرية في الدمام",
      testimonial: "أسطول نبع الخليج المبرد متخصص في نقل المأكولات البحرية بكفاءة عالية. نعتمد عليهم بشكل يومي لتوريد الأسماك الطازجة لجميع فروعنا في المنطقة الشرقية.",
      rating: 4
    }
  ];

  return (
    <Layout>
      <Seo 
        pageTitle="خدمات النقل المبرد في الدمام | تحديث مايو 2025" 
        description="خدمات نقل مبرد احترافية في جميع أنحاء الدمام والمنطقة الشرقية بأحدث أسطول شاحنات 2025. حلول متخصصة لنقل المأكولات البحرية والمنتجات الحساسة للحرارة من وإلى ميناء الدمام."
      />

      {/* Hero Section */}
      <Hero
        title="خدمات النقل المبرد في الدمام | تحديث 2025"
        description="خدمات نقل مبرد احترافية تغطي كافة مناطق الدمام والمنطقة الشرقية بأسطول حديث وفريق متخصص يضمن وصول منتجاتك بأعلى معايير الجودة"
        imageSrc="/images/more/refrigerated-transport-in-dammam.png"
        imageAlt="خدمات النقل المبرد في الدمام - نبع الخليج"
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
            <h2 className="text-3xl font-bold text-primary-navy">مميزات خدمة النقل المبرد في الدمام</h2>
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
            <h2 className="text-3xl font-bold text-primary-navy">المناطق المخدومة في الدمام</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">نغطي جميع مناطق الدمام والمناطق الصناعية بخدمات نقل مبرد متميزة</p>
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
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">خدمات مخصصة تلبي احتياجات مختلف القطاعات مع مراعاة متطلبات كل صناعة</p>
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
            <h2 className="text-3xl font-bold text-primary-navy">ماذا يقول عملاؤنا في الدمام</h2>
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
          <h2 className="text-3xl font-bold mb-4">نحن جاهزون لخدمتكم في الدمام</h2>
          <p className="max-w-2xl mx-auto mb-8">تواصل معنا اليوم لمعرفة المزيد عن خدمات النقل المبرد في الدمام والمنطقة الشرقية وللحصول على عروض خاصة</p>
          
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