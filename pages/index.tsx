import React, { useState, useEffect, useRef } from 'react';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import Layout from '../components/layout/Layout';
import HeroCarousel from '../components/common/HeroCarousel';
import ServiceCard from '../components/common/ServiceCard';
import StatsCounter from '../components/common/StatsCounter';
import WhyUsSlider from '../components/common/WhyUsSlider';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';
import { getMessages } from '../lib/getMessages';
import Image from 'next/image';
import SaudiCitiesSlider from '../components/common/SaudiCitiesSlider';
import CustomerSupportSection from '../components/common/CustomerSupportSection';
import TrustStats from '../components/common/TrustStats';
import LatestBlogPosts from '../components/common/LatestBlogPosts';
import TestimonialsSlider from '../components/common/TestimonialsSlider';
import { BlogPostSummary } from '../components/common/BlogCard';

export default function Home({ blogPosts }: { blogPosts: BlogPostSummary[] }) {
  const t = useTranslations('home');
  const common = useTranslations('common');

  // Hero Carousel Slides - only two images as requested
  const heroSlides = [
    {
      imageSrc: '/images/home/header/1.jpg',
      imageAlt: 'شركة نبع الخليج للنقل المبرد - أسطول مبرد حديث لنقل البضائع',
    },
    {
      imageSrc: '/images/home/header/2.jpg',
      imageAlt: 'خدمات نقل مبردة آمنة وموثوقة في المملكة العربية السعودية',
    }
  ];

  // Services Data
  const services = [
    {
      id: 'dry-freight',
      title: 'نقل البضائع الجافة',
      description: 'خدمة متخصصة في نقل البضائع الجافة مثل الملابس والأثاث. نوفر شاحنات بقدرات متنوعة من أجل احتياجات الشحن الخاصة بك. نعمل على تحديد الأسلوب الأمثل للنقل.',
      imageSrc: '/images/services/1.png',
      link: '/services#dry-freight',
    },
    {
      id: 'refrigerated-vans',
      title: 'خدمات نقل بالشاحنات',
      description: 'نوفر لدينا خدمة توصيل بشاحنات مستوية عند الحاجة. الشاحنات المتنوعة تسمح بنقل الحمولات الضخمة بشكل فعال في جميع أنحاء المملكة المعتمدة.',
      imageSrc: '/images/services/2.png',
      link: '/services#refrigerated-vans',
    },
    {
      id: 'meat-transport',
      title: 'خدمات نقل اللحوم',
      description: 'نوفر لدينا خدمات تتضمن لنقل اللحوم والمواد الغذائية الحساسة. نحن متخصصون في اللوجستيات مع التحكم المطلوب بدرجة حرارة النقل الباردة في جميع أنحاء المملكة نقل وتوزيع.',
      imageSrc: '/images/services/3.png',
      link: '/services#meat-transport',
    },
    {
      id: 'monthly-rental',
      title: 'خدمة التأجير الشهري',
      description: 'خدمة متخصصة في إيجار الشاحنات بالشهر - شهر - سنة. نوفر عقود صيانة وخدمات لوجستية إضافية. مع مميزات تتوافق الاحتياجات وأصناف البضائع.',
      imageSrc: '/images/services/4.png',
      link: '/services#monthly-rental',
    },
    {
      id: 'special-time-service',
      title: 'خدمة الرحلات الخاصة',
      description: 'خدمة متخصصة في نقل البضائع المبردة مثل المنتجات الغذائية والطبية وغيرها. نوفر لعملائنا فرص للاستفادة من الخدمة باستئجار سيارة بالسائق ونقل البضائع داخل مدن المملكة.',
      imageSrc: '/images/services/5.png',
      link: '/services#special-time-service',
    },
    {
      id: 'pharma-transport',
      title: 'نقل الأدوية والمعدات الطبية',
      description: 'خدمات متخصصة لنقل الأدوية والمعدات الحساسة بدرجة عالية. المنتجات تتطلب التحكم الدقيق بدرجات الحرارة أثناء نقلها. نوفر مركبات متخصصة ومجهزة بأنظمة تتبع وتحكم لضمان سلامة المنتجات الطبية.',
      imageSrc: '/images/services/6.png',
      link: '/services#pharma-transport',
    },
  ];

  // Why Us Slides Data
  const whyUsSlides = [
    {
      id: 1,
      imageSrc: '/images/home/why_us/1.png',
      imageAlt: 'أفضل الأسعار للنقل المبرد',
      title: 'أفضل الأسعار',
      description: 'نوفر أسعارًا تنافسية لخدمات النقل المبرد مع الحفاظ على أعلى معايير الجودة. نضمن لك أفضل قيمة مقابل المال مع خدمة استثنائية لنقل بضائعك بأمان.'
    },
    {
      id: 2,
      imageSrc: '/images/home/why_us/2.png',
      imageAlt: 'نغطي جميع أنحاء المملكة',
      title: 'نغطي جميع أنحاء المملكة',
      description: 'خدماتنا تغطي جميع مناطق المملكة العربية السعودية. نصل إلى أبعد المناطق ونضمن وصول شحنتك في الوقت المحدد وبحالة ممتازة أينما كانت وجهتك.'
    },
    {
      id: 3,
      imageSrc: '/images/home/why_us/3.png',
      imageAlt: 'أسطول حديث ومجهز',
      title: 'أسطول حديث ومجهز',
      description: 'نمتلك أسطولًا من المركبات الحديثة المجهزة بأحدث التقنيات لضمان نقل آمن وفعال لجميع أنواع البضائع في مختلف الظروف.'
    },
    {
      id: 4,
      imageSrc: '/images/home/why_us/4.png',
      imageAlt: 'خدمة عملاء متميزة',
      title: 'خدمة عملاء متميزة',
      description: 'نحن ملتزمون بتقديم أفضل خدمة عملاء ممكنة. فريقنا متاح دائمًا للإجابة على استفساراتكم وتلبية احتياجاتكم بكل احترافية وسرعة استجابة.'
    },
    {
      id: 5,
      imageSrc: '/images/home/why_us/5.png',
      imageAlt: 'إلتزام بالوقت والجودة',
      title: 'إلتزام بالوقت والجودة',
      description: 'نلتزم بمواعيد التسليم بدقة عالية ونضمن الحفاظ على جودة منتجاتكم طوال رحلة النقل، من نقطة الاستلام حتى التسليم النهائي.'
    }
  ];

  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Add sample testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "نحن ممتنون لشركة نبع الخليج لخدمات النقل المبرد الاحترافية. لقد ضمنوا وصول شحناتنا الغذائية الحساسة دائمًا في الوقت المحدد وبدرجة الحرارة المثالية. فريقهم متعاون للغاية وخدمتهم موثوقة.",
      name: "فهد القحطاني",
      title: "مدير اللوجستيات، شركة الأغذية الممتازة",
      avatarSrc: "/images/testimonials/Fahad_Alqahtani.png"
    },
    {
      id: 2,
      quote: "خدمة عملاء استثنائية ودعم فني متواصل. ساعدونا في تحسين سلسلة التوريد المبردة لدينا بشكل كبير.",
      name: "جميلة العنزي",
      title: "مديرة العمليات، مستودعات الأدوية الحديثة",
      avatarSrc: "/images/testimonials/Jameela_Alenazi.png"
    },
    {
      id: 3,
      quote: "أسطول شاحنات حديث ومجهز بأحدث التقنيات، مما يمنحنا راحة البال عند نقل منتجاتنا القيمة.",
      name: "عادل الحربي",
      title: "صاحب ومدير، مزارع الخير العضوية",
      avatarSrc: "/images/testimonials/عادل_الحربي.jpg"
    },
    {
      id: 4,
      quote: "نتعامل مع شركة نبع الخليج منذ سنوات، وما زلنا نقدر التزامهم بالمواعيد ودقتهم في العمل. الأسعار تنافسية والخدمة ممتازة.",
      name: "نورة الهذلي",
      title: "مديرة المشتريات، سلسلة متاجر الميرة",
      avatarSrc: "/images/testimonials/نورة_الهذلي.jpg"
    },
    {
      id: 5,
      quote: "اختيارنا لشركة نبع الخليج كان قراراً صائباً. تمكنا من توسيع نطاق أعمالنا بفضل خدماتهم الموثوقة في توصيل منتجاتنا للعملاء في جميع أنحاء المملكة.",
      name: "راكان العسر",
      title: "المدير التنفيذي، شركة الخليج للصناعات الغذائية",
      avatarSrc: "/images/testimonials/Rakan_Alaser.png"
    },
    {
      id: 6,
      quote: "من أفضل شركات النقل المبرد التي تعاملت معها. دقة في المواعيد والتزام بدرجات الحرارة المطلوبة. أنصح بهم للشركات التي تبحث عن خدمة نقل مبرد احترافية.",
      name: "سلمان الرويلي",
      title: "مدير سلسلة التوريد، مصانع الألبان المتحدة",
      avatarSrc: "/images/testimonials/سلمان_الرويلي.jpg"
    }
  ];

  return (
    <Layout>
      <Seo pageTitle={t('hero.title')} />

      {/* Hero Section with Carousel */}
      <HeroCarousel 
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
        slides={heroSlides}
        whatsAppNumber="+966561475554"
      />

      {/* شركة نبع الخليج للنقل المبرد وسريع Section */}
      <section className="py-16 bg-[#00022b] text-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-6">شركة نبع الخليج للنقل المبرد وسريع</h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg leading-relaxed text-center lg:text-right">
                تقدم شركة نبع الخليج خدمات النقل والشحن المبرد والمجمد لمختلف الصناعات، بما في ذلك الصناعات الغذائية، الطبية، والتجميلية. نحن نفتخر بأسطولنا الحديث والمجهز بأحدث التقنيات لضمان وصول البضائع بحالة ممتازة وفي الوقت المحدد.
              </p>
              <p className="text-lg leading-relaxed text-center lg:text-right">
                نحن شركة سعودية رائدة في مجال الدعم اللوجستي والنقل المبرد للمنتجات الغذائية والمستحضرات الطبية والتجميلية. لدينا حاويات بأحجام مختلفة ووسائل لنقل اللحوم بأعلى مستويات الجودة والكفاءة.
              </p>
              <div className="pt-4">
                <p className="text-xl font-semibold text-accent italic text-center lg:text-right">
                  "إذا كنت بحاجة إلى حلول نقل موثوقة ومتخصصة، فلا تتردد في الاتصال بنا. نحن هنا لنضمن وصول بضائعك إلى وجهتها بأمان وفي الوقت المحدد"
                </p>
              </div>
              <div className="pt-6 flex gap-4 justify-center lg:justify-end">
                <Button
                  variant="primary"
                  onClick={() => window.location.href = '/about'}
                >
                  اقرأ المزيد عنا
                </Button>
                <Button
                  variant="whatsapp"
                  onClick={() => window.location.href = '/contact'}
                >
                  تواصل معنا
                </Button>
              </div>
            </div>
            <div className="lg:col-span-4 relative">
              <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/logo.jpg"
                  alt="خدمات النقل المبرد - شركة نبع الخليج"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-navy/30"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-lg flex items-center justify-center shadow-lg transform rotate-3 z-10">
                <div className="transform -rotate-3 text-center">
                  <span className="block text-3xl font-bold text-primary-navy">+15</span>
                  <span className="block text-sm font-medium text-primary-navy">سنوات خبرة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">{t('services.title')}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t('services.description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-[#00022b] text-white">
        <div className="container">
          {/* Header with Vehicle Image */}
          <div className="text-center mb-12 relative">
            <div className="relative h-64 w-full md:w-3/4 lg:w-2/3 mx-auto mb-8">
              <Image 
                src="/images/home/why_us/object.png" 
                alt="شركة نبع الخليج للنقل المبرد - لماذا نحن" 
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl font-bold text-white px-6 py-3 bg-primary-navy/70 rounded-lg">لماذا شركة نبع الخليج</h2>
              </div>
            </div>
            <div className="h-1 w-24 bg-amber-400 mx-auto mb-8"></div>
            <p className="text-white/80 max-w-3xl mx-auto">
              شركة نبع الخليج إختيارك الأول لخدمات النقل المبرد
            </p>
            <p className="text-white/80 max-w-4xl mx-auto mt-4">
              أسطول سيارات في خدمتكم بتعاقد شهري سنوي، وبالمشوار نقل المبرد والمجمد والجاف بين جميع مناطق المملكة وداخل جميع المدن وبين المدن خبرة أكثر من خمسة عشر سنة في مجال النقل المبرد داخل المملكة
            </p>
          </div>

          {/* Professional Slider */}
          <WhyUsSlider slides={whyUsSlides} />

          <div className="flex justify-center mt-10 max-w-md mx-auto">
            <Button
              variant="primary"
              size="lg"
              className="mx-2"
              onClick={() => window.location.href = 'tel:+966561475554'}
            >
              <svg className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {common('buttons.callNow')}
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              className="mx-2"
              onClick={() => window.location.href = 'https://wa.me/+966561475554'}
            >
              <svg className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              {common('buttons.whatsapp')}
            </Button>
          </div>
        </div>
      </section>

      {/* مميزاتنا Section */}
      <section className="py-16 bg-gray-50" dir="rtl">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">مميزاتنا</h2>
            <div className="h-1 w-24 bg-amber-400 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Right Column - Main Feature (moved from left to right) */}
            <div className="hidden md:block md:col-span-2 md:order-first bg-primary-navy rounded-2xl shadow-lg overflow-hidden relative">
              {/* Background image with opacity */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image 
                  src="/images/features/main.png" 
                  alt="خلفية النقل المبرد" 
                  fill
                  sizes="100%"
                  className="object-cover w-full h-full opacity-30" 
                  priority
                  style={{ objectPosition: 'center' }}
                />
              </div>
              
              <div className="p-8 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-amber-400 text-center bg-transparent" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 5px rgba(0,0,34,0.6)' }}>الأفضل في النقل المبرد بالمملكة العربية السعودية</h3>
                
                <p className="text-white/90 mb-5 text-right text-lg leading-relaxed" style={{ textShadow: '0 0 3px rgba(0,0,0,0.7)' }}>
                  شركة نبع الخليج للنقل المبرد تتميز في خدمة نقل المبرد ونقل البضائع الحساسة للحرارة في المملكة. نقدم خدمات ذات جودة عالية ومهنية مع توفير السلامة والموثوقية. نقدم حلاً متكاملاً لاحتياجات نقل البضائع والمواد الحرارية في جميع انحاء المملكة.
                </p>
                
                <p className="text-white/90 mb-5 text-right text-lg leading-relaxed" style={{ textShadow: '0 0 3px rgba(0,0,0,0.7)' }}>
                  بفضل فريقنا المتخصص، نضمن وصول شحناتك في الوقت المحدد وبحالة ممتازة. نحن نستخدم أحدث التقنيات لضمان الحفاظ على درجات الحرارة المناسبة طوال رحلة النقل، مما يحافظ على جودة وسلامة المنتجات الحساسة.
                </p>
                
                <p className="text-white/90 mb-6 text-right text-lg leading-relaxed" style={{ textShadow: '0 0 3px rgba(0,0,0,0.7)' }}>
                  شركة نبع الخليج تفتخر بمصداقيتها وثقة عملاؤها بها تعكس جودة الخدمات التي نقدمها. بفضل تقييمات المستخدمين والمراجعات الإيجابية، يمكن للعملاء الاعتماد على جودة خدمات الشركة واحتراميتها. نقدم خدمات عالية الجودة والامتثال لأعلى معايير الجودة هي جزء من التزام الشركه بإرضاء العملاء وبناء علاقات طويلة الأمد.
                </p>
                
                <p className="text-white/90 mb-7 text-right text-lg leading-relaxed font-semibold" style={{ textShadow: '0 0 3px rgba(0,0,0,0.7)' }}>
                  تثبت هذه الثقة المستمرة لأن شركة نبع الخليج هي الشركة المثلى لاحتياجات نقل المبرد في المملكة. اختر شركة نبع الخليج لتجربة خدمة استثنائية تلبي جميع متطلباتك في مجال النقل المبرد.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 p-3 rounded-lg bg-transparent">
                  <Button
                    variant="whatsapp"
                    size="md"
                    onClick={() => window.location.href = 'https://wa.me/+966561679556'}
                    className="text-white bg-green-600 hover:bg-green-700 border-0 shadow-md min-w-[120px] py-3"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                      </svg>
                      <span>واتساب</span>
                    </div>
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => window.location.href = 'tel:+966561679556'}
                    className="text-white hover:text-white bg-transparent hover:bg-amber-700 border border-amber-400"
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>اتصل بنا</span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>

            {/* Left Column - Feature Grid (moved from right to left) */}
            <div className="md:col-span-3 md:order-last grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ميزة 1 - احصل على افضل العروض والاسعار */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <div className="relative h-56">
                  <Image 
                    src="/images/home/مميزاتنا/33.png" 
                    alt="عروض وخصومات شركة نبع الخليج للنقل المبرد" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3 text-primary-navy text-center">احصل على افضل العروض والاسعار</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">أسعار تنافسية مقارنة بالخدمات المشابهة</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">خصومات مجزية بمناسبات واعياد السنة</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">تغطية واسعة لمناطق المملكة العربية السعودية</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">جودة مضمونة للمحافظة على سلامة منتجاتك</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">حماية تامة للبضائع والتامين عليها</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ميزة 2 - خدمات الشحن والنقل المبرد */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <div className="relative h-56">
                  <Image 
                    src="/images/home/مميزاتنا/24-hours.png" 
                    alt="شاحنة نقل مبرد حديثة" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3 text-primary-navy text-center">خدمات الشحن والنقل المبرد</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">نقل وشحن المواد الغذائية والسريعة التلف</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">نقل وشحن الادوية والمستلزمات الطبية</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">نقل وشحن المنتجات والمستحضرات التجميلية</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">توفير شاحنات مبردة ومجهزة بأحدث الوسائل</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">أسطول حديث من الشاحنات المبردة بأحجام مختلفة</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ميزة 3 - خدمات الدعم الفني الممتازة */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <div className="relative h-56">
                  <Image 
                    src="/images/home/مميزاتنا/customer-service.png" 
                    alt="خدمة الدعم الفني لشركة نبع الخليج للنقل" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3 text-primary-navy text-center">خدمات الدعم الفني الممتازة</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">توفير الرد السريع لطلبات واستفسارات العملاء</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">استشارة لحل المشاكل والإجابة على استفسارات العملاء</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">تزويد العملاء بالملاحظات والتحديثات المستمرة</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">توفير فريق عمل متخصص لتقديم الدعم اللازم</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">توفير حلول عملية وسريعة لمتطلبات العملاء</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ميزة 4 - خدمات الرصد والتتبع للشحنات */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <div className="relative h-56">
                  <Image 
                    src="/images/home/مميزاتنا/tracking.png" 
                    alt="نظام تتبع الشحنات المبردة" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3 text-primary-navy text-center">خدمات الرصد والتتبع للشحنات</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">رصد وتتبع الشحنة الخاصة بك مباشرة اون لاين</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">تزويد العملاء بتقارير دورية ومستمرة</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">مواعيد التسليم الدقيقة والالتزام بالوقت</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                    <li className="flex items-start flex-row-reverse text-right">
                      <span className="flex-grow">توفير خدمات تتبع على جميع انواع الشحنات</span>
                      <svg className="w-5 h-5 text-amber-400 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-4 4L5 7" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <LatestBlogPosts posts={blogPosts} />
      
      {/* Testimonials Section */}
      <TestimonialsSlider testimonials={testimonials} />

      {/* Trust Stats Section */}
      <TrustStats />

      {/* FAQ and Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-navy mb-3">تتبع شحنتك معنا</h2>
            <div className="h-1 w-24 bg-amber-400 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
              يمكنك الاستعلام عن شحنتك بسهولة ومتابعة حالتها أولاً بأول، فقط أدخل رقم الشحنة للاستعلام أو تواصل معنا مباشرة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-flow-row auto-rows-auto">
            {/* Left Side - FAQ Accordion */}
            <div className="flex flex-col">
              {/* Tracking Box */}
              <div className="border rounded-lg shadow-md overflow-hidden bg-white mb-8">
                <div className="bg-[#00022b] p-5 border-b">
                  <h3 className="text-white text-xl font-semibold flex items-center justify-end">
                    <span>تتبع شحنتك</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6 text-right">
                    يمكنك تتبع شحنتك بسهولة من خلال إدخال رقم الشحنة أو الاتصال بنا. سيتم تزويدك بالمعلومات الخاصة بشحنتك بما في
                    ذلك الموقع الحالي وموعد التسليم المتوقع.
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-stretch gap-3 mb-4">
                    <button className="bg-amber-400 hover:bg-amber-500 text-[#00022b] font-bold py-4 px-10 rounded-lg transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap text-lg order-2 md:order-1">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span>تتبع الشحنة</span>
                      </div>
                    </button>
                    <input 
                      type="text" 
                      placeholder="أدخل رقم الشحنة"
                      className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 order-1 md:order-2"
                    />
                  </div>
                  
                  <div className="mt-4 text-right">
                    <p className="text-sm text-gray-500 mb-3">أو يمكنك التواصل معنا مباشرةً</p>
                    <div className="flex flex-col sm:flex-row justify-end gap-5">
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={() => window.location.href = 'tel:+966561675554'}
                        className="text-right inline-flex items-center justify-center w-full sm:w-48 text-lg"
                      >
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span>اتصل بنا</span>
                        </div>
                      </Button>
                      <Button
                        variant="whatsapp"
                        size="lg"
                        onClick={() => window.location.href = 'https://wa.me/+966561675554'}
                        className="text-right inline-flex items-center justify-center w-full sm:w-48 text-lg"
                      >
                        <div className="flex items-center">
                          <svg className="h-6 w-6 ml-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                          </svg>
                          <span>واتساب</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Faqs */}
              <div className="space-y-4 text-right" dir="rtl">
                <div className="border rounded-lg shadow-md overflow-hidden">
                  <div 
                    className="bg-white p-5 border-b cursor-pointer hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center" 
                    onClick={() => toggleAccordion(0)}
                  >
                    <h3 className="text-primary-navy text-xl font-semibold flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      تتبع شحنتك معنا
                    </h3>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 text-amber-400 transition-transform ${openAccordion === 0 ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div 
                    className={`transition-all duration-300 bg-white overflow-hidden ${openAccordion === 0 ? 'max-h-40 border-t border-gray-100' : 'max-h-0'}`}
                  >
                    <div className="p-5">
                      <p className="text-gray-700 mb-4">
                        يمكنك الاستعلام عن شحنتك بسهولة ومتابعة حالتها أولاً بأول، فقط أدخل رقم الشحنة للاستعلام أو تواصل معنا مباشرة.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg shadow-md overflow-hidden">
                  <div 
                    className="bg-white p-5 border-b cursor-pointer hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center" 
                    onClick={() => toggleAccordion(1)}
                  >
                    <h3 className="text-primary-navy text-xl font-semibold flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      ما هي فوائد تتبع الشحنات؟
                    </h3>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 text-amber-400 transition-transform ${openAccordion === 1 ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div 
                    className={`transition-all duration-300 bg-white overflow-hidden ${openAccordion === 1 ? 'max-h-60 border-t border-gray-100' : 'max-h-0'}`}
                  >
                    <div className="p-5">
                      <ul className="space-y-2 text-gray-700 list-disc pr-5">
                        <li>التأكد من وصول الشحنة في الموعد المحدد</li>
                        <li>معرفة الموقع الحالي للشحنة في أي وقت</li>
                        <li>التخطيط المسبق لاستلام الشحنة</li>
                        <li>الحصول على تقديرات دقيقة لوقت الوصول</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg shadow-md overflow-hidden">
                  <div 
                    className="bg-white p-5 border-b cursor-pointer hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center" 
                    onClick={() => toggleAccordion(2)}
                  >
                    <h3 className="text-primary-navy text-xl font-semibold flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      ما هي المعلومات التي يمكنك الحصول عليها من خلال ميزة تتبع الشحنات؟
                    </h3>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 text-amber-400 transition-transform ${openAccordion === 2 ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div 
                    className={`transition-all duration-300 bg-white overflow-hidden ${openAccordion === 2 ? 'max-h-80 border-t border-gray-100' : 'max-h-0'}`}
                  >
                    <div className="p-5">
                      <ul className="space-y-2 text-gray-700 list-disc pr-5">
                        <li>الموقع الحالي للشحنة بدقة عالية</li>
                        <li>تاريخ ووقت التسليم المتوقع</li>
                        <li>محطات العبور التي مرت بها الشحنة</li>
                        <li>بيانات حول ظروف النقل ودرجات الحرارة (للشحنات المبردة)</li>
                        <li>اسم السائق ورقم الاتصال به في بعض الحالات</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Map */}
            <div className="bg-white p-4 rounded-lg shadow-md self-start" style={{ height: '550px' }}>
              <div className="rounded-lg overflow-hidden h-[450px] shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463880.7235502059!2d46.54075407311085!3d24.725555344548376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh!5e0!3m2!1sen!2ssa!4v1655405582249!5m2!1sen!2ssa" 
                  className="w-full h-full border-0" 
                  style={{ pointerEvents: "auto" }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="خريطة الرياض"
                />
              </div>
              <div className="py-4 px-2">
                <h3 className="text-lg font-bold text-primary-navy mb-2">مقر الشركة - الرياض</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">طريق الملك فهد، الرياض، المملكة العربية السعودية</p>
                <div className="flex justify-between">
                  <a 
                    href="https://goo.gl/maps/1JjQP2zUL6V9JGUL8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-amber-500 hover:text-amber-600 font-medium flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    الحصول على الاتجاهات
                  </a>
                  <a 
                    href="https://goo.gl/maps/1JjQP2zUL6V9JGUL8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-navy hover:text-blue-800 font-medium flex items-center"
                  >
                    عرض خريطة أكبر
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support Section */}
      <CustomerSupportSection />

      {/* Saudi Cities Slider */}
      <SaudiCitiesSlider />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-navy to-primary-cyan text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="max-w-2xl mx-auto mb-8">{t('cta.description')}</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Button
              variant="primary"
              size="sm"
              className="text-sm min-w-[120px]"
              onClick={() => window.location.href = 'tel:+966561475554'}
            >
              {common('buttons.callNow')}
            </Button>
            <Button
              variant="whatsapp"
              size="sm"
              className="text-sm min-w-[120px]"
              onClick={() => window.location.href = 'https://wa.me/+966561475554'}
            >
              {common('buttons.whatsapp')}
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ 
  locale = 'ar' 
}) => {
  const messages = await getMessages(locale, ['common', 'home']);
  
  // Mock data for blog posts - this will be replaced with actual API calls later
  const blogPosts: BlogPostSummary[] = [
    {
      id: '1',
      title: 'أفضل شركة نقل مبرد في السعودية: مقارنة بين الخدمات والأسعار',
      excerpt: 'دليل شامل يقارن بين خدمات وأسعار شركات النقل المبرد في المملكة العربية السعودية ليساعدك في اختيار الأفضل لاحتياجاتك...',
      slug: 'best_refrigerated_transport_company_in_saudi_arabia',
      coverImage: '/images/blog/best_refrigerated_transport_company_in_saudi_arabia.jpeg',
      date: '15 مايو 2023',
      category: 'النقل المبرد'
    },
    {
      id: '2',
      title: 'كيف تختار شركة نقل مبرد موثوقة في الرياض؟',
      excerpt: 'نصائح مهمة لاختيار شركة نقل مبرد ذات كفاءة وموثوقية في الرياض، مع التركيز على المعايير الأساسية للاختيار السليم...',
      slug: 'how_to_choose_reliable_refrigerated_transport_in_riyadh',
      coverImage: '/images/blog/how_to_choose_reliable_refrigerated_transport_in_riyadh.jpeg',
      date: '3 يونيو 2023',
      category: 'نصائح ومعلومات'
    },
    {
      id: '3',
      title: 'أهمية التبريد في نقل الأدوية واللقاحات داخل المملكة',
      excerpt: 'شرح تفصيلي لأهمية النقل المبرد للأدوية واللقاحات وتأثيره على فعالية المنتجات الطبية وسلامة المستهلكين...',
      slug: 'importance_of_cold_chain_in_pharma_transport_saudi',
      coverImage: '/images/blog/importance_of_cold_chain_in_pharma_transport_saudi.jpeg',
      date: '19 يوليو 2023',
      category: 'الخدمات اللوجستية'
    },
    {
      id: '4',
      title: 'تقنيات حديثة في النقل المبرد: كيف تحافظ على جودة المنتجات الغذائية',
      excerpt: 'استعراض لأحدث التقنيات المستخدمة في مجال النقل المبرد وتأثيرها على الحفاظ على جودة وسلامة المنتجات الغذائية أثناء النقل...',
      slug: 'modern_refrigeration_technologies_for_food_quality',
      coverImage: '/images/blog/how_cold_chain_tracking_works_and_its_benefits.jpg',
      date: '8 أغسطس 2023',
      category: 'تكنولوجيا النقل'
    },
    {
      id: '5',
      title: 'نقل المواد الغذائية المجمدة: دليل شامل للشركات السعودية',
      excerpt: 'دليل متكامل للشركات السعودية حول أفضل الممارسات في نقل وتوزيع المواد الغذائية المجمدة مع الحفاظ على سلسلة التبريد...',
      slug: 'frozen_food_transport_guide_for_saudi_companies',
      coverImage: '/images/blog/frozen_meat_transport_requirements_in_saudi_arabia.jpeg',
      date: '17 سبتمبر 2023',
      category: 'النقل المبرد'
    },
    {
      id: '6',
      title: 'فوائد الاستعانة بخدمات النقل المبرد المتخصصة للمطاعم والمقاهي',
      excerpt: 'كيف يمكن للمطاعم والمقاهي الاستفادة من خدمات النقل المبرد المتخصصة لتعزيز كفاءة سلسلة التوريد وضمان جودة المكونات...',
      slug: 'benefits_of_specialized_refrigerated_transport_for_restaurants',
      coverImage: '/images/blog/temperature_sensitive_delivery_solutions_in_jeddah.jpeg',
      date: '25 أكتوبر 2023',
      category: 'خدمات المطاعم'
    },
  ];
  
  return {
    props: {
      messages,
      locale, // Pass locale to _app.tsx
      blogPosts,
    },
  };
}; 