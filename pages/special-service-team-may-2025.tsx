import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Layout from '../components/layout/Layout';
import Hero from '../components/common/Hero';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';
import { getMessages } from '../lib/getMessages';

export default function SpecialServiceTeamMay2025() {
  const common = useTranslations('common');

  // Team members data for 2025
  const teamMembers = [
    {
      id: 'operations',
      name: 'سعود العتيبي',
      title: 'مدير العمليات',
      description: 'يشرف على كافة عمليات النقل المبرد ويضمن سير العمل بكفاءة عالية وجودة متميزة، مع خبرة تزيد عن 12 عاماً في مجال اللوجستيات وسلسلة التبريد.',
      image: '/images/blog/author/Saud_Alotaibi.png',
      expertise: ['إدارة الأسطول', 'تخطيط المسارات', 'ضمان الجودة', 'حلول لوجستية متكاملة']
    },
    {
      id: 'customer',
      name: 'نورة الصبيحي',
      title: 'مديرة خدمة العملاء',
      description: 'تقود فريق خدمة العملاء لضمان تجربة مميزة لكل عميل وتلبية احتياجاتهم بشكل فوري وفعال، مع تركيز خاص على تطوير عمليات ما بعد البيع.',
      image: '/images/blog/author/Noura_Alsobaihi.png',
      expertise: ['إدارة علاقات العملاء', 'حل المشكلات', 'تطوير تجربة العملاء', 'متابعة الطلبات']
    },
    {
      id: 'technical',
      name: 'عبدالرحمن القحطاني',
      title: 'المدير التقني',
      description: 'يشرف على البنية التقنية وأنظمة التتبع والمراقبة، مع التركيز على تطوير الحلول التقنية المبتكرة لتحسين كفاءة النقل المبرد وضمان سلامة المنتجات.',
      image: '/images/blog/author/Abdulrahman Alqahtani.png',
      expertise: ['أنظمة التتبع', 'مراقبة درجات الحرارة', 'حلول تقنية متكاملة', 'تحليل البيانات']
    }
  ];

  // Team services 
  const teamServices = [
    {
      title: 'استشارات متخصصة',
      description: 'يقدم فريقنا استشارات متخصصة في مجال النقل المبرد بناءً على خبرة تمتد لأكثر من عقد في السوق السعودي.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: 'خدمة عملاء على مدار الساعة',
      description: 'فريق خدمة عملاء مدرب بأعلى المعايير متاح 24/7 للرد على استفساراتكم وحل أي مشكلات قد تواجهكم.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      title: 'تدريب وتطوير مستمر',
      description: 'نحرص على تدريب فريقنا باستمرار على أحدث التقنيات والممارسات في مجال النقل المبرد لضمان تقديم أفضل خدمة ممكنة.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'حلول مخصصة',
      description: 'يعمل فريقنا على تطوير حلول نقل مبرد مخصصة تناسب احتياجات كل عميل بناءً على طبيعة منتجاته ومتطلبات التخزين والنقل الخاصة به.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  // Team values for 2025
  const teamValues = [
    { title: 'الاحترافية', description: 'نلتزم بأعلى معايير الأداء المهني في كافة تعاملاتنا' },
    { title: 'التميز', description: 'نسعى دائماً لتقديم خدمة استثنائية تتجاوز توقعات عملائنا' },
    { title: 'الابتكار', description: 'نطور باستمرار حلولنا وخدماتنا لمواكبة أحدث التطورات في المجال' },
    { title: 'المسؤولية', description: 'نتحمل المسؤولية الكاملة عن جودة خدماتنا ونلتزم بتحقيق أفضل النتائج' },
    { title: 'روح الفريق', description: 'نعمل كفريق واحد متكامل لتحقيق أهدافنا المشتركة وتلبية احتياجات عملائنا' },
    { title: 'المرونة', description: 'نتكيف مع المتغيرات ونتعامل بمرونة مع التحديات لضمان استمرارية الخدمة' }
  ];

  // Updates for 2025
  const updates2025 = {
    title: "تحديثات فريق العمل لعام 2025",
    date: "15 مايو 2025",
    content: [
      "في إطار التزامنا بالتطوير المستمر، قمنا بتحديث وتطوير فريق العمل لعام 2025 بما يتماشى مع أحدث المعايير العالمية في مجال النقل المبرد.",
      "تشمل التحديثات توسعة فريق خدمة العملاء ليعمل على مدار الساعة، وتدريب الفريق التقني على أحدث تقنيات مراقبة درجات الحرارة والتتبع، بالإضافة إلى تعزيز فريق العمليات بخبرات جديدة في مجال اللوجستيات وسلسلة التبريد.",
      "كما قمنا بتطوير نظام داخلي للتواصل بين أفراد الفريق يعتمد على الذكاء الاصطناعي لتسريع الاستجابة لطلبات العملاء وتحسين كفاءة العمل."
    ]
  };

  return (
    <Layout>
      <Seo 
        pageTitle="فريق العمل المتخصص في النقل المبرد | تحديث مايو 2025" 
        description="تعرف على فريق عمل نبع الخليج المتخصص في خدمات النقل المبرد والعام في المملكة العربية السعودية. فريق محترف مدرب على أعلى المعايير لضمان جودة خدماتنا."
      />

      {/* Hero Section */}
      <Hero
        title="فريق عملنا المتخصص | تحديث مايو 2025"
        description="نفخر بفريق عمل متكامل من الخبراء المتخصصين في مجال النقل المبرد لتقديم خدمة استثنائية تلبي جميع احتياجاتكم"
        imageSrc="/images/more/special-service-team-may-2025.png"
        imageAlt="فريق عمل نبع الخليج المتخصص في النقل المبرد - تحديث 2025"
        primaryButtonText={common('buttons.callNow')}
        primaryButtonHref="tel:+966561475554"
        secondaryButtonText={common('buttons.whatsapp')}
        secondaryButtonHref="https://wa.me/+966561475554"
      />

      {/* 2025 Updates Section */}
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
                <h2 className="text-2xl font-bold text-primary-navy">{updates2025.title}</h2>
                <p className="text-sm text-gray-500">تاريخ التحديث: {updates2025.date}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {updates2025.content.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-3">فريق متخصص 2025</span>
            <h2 className="text-3xl font-bold text-primary-navy">فريق العمل المتخصص</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">نفخر بفريق عمل احترافي ذو خبرة عالية في مجال النقل المبرد والخدمات اللوجستية</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-64 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-navy mb-1">{member.name}</h3>
                  <p className="text-primary-cyan font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600 mb-5">{member.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">مجالات الخبرة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span key={skill} className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-3">خدمات الفريق</span>
            <h2 className="text-3xl font-bold text-primary-navy">خدمات فريق العمل المتخصص</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">مجموعة متكاملة من الخدمات المتخصصة التي يقدمها فريق عملنا لضمان تجربة متميزة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-navy mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-3">قيمنا 2025</span>
            <h2 className="text-3xl font-bold text-primary-navy">قيم فريق العمل</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">المبادئ والقيم التي تحكم عمل فريقنا وتوجه جهودنا لتقديم أفضل خدمة ممكنة</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {teamValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                <h3 className="text-xl font-bold text-primary-navy mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">فريقنا جاهز لخدمتكم</h2>
          <p className="max-w-2xl mx-auto mb-8">تواصل مع فريق عملنا المتخصص اليوم للحصول على استشارة مجانية وحلول مخصصة لاحتياجات النقل المبرد الخاصة بكم</p>
          
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