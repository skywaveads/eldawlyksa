import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import Layout from '../components/layout/Layout';
import Hero from '../components/common/Hero';
import FaqAccordion from '../components/common/FaqAccordion';
import MapEmbed from '../components/common/MapEmbed';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Label from '../components/ui/Label';
import { getMessages } from '../lib/getMessages';

type TrackingStatus = 'idle' | 'loading' | 'success' | 'error';

export default function TrackOrder() {
  const t = useTranslations('common');
  const tracking = useTranslations('common.tracking');
  
  const [trackingNumber, setTrackingNumber] = useState('');
  const [status, setStatus] = useState<TrackingStatus>('idle');
  const [error, setError] = useState('');
  
  // Mock tracking result for demo
  const mockTrackingResult = {
    trackingNumber: 'NK123456789',
    status: 'في الطريق',
    origin: 'الرياض',
    destination: 'جدة',
    departureDate: '2025-04-01',
    estimatedDelivery: '2025-04-03',
    currentLocation: 'المدينة المنورة',
    lastUpdate: '2025-04-02 10:30 AM',
  };
  
  // FAQ items
  const faqItems = [
    {
      id: 1,
      question: 'كيف يمكنني تتبع شحنتي؟',
      answer: 'يمكنك تتبع شحنتك بإدخال رقم التتبع الخاص بك في الحقل أعلاه والضغط على زر "تتبع الآن". سيعرض النظام حالة شحنتك وموقعها الحالي.'
    },
    {
      id: 2,
      question: 'أين يمكنني العثور على رقم التتبع الخاص بي؟',
      answer: 'يتم إرسال رقم التتبع الخاص بك عبر رسالة نصية أو بريد إلكتروني عند تأكيد طلبك. يمكنك أيضًا العثور عليه في إيصال الشحن أو من خلال التواصل مع خدمة العملاء.'
    },
    {
      id: 3,
      question: 'كم مرة يتم تحديث معلومات التتبع؟',
      answer: 'يتم تحديث معلومات التتبع في الوقت الفعلي. يقوم سائقونا بتحديث حالة الشحنة في كل مرحلة رئيسية من رحلة النقل.'
    },
    {
      id: 4,
      question: 'ماذا أفعل إذا لم أتمكن من العثور على معلومات شحنتي؟',
      answer: <div>إذا لم تتمكن من العثور على معلومات شحنتك، يرجى التأكد من صحة رقم التتبع. إذا استمرت المشكلة، يمكنك التواصل مع خدمة العملاء على الرقم <span dir="ltr" style={{ unicodeBidi: 'embed', direction: 'ltr', display: 'inline-block' }}>+966 561 475 554</span>.</div>
    },
    {
      id: 5,
      question: 'هل يمكنني تتبع أكثر من شحنة في نفس الوقت؟',
      answer: 'نعم، يمكنك تتبع أكثر من شحنة عن طريق إدخال كل رقم تتبع بشكل منفصل.'
    }
  ];
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      setError(t('validation.required'));
      return;
    }
    
    setStatus('loading');
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      if (trackingNumber === 'NK123456789' || trackingNumber === '123456789') {
        setStatus('success');
      } else {
        setStatus('error');
        setError(tracking('noResults'));
      }
    }, 1500);
  };
  
  return (
    <Layout>
      <Seo pageTitle={tracking('title')} />
      
      {/* Hero Section */}
      <Hero
        title={tracking('title')}
        description={tracking('description')}
        imageSrc="/images/track.png"
        imageAlt={tracking('title')}
        primaryButtonText={t('buttons.callNow')}
        primaryButtonHref="tel:+966561475554"
      />
      
      {/* Tracking Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Tracking Form & FAQs */}
            <div>
              {/* Tracking Form */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold text-primary-navy mb-6">
                  {tracking('title')}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="trackingNumber" required>
                      {tracking('trackingNumber')}
                    </Label>
                    <div className="flex flex-row-reverse" dir="rtl">
                      <Input
                        id="trackingNumber"
                        type="text"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        placeholder="NK123456789"
                        className="rounded-r-none"
                        error={error}
                        style={{textAlign: 'right'}}
                      />
                      <Button
                        type="submit"
                        variant="primary"
                        className="rounded-l-none"
                        isLoading={status === 'loading'}
                      >
                        {t('buttons.trackNow')}
                      </Button>
                    </div>
                  </div>
                </form>
                
                {/* Tracking Result */}
                {status === 'success' && (
                  <div className="mt-6 p-6 border border-green-200 rounded-md bg-green-50">
                    <h3 className="text-lg font-semibold text-primary-navy mb-3">
                      معلومات الشحنة #{mockTrackingResult.trackingNumber}
                    </h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between pb-2 border-b border-green-200">
                        <span className="font-medium">الحالة:</span>
                        <span className="text-green-600 font-semibold">{mockTrackingResult.status}</span>
                      </div>
                      
                      <div className="flex justify-between pb-2 border-b border-green-200">
                        <span className="font-medium">من:</span>
                        <span>{mockTrackingResult.origin}</span>
                      </div>
                      
                      <div className="flex justify-between pb-2 border-b border-green-200">
                        <span className="font-medium">إلى:</span>
                        <span>{mockTrackingResult.destination}</span>
                      </div>
                      
                      <div className="flex justify-between pb-2 border-b border-green-200">
                        <span className="font-medium">تاريخ الشحن:</span>
                        <span>{mockTrackingResult.departureDate}</span>
                      </div>
                      
                      <div className="flex justify-between pb-2 border-b border-green-200">
                        <span className="font-medium">تاريخ التسليم المتوقع:</span>
                        <span>{mockTrackingResult.estimatedDelivery}</span>
                      </div>
                      
                      <div className="flex justify-between pb-2 border-b border-green-200">
                        <span className="font-medium">الموقع الحالي:</span>
                        <span>{mockTrackingResult.currentLocation}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="font-medium">آخر تحديث:</span>
                        <span>{mockTrackingResult.lastUpdate}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* FAQs */}
              <FaqAccordion
                items={faqItems}
                title="الأسئلة الشائعة حول تتبع الشحنات"
              />
            </div>
            
            {/* Right Column - Map */}
            <div className="hidden lg:block">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h2 className="text-2xl font-bold text-primary-navy mb-6">
                  موقع الشحنة
                </h2>
                
                <MapEmbed
                  lat="24.7136"
                  lng="46.6753"
                  title="موقع الشحنة"
                  height="600px"
                />
              </div>
            </div>
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
      messages,
    },
  };
}; 