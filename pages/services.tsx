import React from 'react';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import Layout from '../components/layout/Layout';
import Hero from '../components/common/Hero';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';
import { getMessages } from '../lib/getMessages';

export default function Services() {
  const t = useTranslations('home');
  const common = useTranslations('common');

  // Services Data
  const services = [
    {
      id: 'refrigerated',
      title: t('services.items.refrigerated.title'),
      description: t('services.items.refrigerated.description'),
      longDescription: 'خدمة النقل المبرد من شركة نبع الخليج هي الحل الأمثل لنقل المواد الغذائية والأدوية والمنتجات سريعة التلف. نوفر شاحنات مبردة حديثة ومجهزة بأحدث تقنيات التبريد للحفاظ على درجات الحرارة المطلوبة طوال رحلة النقل.',
      imageSrc: '/images/services/1.png',
      features: [
        'درجات حرارة مضبوطة ومراقبة باستمرار',
        'أسطول مبرد حديث ومتنوع',
        'تتبع شحنات في الوقت الفعلي',
        'فريق مدرب لضمان سلامة منتجاتك',
        'تغطية شاملة لجميع مناطق المملكة'
      ]
    },
    {
      id: 'general',
      title: t('services.items.general.title'),
      description: t('services.items.general.description'),
      longDescription: 'نقدم خدمات نقل البضائع العامة بمختلف أنواعها وأحجامها داخل المملكة العربية السعودية. سواء كنت تحتاج لنقل البضائع التجارية أو المعدات الصناعية أو الأثاث أو أي نوع آخر من البضائع، فإننا نوفر الحلول المناسبة بأعلى معايير الأمان والكفاءة.',
      imageSrc: '/images/services/2.png',
      features: [
        'أسطول متنوع من الشاحنات بجميع الأحجام',
        'تأمين شامل على البضائع',
        'مواعيد التسليم مضمونة',
        'خدمة التغليف والتخزين المؤقت',
        'خدمة الشحن من الباب إلى الباب'
      ]
    },
    {
      id: 'express',
      title: t('services.items.express.title'),
      description: t('services.items.express.description'),
      longDescription: 'خدمة النقل السريع من نبع الخليج مصممة لتلبية احتياجات العملاء الذين يحتاجون إلى توصيل سريع وآمن للشحنات العاجلة. نضمن لك وصول شحنتك في الوقت المحدد مع الحفاظ على أعلى معايير الجودة والأمان.',
      imageSrc: '/images/services/3.png',
      features: [
        'توصيل سريع خلال 24 ساعة',
        'أولوية للشحنات العاجلة',
        'خدمة على مدار الساعة',
        'إخطارات فورية بحالة الشحنة',
        'فريق استجابة سريعة'
      ]
    },
    {
      id: 'tracking',
      title: t('services.items.tracking.title'),
      description: t('services.items.tracking.description'),
      longDescription: 'نوفر نظام متطور لتتبع الشحنات في الوقت الفعلي يمكنك من معرفة موقع شحنتك بدقة في أي وقت. يمنحك نظام التتبع الخاص بنا راحة البال ويضمن لك الشفافية الكاملة طوال عملية النقل.',
      imageSrc: '/images/services/4.png',
      features: [
        'تتبع مباشر بتقنية GPS',
        'تحديثات فورية عبر الرسائل النصية أو البريد الإلكتروني',
        'واجهة سهلة الاستخدام',
        'تقارير تفصيلية للشحنات',
        'خدمة العملاء متاحة للمساعدة'
      ]
    }
  ];

  return (
    <Layout>
      <Seo pageTitle="خدماتنا" />

      {/* Hero Section */}
      <Hero
        title="خدمات النقل المبرد والعام"
        description="نقدم مجموعة متكاملة من خدمات النقل المبرد والعام لتلبية كافة احتياجات عملائنا بأعلى معايير الجودة والكفاءة"
        imageSrc="/images/services/Main.jpg"
        imageAlt="خدمات النقل المبرد - شركة نبع الخليج"
        primaryButtonText={common('buttons.callNow')}
        primaryButtonHref="tel:+966561475554"
        secondaryButtonText={common('buttons.whatsapp')}
        secondaryButtonHref="https://wa.me/+966561475554"
      />

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">{t('services.title')}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t('services.description')}</p>
          </div>

          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 mb-16 pb-16 ${index < services.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <div className="w-full lg:w-5/12">
                <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                  <img 
                    src={service.imageSrc} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-7/12">
                <h3 className="text-2xl font-bold text-primary-navy mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.longDescription}</p>
                
                <h4 className="text-lg font-semibold text-primary-cyan mb-3">المميزات:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-amber-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="mr-2 ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="primary" 
                    onClick={() => window.location.href = 'tel:+966561475554'}
                  >
                    {common('buttons.callNow')}
                  </Button>
                  <Button 
                    variant="whatsapp"
                    onClick={() => window.location.href = 'https://wa.me/+966561475554'}
                  >
                    {common('buttons.whatsapp')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">لماذا تختار نبع الخليج؟</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">نقدم لك حلول نقل متكاملة تجمع بين السرعة، الأمان، التغطية الواسعة، خدمة العملاء المتميزة، والتقنيات الحديثة.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-t-4 border-primary-cyan">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">تقنيات متقدمة</h3>
              <p className="text-gray-600">نستخدم أحدث أنظمة التتبع والمراقبة لضمان سلامة الشحنات في كل مرحلة.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-400">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">جودة معتمدة</h3>
              <p className="text-gray-600">نلتزم بأعلى معايير الجودة وحاصلون على اعتمادات رسمية في مجال النقل المبرد.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-t-4 border-green-400">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">فريق متخصص</h3>
              <p className="text-gray-600">فريقنا مدرب باحترافية عالية ويقدم الدعم للعملاء على مدار الساعة.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-t-4 border-purple-500">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">تغطية واسعة</h3>
              <p className="text-gray-600">نغطي جميع مناطق المملكة ونوفر حلولاً مرنة تناسب جميع القطاعات.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-t-4 border-pink-400">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">سرعة في التنفيذ</h3>
              <p className="text-gray-600">نضمن سرعة الاستجابة والتنفيذ مع الحفاظ على جودة الخدمة.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-t-4 border-cyan-500">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">خدمة عملاء متميزة</h3>
              <p className="text-gray-600">دعم فني واستشارات مجانية على مدار الساعة لضمان رضا العملاء.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">كيف تطلب الخدمة؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">خطوات بسيطة وسريعة للحصول على أفضل خدمات النقل المبرد والعام.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary-cyan/10 flex items-center justify-center text-primary-cyan text-2xl font-bold">1</div>
              <p className="font-semibold">تواصل معنا</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary-cyan/10 flex items-center justify-center text-primary-cyan text-2xl font-bold">2</div>
              <p className="font-semibold">حدد نوع الخدمة</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary-cyan/10 flex items-center justify-center text-primary-cyan text-2xl font-bold">3</div>
              <p className="font-semibold">استلام الشحنة</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary-cyan/10 flex items-center justify-center text-primary-cyan text-2xl font-bold">4</div>
              <p className="font-semibold">تتبع الشحنة</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary-cyan/10 flex items-center justify-center text-primary-cyan text-2xl font-bold">5</div>
              <p className="font-semibold">التسليم الآمن</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">آراء عملائنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">ثقة عملائنا هي سر نجاحنا. إليك بعض ما قالوه عن خدماتنا:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-primary-cyan font-bold mb-2">"خدمة ممتازة وسرعة في التوصيل!"</p>
              <p className="text-gray-700 text-sm">- أحمد من الرياض</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-primary-cyan font-bold mb-2">"تعامل راقٍ واحترافية عالية في نقل البضائع."</p>
              <p className="text-gray-700 text-sm">- سارة من جدة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-primary-cyan font-bold mb-2">"أفضل شركة نقل مبرد جربتها حتى الآن."</p>
              <p className="text-gray-700 text-sm">- محمد من الدمام</p>
            </div>
          </div>
        </div>
      </section>

      {/* Motivational CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-navy to-primary-cyan text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز لنقل أعمالك لمستوى جديد؟</h2>
          <p className="max-w-2xl mx-auto mb-8">اطلب عرض سعر الآن أو تواصل مع فريقنا لتحصل على استشارة مجانية حول أفضل حلول النقل المبرد والعام.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant="primary"
              onClick={() => window.location.href = '/contact'}
            >
              اطلب عرض سعر
            </Button>
            <Button
              variant="whatsapp"
              onClick={() => window.location.href = 'https://wa.me/+966561475554'}
            >
              {common('buttons.whatsapp')}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="max-w-2xl mx-auto mb-8">{t('cta.description')}</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant="primary"
              onClick={() => window.location.href = 'tel:+966561475554'}
            >
              {common('buttons.callNow')}
            </Button>
            <Button
              variant="whatsapp"
              onClick={() => window.location.href = 'https://wa.me/+966561475554'}
            >
              {common('buttons.whatsapp')}
            </Button>
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">أسطولنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">نمتلك أسطولاً متنوعاً من الشاحنات المبردة والحديثة بمختلف الأحجام لتلبية جميع احتياجات النقل، مع صيانة دورية وتقنيات تتبع متقدمة لضمان سلامة الشحنات.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <img src="/images/services/fleet1.png" alt="شاحنة مبردة كبيرة" className="mx-auto mb-4 h-32 object-contain" />
              <h3 className="font-bold text-primary-navy mb-2">شاحنات كبيرة</h3>
              <p className="text-gray-600 text-sm">لنقل الكميات الكبيرة والبضائع الضخمة لمسافات طويلة.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <img src="/images/services/fleet2.png" alt="شاحنة متوسطة" className="mx-auto mb-4 h-32 object-contain" />
              <h3 className="font-bold text-primary-navy mb-2">شاحنات متوسطة</h3>
              <p className="text-gray-600 text-sm">مثالية للنقل بين المدن أو الشحنات المتوسطة.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <img src="/images/services/fleet3.png" alt="شاحنة صغيرة" className="mx-auto mb-4 h-32 object-contain" />
              <h3 className="font-bold text-primary-navy mb-2">شاحنات صغيرة</h3>
              <p className="text-gray-600 text-sm">لخدمة التوصيل السريع والشحنات الصغيرة داخل المدن.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">شركاؤنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">نفخر بثقة العديد من الشركات والمؤسسات الرائدة في المملكة بخدماتنا.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <img src="/images/partners/partner1.png" alt="شريك 1" className="h-16 object-contain" />
            <img src="/images/partners/partner2.png" alt="شريك 2" className="h-16 object-contain" />
            <img src="/images/partners/partner3.png" alt="شريك 3" className="h-16 object-contain" />
            <img src="/images/partners/partner4.png" alt="شريك 4" className="h-16 object-contain" />
          </div>
        </div>
      </section>

      {/* Certifications & Quality Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">الجودة والاعتمادات</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">نلتزم بأعلى معايير الجودة وحاصلون على اعتمادات رسمية في مجال النقل المبرد واللوجستيات.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <img src="/images/certifications/iso22000.png" alt="ISO 22000" className="h-16 object-contain" />
            <img src="/images/certifications/iso9001.png" alt="ISO 9001" className="h-16 object-contain" />
            <img src="/images/certifications/gdp.png" alt="GDP" className="h-16 object-contain" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'ar' }) => {
  const messages = await getMessages(locale, ['common', 'home']);
  
  return {
    props: {
      messages,
    },
  };
}; 