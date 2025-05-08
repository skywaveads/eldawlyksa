import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Layout from '../components/layout/Layout';
import Hero from '../components/common/Hero';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';
import { getMessages } from '../lib/getMessages';

export default function ContactTeamMay2025() {
  const common = useTranslations('common');

  // Contact methods data
  const contactMethods = [
    {
      id: 'phone',
      title: 'الاتصال المباشر',
      description: 'فريق خدمة العملاء متاح للرد على استفساراتكم على مدار الساعة طوال أيام الأسبوع',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      contact: '+966 56 147 5554',
      action: 'tel:+966561475554',
      buttonText: 'اتصل الآن'
    },
    {
      id: 'whatsapp',
      title: 'واتساب',
      description: 'تواصل معنا عبر واتساب للحصول على رد سريع وإرسال استفساراتك والتنسيق لخدمات النقل المبرد',
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
        </svg>
      ),
      contact: '+966 56 147 5554',
      action: 'https://wa.me/+966561475554',
      buttonText: 'مراسلة واتساب'
    },
    {
      id: 'email',
      title: 'البريد الإلكتروني',
      description: 'راسلنا عبر البريد الإلكتروني للاستفسارات التفصيلية وطلبات التسعير والتعاقدات طويلة المدى',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      contact: 'info@nabaaelkhaleej.com',
      action: 'mailto:info@nabaaelkhaleej.com',
      buttonText: 'مراسلة بريد إلكتروني'
    }
  ];

  // Contact team members
  const teamMembers = [
    {
      id: 'sales',
      name: 'فريق المبيعات',
      description: 'فريق متخصص لمساعدتك في اختيار الخدمة المناسبة والحصول على العروض والأسعار',
      image: '/images/blog/author/Saud_Alotaibi.png',
      contact: '+966 56 000 0001',
      email: 'sales@nabaaelkhaleej.com',
      availability: 'متاح: 8 ص - 8 م'
    },
    {
      id: 'support',
      name: 'فريق الدعم الفني',
      description: 'فريق تقني متخصص لحل المشكلات التقنية ومساعدتك في تتبع شحناتك ومراقبة درجات الحرارة',
      image: '/images/blog/author/Abdulrahman Alqahtani.png',
      contact: '+966 56 000 0002',
      email: 'support@nabaaelkhaleej.com',
      availability: 'متاح: 24/7'
    },
    {
      id: 'customer',
      name: 'خدمة العملاء',
      description: 'فريق خدمة العملاء جاهز للرد على استفساراتكم والمساعدة في حل أي مشكلات قد تواجهكم',
      image: '/images/blog/author/Noura_Alsobaihi.png',
      contact: '+966 56 147 5554',
      email: 'care@nabaaelkhaleej.com',
      availability: 'متاح: 24/7'
    }
  ];

  // Office locations
  const officeLocations = [
    {
      id: 'riyadh',
      city: 'الرياض',
      address: 'طريق الملك عبدالله، حي الملز، الرياض',
      phone: '+966 56 000 0001',
      email: 'riyadh@nabaaelkhaleej.com',
      hours: 'السبت - الخميس: 8 ص - 6 م',
      mainOffice: true
    },
    {
      id: 'jeddah',
      city: 'جدة',
      address: 'طريق الملك فهد، حي السلامة، جدة',
      phone: '+966 56 000 0002',
      email: 'jeddah@nabaaelkhaleej.com',
      hours: 'السبت - الخميس: 8 ص - 6 م',
      mainOffice: false
    },
    {
      id: 'dammam',
      city: 'الدمام',
      address: 'طريق الظهران، حي المزروعية، الدمام',
      phone: '+966 56 000 0003',
      email: 'dammam@nabaaelkhaleej.com',
      hours: 'السبت - الخميس: 8 ص - 6 م',
      mainOffice: false
    }
  ];

  // May 2025 updates
  const updates = {
    title: "تحديثات مايو 2025",
    content: "تم تحديث نظام الرد الآلي ليشمل خدمة الدردشة الفورية عبر الذكاء الاصطناعي بهدف تقليل وقت الانتظار وتحسين تجربة العملاء. كما تم تعيين فريق مختص بالتعاقدات طويلة المدى للشركات والمؤسسات."
  };

  return (
    <Layout>
      <Seo 
        pageTitle="فريق التواصل المتخصص | تحديث مايو 2025" 
        description="تواصل مع فريق خدمة العملاء في نبع الخليج المتخصص بالنقل المبرد والعام في المملكة العربية السعودية. فريق متاح على مدار الساعة للرد على استفساراتكم."
      />

      {/* Hero Section */}
      <Hero
        title="فريق التواصل المتخصص | تحديث مايو 2025"
        description="فريق متكامل من خبراء خدمة العملاء متاح على مدار الساعة للرد على استفساراتكم وتلبية احتياجاتكم من خدمات النقل المبرد"
        imageSrc="/images/more/contact-team-may-2025.png"
        imageAlt="فريق التواصل المتخصص في نبع الخليج - تحديث 2025"
        primaryButtonText={common('buttons.callNow')}
        primaryButtonHref="tel:+966561475554"
        secondaryButtonText={common('buttons.whatsapp')}
        secondaryButtonHref="https://wa.me/+966561475554"
      />

      {/* Updates Section */}
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
                <h2 className="text-xl font-bold text-primary-navy">{updates.title}</h2>
              </div>
            </div>
            <p className="text-gray-600">{updates.content}</p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-3">طرق التواصل 2025</span>
            <h2 className="text-3xl font-bold text-primary-navy">وسائل التواصل معنا</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">عدة طرق للتواصل معنا للحصول على خدمة سريعة ومتميزة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <div 
                key={method.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col"
              >
                <div className="mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{method.description}</p>
                
                <div className="mb-5">
                  <p className="text-lg font-semibold text-primary-cyan">{method.contact}</p>
                </div>
                
                <Button
                  variant={method.id === 'whatsapp' ? 'whatsapp' : 'primary'}
                  onClick={() => window.location.href = method.action}
                  className="mt-auto"
                >
                  {method.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-3">فريق متخصص 2025</span>
            <h2 className="text-3xl font-bold text-primary-navy">فريق التواصل المتخصص</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">فريق عمل متكامل من المتخصصين لخدمتكم في مختلف الاستفسارات والخدمات</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-navy mb-1">{member.name}</h3>
                  <p className="text-primary-cyan font-medium mb-4">{member.availability}</p>
                  <p className="text-gray-600 mb-5">{member.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary-cyan mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-700">{member.contact}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary-cyan mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">{member.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-3">مكاتبنا 2025</span>
            <h2 className="text-3xl font-bold text-primary-navy">مكاتبنا في المملكة</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">شبكة من المكاتب في المدن الرئيسية بالمملكة لتقديم خدمة متميزة وقريبة من عملائنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office) => (
              <div 
                key={office.id}
                className={`bg-white rounded-xl shadow-md p-6 ${office.mainOffice ? 'border-primary-cyan border-2' : ''}`}
              >
                {office.mainOffice && (
                  <div className="mb-4 inline-block px-3 py-1 rounded-full bg-primary-cyan/10 text-primary-cyan text-xs font-medium">
                    المقر الرئيسي
                  </div>
                )}
                <h3 className="text-xl font-bold text-primary-navy mb-2">{office.city}</h3>
                <div className="space-y-3 mb-5">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary-cyan mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-cyan mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-cyan mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">{office.email}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-cyan mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">{office.hours}</span>
                  </div>
                </div>
                <Button 
                  variant="primary" 
                  onClick={() => window.location.href = `tel:${office.phone}`}
                >
                  اتصل بمكتب {office.city}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-3">نموذج التواصل</span>
            <h2 className="text-3xl font-bold text-primary-navy">تواصل معنا</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">نحن هنا للإجابة على استفساراتكم وتلبية احتياجاتكم من خدمات النقل المبرد</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10">
                <h3 className="text-2xl font-bold text-primary-navy mb-6">أرسل لنا رسالة</h3>
                <form>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-cyan focus:border-primary-cyan" 
                        placeholder="الاسم الكامل"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-cyan focus:border-primary-cyan" 
                        placeholder="بريدك الإلكتروني"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-cyan focus:border-primary-cyan" 
                        placeholder="رقم الهاتف"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-cyan focus:border-primary-cyan" 
                        placeholder="اكتب رسالتك هنا..."
                      ></textarea>
                    </div>
                    <div>
                      <Button variant="primary" className="w-full">
                        إرسال الرسالة
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="bg-primary-navy text-white p-10 flex items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
                  <p className="mb-8">يمكنك التواصل معنا عبر وسائل التواصل المختلفة، وسيقوم فريقنا المتخصص بالرد عليكم في أسرع وقت ممكن.</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-primary-cyan mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>المملكة العربية السعودية - الرياض - طريق الملك عبدالله</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-primary-cyan mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+966 56 147 5554</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-primary-cyan mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>info@nabaaelkhaleej.com</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-primary-cyan mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>السبت - الخميس: 8 ص - 8 م</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">فريقنا جاهز للرد على استفساراتكم</h2>
          <p className="max-w-2xl mx-auto mb-8">تواصل معنا اليوم للحصول على استشارة مجانية وعروض أسعار خاصة لخدمات النقل المبرد في جميع مناطق المملكة</p>
          
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