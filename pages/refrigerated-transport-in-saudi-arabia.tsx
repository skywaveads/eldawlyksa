import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Layout from '../components/layout/Layout';
import Hero from '../components/common/Hero';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';
import { getMessages } from '../lib/getMessages';

export default function RefrigeratedTransportInSaudiArabia() {
  const common = useTranslations('common');

  // Key regions data
  const regions = [
    {
      id: 'central',
      title: 'النقل المبرد في المنطقة الوسطى',
      cities: ['الرياض', 'القصيم', 'حائل'],
      description: 'خدمات نقل مبرد متكاملة في المنطقة الوسطى بأسطول متخصص من الشاحنات المبردة وأنظمة تتبع متطورة تضمن وصول البضائع الحساسة في الوقت المحدد وبالجودة المطلوبة.',
      imageSrc: '/images/more/refrigerated-transport-in-riyadh.png',
    },
    {
      id: 'western',
      title: 'النقل المبرد في المنطقة الغربية',
      cities: ['جدة', 'مكة المكرمة', 'المدينة المنورة', 'الطائف'],
      description: 'خدمات متكاملة للنقل المبرد في المنطقة الغربية تشمل تغطية الموانئ ومراكز التوزيع الرئيسية، مع مراعاة خاصة لمواسم الحج والعمرة وتأمين احتياجات الفنادق والمطاعم.',
      imageSrc: '/images/more/refrigerated-transport-in-jeddah.png',
    },
    {
      id: 'eastern',
      title: 'النقل المبرد في المنطقة الشرقية',
      cities: ['الدمام', 'الخبر', 'الجبيل', 'الأحساء'],
      description: 'شبكة لوجستية متكاملة للنقل المبرد في المنطقة الشرقية متخصصة في خدمة المناطق الصناعية والموانئ البحرية، مع حلول مخصصة للمواد البتروكيماوية والمنتجات الصناعية الحساسة للحرارة.',
      imageSrc: '/images/more/refrigerated-transport-in-dammam.png',
    },
    {
      id: 'southern',
      title: 'النقل المبرد في المنطقة الجنوبية',
      cities: ['أبها', 'خميس مشيط', 'نجران', 'جازان'],
      description: 'خدمات نقل مبرد متخصصة للمنطقة الجنوبية تراعي خصوصية التضاريس والمناخ، مع التركيز على نقل المنتجات الزراعية المحلية والمواد الغذائية الطازجة بين المدن الجنوبية وباقي مناطق المملكة.',
      imageSrc: '/images/more/refrigerated-transport-in-saudi-arabia.png',
    },
    {
      id: 'northern',
      title: 'النقل المبرد في المنطقة الشمالية',
      cities: ['تبوك', 'عرعر', 'سكاكا', 'الجوف'],
      description: 'تغطية فعالة للمنطقة الشمالية بأسطول متخصص من الشاحنات المبردة مع مراعاة المسافات الطويلة وضمان التحكم الدقيق في درجات الحرارة طوال الرحلة بين المدن الشمالية ومناطق المملكة الأخرى.',
      imageSrc: '/images/more/services-in-saudi-arabia-may-2025.png',
    }
  ];

  // Key benefits 2025 update for refrigerated transport
  const benefits = [
    {
      title: 'أحدث تقنيات التبريد 2025',
      description: 'أسطولنا مجهز بأحدث تقنيات التبريد لعام 2025 التي تضمن استقرار درجات الحرارة والتحكم الدقيق فيها من -25 درجة إلى +25 درجة مئوية طوال رحلة النقل عبر مختلف مناطق المملكة.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'نظام تتبع متطور بتقنية 2025',
      description: 'أنظمة تتبع ذكية تعتمد على الذكاء الاصطناعي وتقنية الجيل الخامس 5G توفر معلومات دقيقة في الوقت الفعلي عن حالة الشحنة ودرجة الحرارة والموقع في جميع أنحاء المملكة.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: 'شبكة توزيع تغطي كامل المملكة',
      description: 'شبكة توزيع واسعة تغطي جميع مناطق المملكة بكفاءة عالية وجدولة مثالية لضمان التسليم في الوقت المحدد، مع مراكز لوجستية استراتيجية في المدن الرئيسية.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'خدمات مخصصة للصناعات المختلفة',
      description: 'حلول مخصصة للقطاعات المختلفة تشمل الأغذية والأدوية والمواد الكيميائية والبتروكيماويات والمنتجات الاستهلاكية الحساسة للحرارة، مع مراعاة متطلبات كل صناعة.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    }
  ];

  // Industries served
  const industries = [
    {
      title: 'قطاع الأغذية والمشروبات',
      description: 'نقل متخصص للمواد الغذائية الطازجة والمجمدة والمبردة، بما في ذلك منتجات الألبان واللحوم والخضروات والفواكه والمشروبات، مع مراعاة اشتراطات سلامة الغذاء.',
      temperature: 'من -18°C إلى +8°C',
      icon: '🍽️',
    },
    {
      title: 'قطاع الأدوية والمستلزمات الطبية',
      description: 'خدمات نقل مبرد للأدوية واللقاحات والمستحضرات الطبية الحساسة للحرارة، مع أنظمة مراقبة دقيقة لدرجات الحرارة وتوثيق كامل يلبي معايير القطاع الصحي.',
      temperature: 'من +2°C إلى +8°C',
      icon: '💊',
    },
    {
      title: 'القطاع الصناعي والبتروكيماويات',
      description: 'حلول نقل مبرد للمواد الكيميائية والبتروكيماوية والمنتجات الصناعية الحساسة للحرارة، تلبي معايير السلامة الصارمة واشتراطات الناقل المعتمد للمواد الكيميائية.',
      temperature: 'من -25°C إلى +25°C',
      icon: '🏭',
    },
    {
      title: 'قطاع التجزئة والتجارة الإلكترونية',
      description: 'خدمات توصيل مبرد لمتاجر التجزئة والتجارة الإلكترونية، مع حلول التوصيل السريع للمنتجات الحساسة للحرارة من المخازن المركزية إلى منافذ البيع أو المستهلك النهائي.',
      temperature: 'من -18°C إلى +25°C',
      icon: '🛒',
    }
  ];

  // Stats for 2025
  const stats = [
    { value: "150+", label: "شاحنة مبردة" },
    { value: "30+", label: "مدينة مخدومة" },
    { value: "5", label: "مناطق مغطاة" },
    { value: "24/7", label: "خدمة على مدار الساعة" }
  ];

  // May 2025 updates
  const updates = {
    title: "تحديثات النقل المبرد في المملكة - مايو 2025",
    content: [
      "قمنا بتحديث أسطول النقل المبرد ليشمل أكثر من 150 شاحنة مجهزة بأحدث تقنيات التبريد والتحكم في درجات الحرارة.",
      "أطلقنا نظام تتبع متطور يعتمد على تقنية الجيل الخامس 5G يتيح للعملاء متابعة شحناتهم ودرجات الحرارة في الوقت الفعلي.",
      "طورنا شبكة مراكز لوجستية في المدن الرئيسية بالمملكة لتسهيل توزيع البضائع المبردة وتقليل وقت التوصيل بين المناطق.",
      "وسعنا نطاق خدماتنا لتغطي المدن الثانوية والمناطق النائية في المملكة مع الحفاظ على نفس مستوى الجودة والكفاءة."
    ]
  };

  return (
    <Layout>
      <Seo 
        pageTitle="خدمات النقل المبرد في المملكة العربية السعودية | تحديث مايو 2025" 
        description="خدمات نقل مبرد احترافية تغطي جميع مناطق المملكة العربية السعودية بأسطول حديث 2025. شبكة لوجستية متكاملة وتقنيات تبريد متطورة تضمن جودة منتجاتك من الألف إلى الياء."
      />

      {/* Hero Section */}
      <Hero
        title="خدمات النقل المبرد عبر المملكة العربية السعودية | تحديث 2025"
        description="شبكة متكاملة من خدمات النقل المبرد تغطي كافة مناطق المملكة العربية السعودية بأحدث التقنيات ومعايير الجودة العالمية"
        imageSrc="/images/more/refrigerated-transport-in-saudi-arabia.png"
        imageAlt="خدمات النقل المبرد في المملكة العربية السعودية - تحديث 2025"
        primaryButtonText={common('buttons.callNow')}
        primaryButtonHref="tel:+966561475554"
        secondaryButtonText={common('buttons.whatsapp')}
        secondaryButtonHref="https://wa.me/+966561475554"
      />

      {/* Stats Section */}
      <section className="py-10 bg-gradient-to-r from-primary-navy to-primary-navy/90 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="border-r last:border-r-0 border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* May 2025 Updates */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-primary-navy/10 flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-primary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-navy">{updates.title}</h2>
                <p className="text-sm text-gray-500">آخر تحديث: 15 مايو 2025</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {updates.content.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regions Coverage Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-3">تغطية شاملة 2025</span>
            <h2 className="text-3xl font-bold text-primary-navy">خدمات النقل المبرد في جميع مناطق المملكة</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">نوفر شبكة متكاملة من خدمات النقل المبرد تغطي كافة أنحاء المملكة العربية السعودية بأعلى معايير الجودة</p>
          </div>

          {regions.map((region, index) => (
            <div 
              key={region.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 mb-16 pb-10 ${index < regions.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={region.imageSrc}
                    alt={region.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-primary-navy mb-3">{region.title}</h3>
                <p className="text-gray-600 mb-5">{region.description}</p>
                
                <div className="mb-5">
                  <h4 className="text-lg font-semibold text-primary-cyan mb-2">المدن الرئيسية المخدومة:</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.cities.map((city) => (
                      <span key={city} className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">{city}</span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button 
                    variant="primary" 
                    onClick={() => window.location.href = 'https://wa.me/+966561475554'}
                  >
                    طلب خدمة في {region.title.replace('النقل المبرد في ', '')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-3">مميزات محدثة 2025</span>
            <h2 className="text-3xl font-bold text-primary-navy">مميزات خدمات النقل المبرد المحدثة</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">أحدث التقنيات والمميزات التي نقدمها في خدمات النقل المبرد عبر المملكة لعام 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-navy mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-3">القطاعات المخدومة</span>
            <h2 className="text-3xl font-bold text-primary-navy">حلول النقل المبرد للقطاعات المختلفة</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">خدمات مخصصة تلبي احتياجات مختلف القطاعات في المملكة العربية السعودية</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-navy/10 rounded-full flex items-center justify-center mr-4 text-2xl">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-navy mb-2">{industry.title}</h3>
                    <p className="text-gray-600 mb-3">{industry.description}</p>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <span className="font-medium text-primary-cyan">نطاق درجات الحرارة: </span>
                      <span className="text-gray-700">{industry.temperature}</span>
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
          <h2 className="text-3xl font-bold mb-4">جاهزون لخدمتكم في جميع مناطق المملكة</h2>
          <p className="max-w-2xl mx-auto mb-8">استفد من شبكتنا اللوجستية المتكاملة لنقل منتجاتك بأمان في درجات الحرارة المناسبة وفق أعلى معايير الجودة في عام 2025</p>
          
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