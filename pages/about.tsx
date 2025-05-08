import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Layout from '../components/layout/Layout';
import Hero from '../components/common/Hero';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';
import { getMessages } from '../lib/getMessages';

export default function About() {
  // We're using direct labels instead of translations for better SEO content
  const common = useTranslations('common');

  // Company values - enhanced with benefits and more action-oriented descriptions
  const values = [
    {
      id: 'quality',
      title: 'الجودة',
      description: 'نضمن تجاوز توقعات عملائنا من خلال تطبيق أعلى المعايير العالمية في سلسلة التبريد، مما يحافظ على سلامة منتجاتكم وجودتها طوال رحلة النقل.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'reliability',
      title: 'الموثوقية',
      description: 'نفي بوعودنا دائمًا ونلتزم بالمواعيد المحددة، مما يمنحكم راحة البال ويتيح لكم التركيز على أعمالكم بينما نهتم نحن بإدارة سلسلة التوريد الخاصة بكم.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'innovation',
      title: 'الابتكار',
      description: 'نوظف أحدث التقنيات لمراقبة درجات الحرارة ونظم التتبع المتطورة لضمان وصول شحناتكم بحالة ممتازة، مع توفير رؤية شاملة وشفافة لرحلة منتجاتكم في كل مرحلة.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 'sustainability',
      title: 'الاستدامة',
      description: 'نلتزم بتقليل البصمة الكربونية عبر أسطول متطور وممارسات مستدامة، مما يعزز سمعة علامتكم التجارية ويساهم في الحفاظ على البيئة للأجيال القادمة.',
      icon: (
        <svg className="w-12 h-12 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <Layout>
      <Seo 
        pageTitle="من نحن | شريكك الموثوق في النقل المبرد بالمملكة" 
        description="نبع الخليج - شركة رائدة في النقل المبرد والعام بالسعودية منذ 2013. نضمن الحفاظ على سلامة منتجاتكم وجودتها بأفضل التقنيات ومعايير الجودة العالمية."
      />
      
      {/* Hero Section - Enhanced with stronger value proposition */}
      <Hero
        title="نبع الخليج للنقل المبرد - خبرة 10+ سنوات في النقل المتخصص"
        description="شريككم الأول في المملكة العربية السعودية لخدمات النقل المبرد والعام عالية الجودة. نحن نقدم حلولاً لوجستية متكاملة تحافظ على سلامة منتجاتكم وتدعم نمو أعمالكم."
        imageSrc="/images/about/Main.jpg"
        imageAlt="نبع الخليج للنقل المبرد - الشريك الموثوق للخدمات اللوجستية في المملكة"
        primaryButtonText={common('buttons.callNow')}
        primaryButtonHref="tel:+966561475554"
        secondaryButtonText={common('buttons.whatsapp')}
        secondaryButtonHref="https://wa.me/+966561475554"
      />
      
      {/* Our Journey Section - Enhanced with narrative storytelling */}
      <section className="py-20 relative overflow-hidden">
        {/* Background shape decorations */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary-cyan/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-primary-navy/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        
        <div className="container relative">
          <div className="mb-12 text-center">
            <h2 className="inline-block text-4xl font-bold text-primary-navy mb-4 relative">
              رحلتنا: من رؤية طموحة إلى شريك لوجستي رائد
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-cyan to-transparent"></span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg relative">
                {/* Timeline visualization */}
                <div className="absolute top-0 bottom-0 left-10 w-1 bg-gradient-to-b from-primary-cyan via-primary-navy to-primary-cyan hidden lg:block"></div>
                
                <div className="relative lg:pl-12 mb-8">
                  <div className="absolute top-1 left-0 w-8 h-8 rounded-full bg-primary-cyan text-white flex items-center justify-center shadow-lg hidden lg:flex">
                    <span className="text-sm font-bold">١</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-navy mb-3">البدايات - بداية الرحلة</h3>
                  <p className="text-gray-600 leading-relaxed">
                    بدأت قصة نبع الخليج برؤية واضحة: تقديم خدمات نقل مبرد تتميز بالاحترافية والدقة في المملكة العربية السعودية. انطلقنا بأسطول متواضع وفريق صغير، مدفوعين بشغف لتغيير معايير صناعة النقل المبرد وتلبية احتياجات السوق المتنامية للنقل الآمن للمنتجات الحساسة لدرجات الحرارة.
                  </p>
                </div>
                
                <div className="relative lg:pl-12 mb-8">
                  <div className="absolute top-1 left-0 w-8 h-8 rounded-full bg-primary-navy text-white flex items-center justify-center shadow-lg hidden lg:flex">
                    <span className="text-sm font-bold">٢</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-navy mb-3">مرحلة النمو والتطور</h3>
                  <p className="text-gray-600 leading-relaxed">
                    واجهنا تحديات عديدة خلال رحلتنا، لكن التزامنا بالجودة والابتكار كان محفزنا للتطور المستمر. استثمرنا بكثافة في تطوير أسطولنا وتدريب كوادرنا على أحدث التقنيات وأفضل الممارسات العالمية في مجال سلسلة التبريد، وتوسعنا من خدمة منطقة محدودة إلى تغطية شاملة لمختلف مناطق المملكة.
                  </p>
                </div>
                
                <div className="relative lg:pl-12">
                  <div className="absolute top-1 left-0 w-8 h-8 rounded-full bg-primary-cyan text-white flex items-center justify-center shadow-lg hidden lg:flex">
                    <span className="text-sm font-bold">٣</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-navy mb-3">نبع الخليج اليوم</h3>
                  <p className="text-gray-600 leading-relaxed">
                    واليوم، بعد أكثر من عقد من العمل المتواصل، نفخر بأن نكون الشريك اللوجستي المفضل للعديد من الشركات والمؤسسات الرائدة في قطاعات الأغذية والأدوية والمنتجات الحساسة. نجاحنا ليس مجرد أرقام نحققها، بل هو ثقة عملائنا المتجددة وقصص نجاحهم التي ساهمنا فيها من خلال حلولنا اللوجستية المتميزة.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent z-10"></div>
                <Image
                  src="/images/about/about.png"
                  alt="رحلة نمو شركة نبع الخليج للنقل المبرد منذ 2013"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-1 bg-primary-cyan"></div>
                    <p className="text-sm font-bold">خبرة تمتد لأكثر من 15 عامًا</p>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">أكثر من 15 عامًا من التميز في النقل المبرد</h3>
                  <p className="text-sm opacity-90">نفخر بمسيرتنا وإنجازاتنا في تطوير قطاع النقل المبرد بالمملكة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission & Vision Section - New section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-40 right-0 w-72 h-72 bg-primary-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-primary-navy/5 rounded-full blur-3xl"></div>
        
        <div className="container relative">
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-navy/5 text-primary-navy font-semibold text-sm mb-4">التزامنا: رسالتنا، رؤيتنا ومبادئنا</span>
            <h2 className="text-4xl font-bold text-primary-navy mb-6">نبني مستقبلاً أفضل <span className="text-primary-cyan">للنقل المبرد</span> في المملكة</h2>
            <p className="max-w-3xl mx-auto text-gray-600">نسعى من خلال خدماتنا المتميزة والمبتكرة إلى تلبية احتياجات عملائنا وتجاوز توقعاتهم</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-40 bg-primary-navy relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/about/Main.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/90 to-primary-navy/70"></div>
                <div className="relative h-full flex flex-col justify-center p-8 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-1 bg-primary-cyan"></div>
                    <h3 className="text-lg font-bold">رسالتنا</h3>
                  </div>
                  <p className="text-2xl font-bold">تقديم حلول لوجستية متكاملة عالية الجودة</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed">
                  تقديم حلول لوجستية متكاملة لنقل البضائع المبردة والعامة بأعلى معايير الجودة والأمان، من خلال الاستثمار في التقنيات المتطورة والكوادر المؤهلة، وبناء شراكات استراتيجية طويلة الأمد مع عملائنا تساهم في نجاح أعمالهم وتطوير الاقتصاد الوطني.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-cyan/10 text-primary-cyan text-xs font-medium">النقل المبرد</span>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-cyan/10 text-primary-cyan text-xs font-medium">الجودة العالية</span>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-cyan/10 text-primary-cyan text-xs font-medium">الالتزام</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-40 bg-primary-navy relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/about/Main.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/70 to-primary-navy/90"></div>
                <div className="relative h-full flex flex-col justify-center p-8 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-1 bg-primary-cyan"></div>
                    <h3 className="text-lg font-bold">رؤيتنا</h3>
                  </div>
                  <p className="text-2xl font-bold">الريادة والتميز في خدمات النقل المبرد</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed">
                  أن نكون الشركة الرائدة والأكثر ابتكارًا في مجال خدمات النقل المبرد واللوجستيات في المملكة العربية السعودية والشرق الأوسط، مع الالتزام بتحقيق أعلى مستويات رضا العملاء وتبني أحدث التقنيات الصديقة للبيئة.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-navy/10 text-primary-navy text-xs font-medium">الريادة</span>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-navy/10 text-primary-navy text-xs font-medium">الابتكار</span>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-navy/10 text-primary-navy text-xs font-medium">الاستدامة</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl relative">
              <div className="absolute -top-6 right-1/2 transform translate-x-1/2 bg-primary-cyan text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-center text-lg text-gray-600 italic">
                "نحن لا نقدم خدمات نقل فحسب، بل نبني شراكات استراتيجية مع عملائنا لدعم نموهم وتحقيق أهدافهم التجارية."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section - New section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">لماذا تختار نبع الخليج؟</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              نقدم لكم مزايا فريدة تجعلنا الخيار الأمثل لخدمات النقل المبرد والعام في المملكة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary-cyan hover:border cursor-pointer">
              <h3 className="text-xl font-bold text-primary-navy mb-3">خبرة متخصصة في سلسلة التبريد</h3>
              <p className="text-gray-600">
                فريقنا يمتلك خبرة عميقة في إدارة نقل المنتجات الحساسة لدرجات الحرارة، مع معرفة متخصصة بمتطلبات مختلف القطاعات كالأغذية، والأدوية، والمستحضرات الطبية.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary-cyan hover:border cursor-pointer">
              <h3 className="text-xl font-bold text-primary-navy mb-3">أسطول حديث ومتطور</h3>
              <p className="text-gray-600">
                نمتلك أسطولًا من الشاحنات المبردة المجهزة بأحدث تقنيات التبريد ونظم المراقبة، مما يضمن الحفاظ على درجات الحرارة المطلوبة طوال رحلة النقل.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary-cyan hover:border cursor-pointer">
              <h3 className="text-xl font-bold text-primary-navy mb-3">تغطية شاملة لكافة مناطق المملكة</h3>
              <p className="text-gray-600">
                شبكتنا اللوجستية تغطي 45 مدينة في جميع مناطق المملكة، مما يتيح لعملائنا الوصول إلى أسواقهم المستهدفة بكفاءة وفعالية.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary-cyan hover:border cursor-pointer">
              <h3 className="text-xl font-bold text-primary-navy mb-3">حلول مخصصة لاحتياجاتكم</h3>
              <p className="text-gray-600">
                نعمل بشكل وثيق مع عملائنا لفهم متطلباتهم الخاصة وتصميم حلول لوجستية تناسب طبيعة أعمالهم وتلبي توقعاتهم، بدءًا من الشحنات المفردة وصولًا إلى العقود طويلة الأجل.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section - Enhanced with benefit-oriented descriptions */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">قيمنا الأساسية</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              تشكل قيمنا الأساسية هوية شركتنا وتوجه قراراتنا اليومية، وتنعكس بشكل مباشر على جودة الخدمات التي نقدمها لعملائنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.id} className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary-cyan hover:border cursor-pointer">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Cards Section - Trusted by biggest companies */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">موثوق من أكبر الشركات في السعودية</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              نقدم حلولاً لوجستية متكاملة بخبرة وسرعة وتوافق مع أعلى المعايير
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* Card 1 - Experience */}
            <div className="bg-yellow-50 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-1">15+</h3>
              <p className="text-gray-600 text-sm">سنوات من الخبرة</p>
            </div>
            
            {/* Card 2 - Clients */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-1">+4713</h3>
              <p className="text-gray-600 text-sm">عميل راضٍ بخدماتهم</p>
            </div>
            
            {/* Card 3 - Shipments */}
            <div className="bg-green-50 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-white">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-1">+21967</h3>
              <p className="text-gray-600 text-sm">شحنة ناجحة</p>
            </div>
            
            {/* Card 4 - Quality */}
            <div className="bg-cyan-50 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center text-white">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-cyan-600 mb-1">متوافق</h3>
              <p className="text-gray-600 text-sm">مع معايير الجودة العالمية</p>
            </div>
            
            {/* Card 5 - Coverage */}
            <div className="bg-purple-50 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center text-white">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-purple-600 mb-1">نغطي</h3>
              <p className="text-gray-600 text-sm">جميع مناطق المملكة</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Enhanced with stronger call-to-action */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-navy mb-4">هل أنت مستعد لتحسين عملياتك اللوجستية؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            انضم إلى قائمة عملائنا المتنامية واستفد من خدماتنا المتميزة في مجال النقل المبرد. تواصل معنا اليوم لمناقشة احتياجاتك الخاصة والحصول على حلول مخصصة تدعم نمو أعمالك.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant="primary"
              onClick={() => window.location.href = 'tel:+966561475554'}
            >
              {common('buttons.callNow')}
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = '/contact'}
            >
              تواصل معنا
            </Button>
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